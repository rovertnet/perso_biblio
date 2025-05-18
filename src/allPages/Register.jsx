import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { registerApi } from '../services/authService';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const schema = yup.object().shape({
  email: yup.string().email('Email invalide').required('Email requis'),
  password: yup.string().min(6, 'Au moins 6 caractères').required('Mot de passe requis'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Les mots de passe doivent correspondre')
    .required('Confirmation requise'),
});

export default function Register() {
  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setServerError('');
    try {
      await registerApi(data.email, data.password);
      navigate('/login');
    } catch (err) {
      setServerError(err.message || 'Échec de l’inscription.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4 mt-28 mb-14">
      <h2 className="text-2xl font-bold text-center">Créer un compte</h2>

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

      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Mot de passe"
          {...register('password')}
          className="w-full border rounded p-2 pr-10"
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-2.5 cursor-pointer text-gray-600"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      <div>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Confirmer le mot de passe"
          {...register('confirmPassword')}
          className="w-full border rounded p-2"
        />
        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Création...' : 'Créer un compte'}
      </button>

      <p className="text-center text-sm text-gray-600">
        Vous avez déjà un compte ?{' '}
        <Link to="/login" className="text-blue-600 hover:underline">Connectez-vous</Link>
      </p>
    </form>
  );
}
