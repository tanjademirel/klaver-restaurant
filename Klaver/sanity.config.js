import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Klaver — Restaurant Beheer',

  // Vul hier je eigen project ID in (krijg je van sanity.io na het aanmaken van een gratis account)
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'JOUW_PROJECT_ID',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
