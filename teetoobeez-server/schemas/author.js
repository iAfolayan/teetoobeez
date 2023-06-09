export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    }
  ]
}