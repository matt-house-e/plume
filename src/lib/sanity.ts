import { createClient } from '@sanity/client'

export const client = createClient({
  // TODO: Replace with actual Sanity project ID
  projectId: 'placeholder',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})
