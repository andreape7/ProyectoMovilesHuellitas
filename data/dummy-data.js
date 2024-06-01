import Category from '../models/category';
import Product from '../models/product';

export const CATEGORIES = [
  new Category('c1', 'Comida para Perros', '#f5428d'),
  new Category('c2', 'Comida para Gatos', '#f54242'),
  new Category('c3', 'Medicina para Animales', '#f5a442'),
  new Category('c4', 'Correas para Mascotas', '#f5d142'),
  new Category('c5', 'Ropa para Animales', '#368dff')
];

export const PRODUCTS = [
  new Product(
    'p1',
    ['c1'],
    'Croquetas para Perro Adulto',
    'premium',
    'disponible',
    'https://www.pedigree.cl/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf1511/files/2022-10/7797453972536-product-image-1.png',
    50,
    [
      'Carne de pollo',
      'Arroz',
      'Vitaminas',
      'Minerales'
    ],
    [
      'Proveer 2 tazas al día para perros medianos.',
      'Asegurarse de que el perro tenga siempre agua fresca.'
    ],
    true,
    true,
    true,
    true
  ),
  new Product(
    'p2',
    ['c2'],
    'Alimento Húmedo para Gato',
    'económico',
    'disponible',
    'https://www.whiskas.com.mx/sites/g/files/fnmzdf4861/files/2023-11/70646024167-product-image-1.png',
    20,
    [
      'Pescado',
      'Gelatina',
      'Vitaminas'
    ],
    [
      'Servir una lata por cada 4kg de peso del gato al día.',
      'Refrigerar la porción no utilizada.'
    ],
    true,
    true,
    true,
    false
  ),
  new Product(
    'p3',
    ['c3'],
    'Antipulgas para Perros y Gatos',
    'premium',
    'disponible',
    'https://mx.virbac.com/files/live/sites/virbac-mx/files/mexico%20correctas/productos/600/comfortis_140mg.png',
    30,
    [
      'Fipronil',
      'Metopreno'
    ],
    [
      'Aplicar una pipeta en la base del cuello del animal una vez al mes.',
      'No bañar al animal 48 horas antes y después de la aplicación.'
    ],
    true,
    true,
    true,
    true
  ),
  new Product(
    'p4',
    ['c4'],
    'Correa Extensible para Perro',
    'lujoso',
    'disponible',
    'https://www.superpet.club/15347-large_default/correa-extensible-perro-negro-azul-flexi-cordon.jpg',
    25,
    [
      'Nylon',
      'Metal'
    ],
    [
      'Ajustar la longitud de la correa según sea necesario.',
      'Enganchar al collar del perro de manera segura.'
    ],
    true,
    true,
    true,
    false
  ),
  new Product(
    'p5',
    ['c5'],
    'Suéter de Invierno para Gato',
    'económico',
    'disponible',
    'https://png.pngtree.com/png-clipart/20231204/original/pngtree-a-cute-snow-cat-with-colorful-sweater-clipart-png-image_13770923.png',
    15,
    [
      'Lana',
      'Poliéster'
    ],
    [
      'Seleccionar la talla adecuada para el gato.',
      'Lavar a mano con agua fría.'
    ],
    true,
    true,
    true,
    false
  )
];
