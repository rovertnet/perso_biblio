import Layout from '../../components/Layout';
import { useEffect, useState } from 'react';
import { getUserBooks } from '../../services/bookService';
import { useAuth } from '../../context/AuthContext';

export default function AbonneSpace() {
  const { user } = useAuth();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getUserBooks()
      .then(setBooks)
      .catch(console.error);
  }, []);

  const totalDownloads = books.filter(b => b.downloaded).length;
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Bienvenue {user?.name || 'abonné'} 👋</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard label="Livres disponibles" value={books.length} />
        <StatCard label="Téléchargements" value={totalDownloads} />
        <StatCard label="Lectures" value={books.length * 3} /> {/* Exemple */}
        <StatCard label="Favoris" value={2} /> {/* À remplacer dynamiquement */}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Mes livres</h3>
        <ul className="space-y-4">
          {books.map(book => (
            <li key={book.id} className="border rounded p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">{book.title}</p>
                <p className="text-sm text-gray-500">{book.author}</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded">Lire</button>
                <a
                  href={book.downloadUrl}
                  className="bg-green-600 text-white px-3 py-1 rounded"
                  download
                >
                  Télécharger
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="bg-gray-100 rounded p-4 text-center shadow">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}
