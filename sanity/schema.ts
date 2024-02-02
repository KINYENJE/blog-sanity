import { type SchemaTypeDefinition } from 'sanity'
import { post } from './schemas/posts'
import { tag } from './schemas/tag'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tag],
}
