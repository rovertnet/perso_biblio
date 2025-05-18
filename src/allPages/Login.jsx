// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { loginApi } from '../services/authService';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const schema = yup.object().shape({
//   email: yup.string().email('Email invalide').required('Email requis'),
//   password: yup.string().min(6, 'Au moins 6 caractères').required('Mot de passe requis'),
//   remember: yup.boolean(),
// });

// export default function Login() {
//   const [serverError, setServerError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       email: '',
//       password: '',
//       remember: false,
//     },
//   });

//   const onSubmit = async (data) => {
//     setLoading(true);
//     setServerError('');
//     try {
//       const res = await loginApi(data.email, data.password);
//       const storage = data.remember ? localStorage : sessionStorage;
//       storage.setItem('token', res.access_token);
//       navigate('/shop');
//     } catch (err) {
//       setServerError(err.message || 'Échec de la connexion.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4 mt-32 mb-14">
//       <h2 className="text-2xl font-bold text-center">Connexion</h2>

//       {serverError && <p className="text-red-600 text-sm">{serverError}</p>}

//       <div>
//         <input
//           type="email"
//           placeholder="Email"
//           {...register('email')}
//           className="w-full border rounded p-2"
//         />
//         {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//       </div>

//       <div>
//         <input
//           type="password"
//           placeholder="Mot de passe"
//           {...register('password')}
//           className="w-full border rounded p-2"
//         />
//         {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
//       </div>

//       <div className="flex items-center gap-2">
//         <input type="checkbox" {...register('remember')} id="remember" className="w-4 h-4" />
//         <label htmlFor="remember" className="text-sm">Se souvenir de moi</label>
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
//         disabled={loading}
//       >
//         {loading ? 'Connexion...' : 'Se connecter'}
//       </button>

//     </form>
//   );
// }

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { loginApi } from '../services/authService';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle, FaApple, FaFacebook } from 'react-icons/fa';

const schema = yup.object().shape({
  email: yup.string().email('Email invalide').required('Email requis'),
  password: yup.string().min(6, 'Au moins 6 caractères').required('Mot de passe requis'),
  remember: yup.boolean(),
});

export default function Login() {
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
      remember: false,
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setServerError('');
    try {
      const res = await loginApi(data.email, data.password);
      const storage = data.remember ? localStorage : sessionStorage;
      storage.setItem('token', res.access_token);
      navigate('/shop');
    } catch (err) {
      setServerError(err.message || 'Échec de la connexion.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4 mt-32 mb-14">
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

      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Mot de passe"
          {...register('password')}
          autoComplete="current-password"
          autoFocus
          required
          minLength={6}
          maxLength={20}
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$"
          title="Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule et un chiffre."
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

      <div className="flex justify-between items-center text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" {...register('remember')} className="w-4 h-4" />
          Se souvenir de moi
        </label>
        <a href="/forgot-password" className="text-blue-600 hover:underline">Mot de passe oublié ?</a>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50 cursor-pointer"
        disabled={loading}
      >
        {loading ? 'Connexion...' : 'Se connecter'}
      </button>

      <p className="text-center text-sm text-gray-600">
        Vous n'avez pas de compte ?{' '}
        <Link to="/register" className="text-blue-600 hover:underline">Inscrivez-vous</Link>
      </p>

      <div className="text-center text-sm text-gray-500">Ou continue avec</div>

      <div className="flex justify-center gap-4">
        <button type="button" className="flex items-center gap-2 border px-4 py-2 rounded hover:bg-gray-100">
          <FaGoogle /> Google
        </button>
        <button type="button" className="flex items-center gap-2 border px-4 py-2 rounded hover:bg-gray-100">
          <FaApple /> Apple
        </button>
        <button type="button" className="flex items-center gap-2 border px-4 py-2 rounded hover:bg-gray-100">
          <FaFacebook /> Facebook
        </button>
      </div>
    </form>
  );
}

