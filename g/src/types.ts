export interface Product {
  id: string;
  name: string;
  category: 'CPU' | 'GPU' | 'RAM' | 'Storage' | 'Motherboard' | 'PSU' | 'Case' | 'Cooling';
  price: number;
  image: string;
  specs: Record<string, string>;
  description: string;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}
