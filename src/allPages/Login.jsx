import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { login } from '../services/authService';
import { useState } from 'react';

const schema = yup.object().shape({
  email: yup.string().email('Email invalide').required('Email requis'),
  password: yup.string().min(6, 'Au moins 6 caractères').required('Mot de passe requis'),
  remember: yup.boolean(),
});

export default function Login() {
  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setServerError('');
    try {
      const res = await login(data.email, data.password);
      const storage = data.remember ? localStorage : sessionStorage;
      storage.setItem('token', res.access_token);
      navigate('/');
    } catch (err) {
      setServerError(err.message || 'Échec de la connexion.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-2xl font-bold text-center">Connexion</h2>

      {serverError && <p className="text-red-600 text-sm">{serverError}</p>}

      <div>
        <input
          type="email"
          placeholder="Email"
          {...register('email')}
          className="w-full border rounded p-2"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <input
          type="password"
          placeholder="Mot de passe"
          {...register('password')}
          className="w-full border rounded p-2"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" {...register('remember')} id="remember" className="w-4 h-4" />
        <label htmlFor="remember" className="text-sm">Se souvenir de moi</label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Connexion...' : 'Se connecter'}
      </button>

    </form>
  );
}
