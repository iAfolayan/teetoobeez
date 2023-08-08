import {HiHome, HiBriefcase} from 'react-icons/hi'
import {BsShop} from 'react-icons/bs'
import {TiContacts} from 'react-icons/ti'
interface Product {
  id: any
  prdImg: string
  prdName: string
  prdAmount: number
  rating: number
  stock: boolean
  category: string
}

interface MenuProp {
  text: string
  link: string
  Icon: JSX.Element
}

export const MenuItems: MenuProp[] = [
  {
    text: 'Home',
    link: '/',
    Icon: <HiHome />,
  },
  {
    text: 'About Us',
    link: '/about',
    Icon: <HiBriefcase />,
  },
 /*  {
    text: 'Shops',
    link: '/shops',
    Icon: <BsShop />,
  },
  {
    text: 'Contact',
    link: '/contact',
    Icon: <TiContacts />,
  }, */
]

export const ProductItems: Product[] = [
  {
    id: 1,
    prdImg: '/LUXE_03.JPG',
    prdName: 'LUXE_03',
    prdAmount: 5500,
    rating: 4,
    stock: true,
    category: 'ANKLET (Leg Chain)',
  },
  {
    id: 2,
    prdImg: '/LUXE_04.JPG',
    prdName: 'LUXE_04',
    prdAmount: 10000,
    stock: true,
    rating: 4,
    category: 'Necklaces',
  },
  {
    id: 3,
    prdImg: '/LUXE_05.jpg',
    prdName: 'LUXE_05',
    prdAmount: 50000,
    stock: false,
    rating: 5,
    category: 'ANKLET (Leg Chain)',
  },
  {
    id: 4,
    prdImg: '/LUXE_06.JPG',
    prdName: 'LUXE_06',
    prdAmount: 40000,
    rating: 5,
    stock: true,
    category: 'Bangles',
  },
  {
    id: 5,
    prdImg: '/LUXE_03.JPG',
    prdName: 'LUXE_03',
    prdAmount: 50000,
    stock: false,
    rating: 4,
    category: 'Earrings',
  },
  {
    id: 6,
    prdImg: '/1.jpg',
    prdName: 'Just in now Fast',
    prdAmount: 50000,
    stock: true,
    rating: 1,
    category: 'Necklaces',
  },
  {
    id: 7,
    prdImg: '/products/LUXE_07.JPG',
    prdName: 'LUXE_07',
    prdAmount: 6000,
    stock: true,
    rating: 4,
    category: 'Necklaces',
  },
  {
    id: 8,
    prdImg: '/products/LUXE_08.JPG',
    prdName: 'LUXE_08',
    prdAmount: 5000,
    stock: true,
    rating: 5,
    category: 'Necklaces',
  },
  {
    id: 9,
    prdImg: '/products/LUXE_09.JPG',
    prdName: 'LUXE_09',
    prdAmount: 5000,
    stock: true,
    rating: 4,
    category: 'ANKLET (Leg Chain)',
  },
  {
    id: 10,
    prdImg: '/products/LUXE_12.JPG',
    prdName: 'LUXE_12',
    prdAmount: 4500,
    stock: true,
    rating: 4,
    category: 'Necklaces',
  },
  {
    id: 11,
    prdImg: '/products/LUXE_13.JPG',
    prdName: 'LUXE_13',
    prdAmount: 4500,
    stock: true,
    rating: 4,
    category: 'ANKLET (Leg Chain)',
  },
  {
    id: 12,
    prdImg: '/products/LUXE_14.JPG',
    prdName: 'LUXE_14',
    prdAmount: 6000,
    stock: true,
    rating: 4,
    category: 'Necklaces',
  },
  {
    id: 13,
    prdImg: '/products/LUXE_15.JPG',
    prdName: 'LUXE_15',
    prdAmount: 5000,
    stock: true,
    rating: 4,
    category: 'Necklaces',
  },
  {
    id: 14,
    prdImg: '/products/LUXE_16.JPG',
    prdName: 'LUXE_16',
    prdAmount: 4500,
    stock: true,
    rating: 4,
    category: 'Necklaces',
  },
  {
    id: 15,
    prdImg: '/products/LUXE_17.JPG',
    prdName: 'LUXE_17',
    prdAmount: 5000,
    stock: true,
    rating: 4,
    category: 'Necklaces',
  },
  {
    id: 16,
    prdImg: '/products/LUXE_18.JPG',
    prdName: 'LUXE_18',
    prdAmount: 5000,
    stock: true,
    rating: 5,
    category: 'Necklaces',
  },
  {
    id: 17,
    prdImg: '/products/LUXE_19.JPG',
    prdName: 'LUXE_19',
    prdAmount: 5000,
    stock: true,
    rating: 4,
    category: 'Necklaces',
  },
  {
    id: 18,
    prdImg: '/products/LUXE_20.JPG',
    prdName: 'LUXE_20',
    prdAmount: 5000,
    stock: true,
    rating: 5,
    category: 'Necklaces',
  },
  {
    id: 19,
    prdImg: '/products/LUXE_21.JPG',
    prdName: 'LUXE_21',
    prdAmount: 4000,
    stock: true,
    rating: 3,
    category: 'Necklaces',
  },
  {
    id: 20,
    prdImg: '/products/LUXE_22.JPG',
    prdName: 'LUXE_22',
    prdAmount: 4500,
    stock: true,
    rating: 5,
    category: 'Necklaces',
  },
  {
    id: 21,
    prdImg: '/products/LUXE_119.JPG',
    prdName: 'LUXE_119',
    prdAmount: 9000,
    stock: true,
    rating: 5,
    category: 'Necklaces',
  },
  {
    id: 22,
    prdImg: '/products/TTB_120.JPG',
    prdName: 'TTB_120',
    prdAmount: 4500,
    stock: true,
    rating: 5,
    category: 'Necklaces',
  },
]

export const AboutList = [
  {
    Jewelry: [
      {
        title: 'Fashion Earrings',
        desc: 'Teetoobeez offers a variety of fashion earrings that showcase unique designs and cultural influences',
      },
      {
        title: 'Fashion Necklaces',
        desc: "Explore Teetoobeez's collection of fashion necklaces, incorporating elements from different cultures to create statement pieces.",
      },
      {
        title: 'Hand Beads',
        desc: 'Discover a selection of hand beads that add a touch of tradition and elegance to any outfit',
      },
      {
        title: 'Wrist Bracelets',
        desc: 'Teetoobeez offers wrist bracelets with distinctive designs, blending traditional and contemporary aesthetics',
      },
      {
        title: 'Waist Beads',
        desc: 'Adorn yourself with waist beads that celebrate cultural heritage and provide a fashionable accessory',
      },
      {
        title: 'Anklet Beads',
        desc: "Complete your look with Teetoobeez's anklet beads, featuring eye-catching designs inspired by various cultures",
      },
    ],
    'Traditional Attire': [
      {
        title: "African Wears (Men and Women Native)",
        desc: "Teetoobeez presents a range of African-inspired clothing, including traditional native wears for both men and women"
      },
      {
        title: "Costume Set for Natives",
        desc: "Explore Teetoobeez's costume sets for natives, +offering coordinated ensembles that reflect cultural traditions and celebrate heritage"
      }
    ],
  },
]
