export default {
  name: 'article',
  title: 'Article',
  type: 'document',

  fields: [
    // 🔹 BASIC
    {
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },

    {
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required(),
    },

    // 🔹 URL DRIVER
    {
      name: 'contentType',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          { title: 'Case Study', value: 'case-study' },
          { title: 'Whitepaper', value: 'whitepaper' },
          { title: 'Blog', value: 'blog' },
          { title: 'Report', value: 'report' },
        ],
      },
      validation: Rule => Rule.required(),
    },

    // 🔹 RELATIONS
    {
      name: 'category',
      type: 'reference',
      to: [{ type: 'category' }],
    },

    {
      name: 'industry',
      type: 'reference',
      to: [{ type: 'industry' }],
    },

    {
      name: 'tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
    },

    {
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }],
    },

    // 🔹 MEDIA
    {
      name: 'featuredImage',
      type: 'image',
    },

    // 🔹 CONTENT
    {
      name: 'excerpt',
      type: 'text',
    },

    {
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
    },

    // 🔹 FILE (IMPORTANT FOR WHITEPAPERS)
    {
      name: 'file',
      title: 'Attachment (PDF)',
      type: 'file',
    },

    // 🔹 SEO
    {
      name: 'seoTitle',
      type: 'string',
    },
    {
      name: 'seoDescription',
      type: 'text',
    },

    // 🔹 META
    {
      name: 'publishedAt',
      type: 'datetime',
    },
  ],
}
