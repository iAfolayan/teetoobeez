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
  Icon?: JSX.Element
}

export const MenuItems: MenuProp[] = [
  {
    text: 'Home',
    link: '/',
    Icon: <HiHome />,
  },
  {
    text: 'About',
    link: '/about',
  },
  {
    text: 'Products',
    link: '/products',
  },
  {
    text: 'Services',
    link: '/services',
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

export const OurServices = [
  {
    title: "Limited Diversity:", 
    desc: "The market lacks a wide range of diverse and culturally inspired jewelry and fashion options, making it challenging for consumers with unique tastes to find suitable products."
  },
  {
    title: "Lack of access to culturally inspired fashion:",
    desc: "The existing fashion industry does not cater adequately to the demands of the large immigrant population leaving them unsatisfied and uninspired."
  },
  {
    title: "Stereotyping and misrepresentation:",
    desc: "Mainstream fashion brands attempting to produce such clothing without a deep understanding of the cultural significance, can lead to stereotyping or appropriation."
  }
]

export const SolutionToServices = [
  {
    title: "Unique and Urban Designs:",
    desc: "A wide range of culturally inspired apparel and jewelry designs, incorporating cultural elements to appeal to a diverse customer base."
  },
  {
    title: "Establishing Reliable Suppliers:",
    desc: "We will establish partnerships with trusted suppliers in Africa to ensure the sourcing of authentic African fabrics and customs, enabling consistent product availability."
  },
  {
    title: "Streamlined Supply Chain:",
    desc: "Teetoobeez will implement an efficient supply chain management system, focusing on inventory management, production optimization, and strategic partnerships with logistics providers to ensure fast and reliable delivery. Please elaborate this and add some more points."
  },
  {
    title: "Customization and Personalization:",
    desc: "We will offer customization and personalization options for their jewelry, allowing customers to create unique pieces that reflect their individual style and preferences. This can enhance customer satisfaction and differentiate the brand from competitors."
  },
  {
    title: "Ethical Sourcing and Sustainability:",
    desc: "We prioritize ethical sourcing practices, such as using conflict-free gemstones and environmentally friendly materials. Communicating the brand's commitment to sustainability and ethical values can resonate with conscious consumers and attract a loyal customer base."
  },
  {
    title: "Bridging Traditional and Contemporary:",
    desc: " Teetoobeez excels at blending traditional aesthetics with contemporary design elements. This USP appeals to customers seeking fashionable accessories that pay homage to their cultural roots while embracing modern trends. Teetoobeez offers a harmonious fusion of the past and present in its product range."
  }
]
