import { Rule } from 'sanity'

export const post = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule : Rule) => Rule.required().error('A title is required')
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      },
      validation: (Rule : Rule) => Rule.required().error('A slug is required')
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString() 
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: (Rule : Rule) => Rule.max(20).error("This is too short")
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image',
        fields: [ {type:  'text', title: 'ALT', name: 'alt'} ]
        } // to handle images in the body
      ]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }]
        }
      ]
    }
  ],

}