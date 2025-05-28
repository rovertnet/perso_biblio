// src/pages/CategoryBooks.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api"; // ← Ton axios instance

const CategoryBooks = () => {
  const { id } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await api.get(`/categories/${id}/books`);
        setBooks(res.data);
      } catch (error) {
        console.error("Erreur lors du chargement des livres :", error);
      }
    };

    fetchBooks();
  }, [id]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Livres de la catégorie</h1>
      <ul className="space-y-2">
        {books.map((book) => (
          <li key={book.id} className="p-4 border rounded shadow-sm">
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p>{book.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryBooks;
