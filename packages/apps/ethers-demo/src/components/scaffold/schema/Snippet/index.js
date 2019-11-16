export default {
  object: 'snippet',
  version: '0.0.1',
  inputs: [
    'name',
    'summary',
    'content',
    'language',
    'references',
    'category',
    'tags',
  ],
  fields: [
    {
      object: 'field',
      type: 'text',
      name: 'name',
      label: 'Name',
      placeholder: 'Name',
    },
    {
      object: 'field',
      type: 'textarea',
      name: 'summary',
      label: 'Summary',
      placeholder: 'Summary',
    },
    {
      object: 'field',
      type: 'textarea',
      name: 'content',
      label: 'Description',
      placeholder: 'Body',
    },
    {
      object: 'field',
      type: 'text',
      name: 'language',
      label: 'Language',
      placeholder: 'js',
    },
    {
      object: 'field_array',
      type: 'group',
      name: 'references',
      label: 'References',
      placeholder: 'Important Documents',
    },
    {
      object: 'field',
      type: 'text',
      name: 'category',
      label: 'Category',
      placeholder: 'ethereum',
    },
    {
      object: 'field',
      type: 'string',
      name: 'tags',
      label: 'Tags',
      placeholder: 'recursive',
    },
  ],
  styled: {
     /**
     * Horizontal
     * 1 Row
     * Row: url, category, tags
     */
    horizontal: [
      {
        flex: 5
      },
      {
        flex: 2,
        mx: 2
      },
      {
        flex: 2,
        mx: 2
      },
    ],
    /**
     * Stacked
     * 1 Column
     * Column: url, category, tags
     */
    vertical: [
      {
        flex: 1,
        width: 1,
      },
      {
        flex: 1,
        my: 2,
        width: 1,
      },
      {
        flex: 1,
        width: 1
      },
    ],

    /**
     * Stacked
     * 1 Column and 2 Rows
     * Row: url
     * Row: category, tags
     */
    stacked: [
      {
        width: 1,
      },
      {
        pr: 1,
        width: .5,
      },
      {
        pl: 1,
        width: .5
      },
    ]
  }
}