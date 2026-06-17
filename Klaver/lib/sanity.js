import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Zolang er nog geen eigen Sanity-project gekoppeld is (zie SETUP.md),
// blijft de client leeg en valt de site terug op de voorbeeldcontent.
export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: false,
    })
  : null

const builder = client ? imageUrlBuilder(client) : null

// Helper om Sanity-afbeeldingen om te zetten naar een bruikbare URL
export function urlFor(source) {
  return builder.image(source)
}

// Haalt de algemene restaurantgegevens op (naam, foto's, openingstijden, etc.)
export async function getRestaurantData() {
  if (!client) return null
  return client.fetch(`*[_type == "restaurant"][0]`)
}

// Haalt alle menu-items op, gesorteerd per categorie en volgorde
export async function getMenuItems() {
  if (!client) return []
  return client.fetch(`*[_type == "menuItem"] | order(volgorde asc)`)
}
