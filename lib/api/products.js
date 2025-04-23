import { supabase } from '../supabase';
export async function fetchProducts() {
  const { data, error } = await supabase.from('products').select(`
       *,
       category:categories (
         id,
         name
       )
     `);

  if (error) throw error;
  return data;
}

export const createProduct = async (product) => {
  const { data, error } = await supabase.from('products').insert([product]);
  if (error) throw error;
  return data;
};

export const updateProduct = async (id, updates) => {
  const { data, error } = await supabase.from('products').update(updates).eq('id', id);
  if (error) throw error;
  return data;
};

export const deleteProduct = async (id) => {
  const { error } = await supabase.from('products').delete().eq('id', id);
  if (error) throw error;
};
