import instance from './api';

export const getAllCategories = () => {
  return instance.get('/categories');
};

export const getCategoryById = (id) => {
  return instance .get(`/categories/${id}`);
};

export const createCategory = (data) => {
  return instance .post('/categories', data);
};
export const updateCategory = (id, data) => {
  return instance .put(`/categories/${id}`, data);
};

// etc.
