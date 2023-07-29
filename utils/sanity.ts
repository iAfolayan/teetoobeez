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


export const urlFor = (source: any) => imageUrlBuilder(client).image(source)

export const getPostById = async ({id}: Props): Promise<Product | null> => {
  const query = `*[ _type == "product" && _id == "${id}" ]{
    _id, name, category-> {title}, price, image, rating
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

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const productsResult = `*[_type == "product"] | order(_createdAt desc) { _id, name, image, description, price, rating, category->{title}, author->{name}}`
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
