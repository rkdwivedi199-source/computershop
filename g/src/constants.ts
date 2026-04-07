import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'cpu-1',
    name: 'Intel Core i9-14900K',
    category: 'CPU',
    price: 589.99,
    image: 'https://picsum.photos/seed/cpu1/600/600',
    description: 'The ultimate gaming and productivity processor with 24 cores and 32 threads.',
    stock: 12,
    specs: {
      'Cores': '24 (8P + 16E)',
      'Threads': '32',
      'Max Clock': '6.0 GHz',
      'Socket': 'LGA 1700'
    }
  },
  {
    id: 'gpu-1',
    name: 'NVIDIA GeForce RTX 4090',
    category: 'GPU',
    price: 1599.99,
    image: 'https://picsum.photos/seed/gpu1/600/600',
    description: 'The fastest graphics card in the world, powered by Ada Lovelace architecture.',
    stock: 5,
    specs: {
      'VRAM': '24GB GDDR6X',
      'CUDA Cores': '16384',
      'Power': '450W TDP',
      'Interface': 'PCIe 4.0 x16'
    }
  },
  {
    id: 'ram-1',
    name: 'Corsair Vengeance RGB 32GB DDR5',
    category: 'RAM',
    price: 124.99,
    image: 'https://picsum.photos/seed/ram1/600/600',
    description: 'High-performance DDR5 memory with customizable RGB lighting.',
    stock: 25,
    specs: {
      'Capacity': '32GB (2x16GB)',
      'Speed': '6000 MT/s',
      'Latency': 'CL30',
      'Type': 'DDR5'
    }
  },
  {
    id: 'ssd-1',
    name: 'Samsung 990 Pro 2TB',
    category: 'Storage',
    price: 179.99,
    image: 'https://picsum.photos/seed/ssd1/600/600',
    description: 'Blazing fast NVMe SSD for lightning-quick load times.',
    stock: 40,
    specs: {
      'Capacity': '2TB',
      'Read Speed': '7450 MB/s',
      'Write Speed': '6900 MB/s',
      'Interface': 'PCIe 4.0 x4'
    }
  },
  {
    id: 'mobo-1',
    name: 'ASUS ROG Maximus Z790 Hero',
    category: 'Motherboard',
    price: 629.99,
    image: 'https://picsum.photos/seed/mobo1/600/600',
    description: 'Premium motherboard with robust power delivery and advanced cooling.',
    stock: 8,
    specs: {
      'Chipset': 'Z790',
      'Socket': 'LGA 1700',
      'Memory': '4x DDR5',
      'Form Factor': 'ATX'
    }
  },
  {
    id: 'psu-1',
    name: 'Seasonic Vertex GX-1200',
    category: 'PSU',
    price: 249.99,
    image: 'https://picsum.photos/seed/psu1/600/600',
    description: 'High-efficiency 80+ Gold power supply with ATX 3.0 support.',
    stock: 15,
    specs: {
      'Wattage': '1200W',
      'Efficiency': '80+ Gold',
      'Modular': 'Fully Modular',
      'Standard': 'ATX 3.0'
    }
  }
];

export const CATEGORIES = ['All', 'CPU', 'GPU', 'RAM', 'Storage', 'Motherboard', 'PSU', 'Case', 'Cooling'] as const;
