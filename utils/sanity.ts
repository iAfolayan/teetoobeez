import imageUrlBuilder from '@sanity/image-url'
import {SanityDocument, createClient} from '@sanity/client'

type Product = {
  _id: string
  name: string
  description: string
  price: number
  category: {title: string}
  image: any
  rating: number
}

interface Props {
  id: string
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