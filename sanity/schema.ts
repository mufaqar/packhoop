import { type SchemaTypeDefinition } from 'sanity'
import { testimonial } from './schema/testimonial'
import { categories } from './schema/categories'
import { faqs } from './schema/faqs'
import { products } from './schema/products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categories, products, testimonial, faqs],
}
