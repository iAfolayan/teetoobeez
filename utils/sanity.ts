import imageUrlBuilder from '@sanity/image-url'
import {SanityDocument, createClient} from '@sanity/client'

interface Product {
  _id: string
  name: string
  image: string
  description: string
  price: number
  rating: number
  category: Category
  author: {
    name: string
  }
}

interface Props {
  id: string
}

interface Category {
  _id: string
  title: string
}

export const client = createClient({
  projectId: 'vuo1w4il',
  dataset: 'production',
  apiVersion: '2023-04-04',
  useCdn: true, // Set this to `true` for production
})

export const urlFor = (source: any) => {
  try{
    const htmlFor = imageUrlBuilder(client).image(source).url()
    return htmlFor
  } catch (err) {
    console.log(err)
  }
}

export const getPostById = async ({id}: Props): Promise<Product | null> => {
  const query = `*[ _type == "product" && _id == "${id}" ]{
  _id,
  name,
  category[]-> {
    title
  },
  price,
  image,
  rating,
  isLatest
}`

  try {
    const results: SanityDocument<Product>[] = await client.fetch(query)

    if (results.length === 0) {
      return null
    }

    // `results[0]` is the single post object
    return results[0]
  } catch (error) {
    console.error(error)
    return null
  }
}

export const getProductsByCategory = async (categoryTitle: string | string[]): Promise<Product[]> => {
  let categoryFilter

  if (Array.isArray(categoryTitle)) {
    // If categoryTitle is an array, create a filter for multiple categories
    categoryFilter = `category->title in [${categoryTitle.map((title: any) => `"${title.title}"`).join(" || ")}]`
  } else {
    // If categoryTitle is a string, create a filter for a single category
    categoryFilter = `category[]->title match "${categoryTitle}"`
  }
  
  const query = `*[_type == "product" && ${categoryFilter} && !(_id in path("drafts.**"))] | order(_createdAt desc) {
    _id,
    name,
    image,
    description,
    price,
    rating,
    isLatest,
    'category': category[]->title,
    author->{
      name
    }
  }`

  try {
    const products: Product[] = await client.fetch(query)
    return products
  } catch (error) {
    console.error(error)
    return []
  }
}

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const productsResult = `*[_type == "product"] | order(_createdAt desc) {
  _id,
  name,
  image,
  description,
  price,
  rating,
  isLatest,
  'category': category[]->title,
  author->{
    name
  }
}
`
    const results: SanityDocument<Product>[] = await client.fetch(productsResult)
    return results
  } catch (error) {
    console.error(error)
    return []
  }
}

export const getAllCategories = async (): Promise<Category[]> => {
  const query = `*[_type == "category"]{_id, title }`
  try {
    const results: SanityDocument<Category>[] = await client.fetch(query)
    return results
  } catch (error) {
    console.error(error)
    return []
  }
}

export const getFeaturedProduct = async (): Promise<Product | null> => {
  const query = `*[_type == "product" && isFeatured == true] {
  _id,
  name,
  image,
  description,
  category[]->{
    _id
  }
}`;
    try {
    const results: SanityDocument<Product>[] = await client.fetch(query)

    if (results.length === 0) {
      return null
    }

    // `results[0]` is the single post object
    return results[0]
  } catch (error) {
    console.error(error)
    return null
  }
}
