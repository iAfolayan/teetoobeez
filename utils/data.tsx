interface Product {
    id: any;
    prdImg: string;
    prdName: string;
    prdAmount: number;
    rating: number;
    stock: boolean;
    category: string
}

export const ProductItems: Product[] = [
  {
    id: 1,
    prdImg: "/LUXE_03.JPG",
    prdName: "LUXE_03",
    prdAmount: 5500,
    rating: 4,
    stock: true,
    category: "ANKLET (Leg Chain)",
  },
  {
    id: 2,
    prdImg: "/LUXE_04.JPG",
    prdName: "LUXE_04",
    prdAmount: 10000,
    stock: true,
    rating: 4,
    category: "Necklaces",
  },
  {
    id: 3,
    prdImg: "/LUXE_05.jpg",
    prdName: "LUXE_05",
    prdAmount: 50000,
    stock: false,
    rating: 5,
    category: "ANKLET (Leg Chain)",
  },
  {
    id: 4,
    prdImg: "/LUXE_06.JPG",
    prdName: "LUXE_06",
    prdAmount: 40000,
    rating: 5,
    stock: true,
    category: "Bangles",
  },
  {
    id: 5,
    prdImg: "/LUXE_03.JPG",
    prdName: "LUXE_03",
    prdAmount: 50000,
    stock: false,
    rating: 4,
    category: "Earrings",
  },
  {
    id: 6,
    prdImg: "/1.jpg",
    prdName: "Just in now Fast",
    prdAmount: 50000,
    stock: true,
    rating: 1,
    category: "Necklaces",
  },
];