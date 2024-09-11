import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

type productId = number;

// Promise<Product[]> is a generic type that helps to show that the value can be avaiable now or in the future or never. Promise<T> syntax
export const api = async (): Promise<Product[]> => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products", error);
    throw error;
  }
};

export const productApi = async (id: productId): Promise<Product> => {
  try {
    const resp = await axios.get<Product>(
      `https://dummyjson.com/products/${id}`
    );
    return resp.data;
  } catch (error) {
    console.error("Error fetching products", error);
    throw error;
  }
};
