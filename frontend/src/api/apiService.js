import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const getAllProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const createProduct = async (productData) => {
  const response = await axios.post(`${API_URL}/products`, productData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};
