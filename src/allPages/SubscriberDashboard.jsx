// pages/SubscriberDashboard.jsx
import { useEffect, useState } from 'react';
import { getUserBooks } from '../services/bookService'; // à créer
import { useAuth } from '../context/AuthContext';

export default function SubscriberDashboard() {
  const { user } = useAuth();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getUserBooks(); // récupère les livres de l'abonné
        setBooks(data);
      } catch (err) {
        console.error('Erreur de chargement des livres:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const totalDownloads = books.filter(b => b.downloaded).length;

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-4">Bonjour, {user?.name || 'abonné'} 👋</h1>

      {/* Statistiques */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard label="Livres disponibles" value={books.length} />
        <StatCard label="Téléchargements" value={totalDownloads} />
        <StatCard label="Lectures" value={books.length * 3} /> {/* Exemple */}
        <StatCard label="Favoris" value={2} /> {/* À remplacer dynamiquement */}
      </div>

      {/* Liste de livres */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Mes livres</h2>
        {loading ? (
          <p>Chargement...</p>
        ) : books.length === 0 ? (
          <p>Aucun livre trouvé.</p>
        ) : (
          <ul className="space-y-4">
            {books.map(book => (
              <li key={book.id} className="border rounded p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">{book.title}</h3>
                  <p className="text-sm text-gray-500">{book.author}</p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                    Lire
                  </button>
                  <a
                    href={book.downloadUrl}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                    download
                  >
                    Télécharger
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
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

