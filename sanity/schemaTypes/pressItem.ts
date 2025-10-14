import { type SchemaTypeDefinition } from 'sanity'

export const pressItemSchema: SchemaTypeDefinition = {
  name: 'pressItem',
  title: 'Press Item',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'press-releases',
          'media-coverage',
          'awards',
          'company-news',
          'industry-news',
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          'Press Release',
          'Article',
          'Award',
          'Interview',
          'Recognition',
          'News',
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'source',
      title: 'Source',
      type: 'string',
      description: 'Publication or organization name',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'url',
      title: 'External URL',
      type: 'url',
      description: 'Link to the original article or press release',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Mark as featured to display prominently',
      initialValue: false,
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      type: 'type',
      source: 'source',
      media: 'featuredImage',
    },
    prepare(selection: any) {
      const { title, category, type, source, media } = selection;
      return {
        title,
        subtitle: `${type} - ${source} (${category})`,
        media,
      };
    },
  },
}; 