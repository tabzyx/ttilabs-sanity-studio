export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        isUnique: (slug, context) =>
          context.defaultIsUnique(slug, context),
      },
      validation: Rule => Rule.required(),
    },
  ],
}
