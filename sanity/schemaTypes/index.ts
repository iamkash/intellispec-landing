import { type SchemaTypeDefinition } from 'sanity'
import { caseStudySchema } from './caseStudy'
import { whitePaperSchema } from './whitePaper'
import { blogPostSchema } from './blogPost'
import { pressItemSchema } from './pressItem'
import { authorSchema } from './author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    caseStudySchema,
    whitePaperSchema,
    blogPostSchema,
    pressItemSchema,
    authorSchema,
  ],
}
