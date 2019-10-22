export default {
  object: 'bookmark',
  version: '1.0.0.',
  inputs: [
    'url',
    'category',
    'tags',
  ],
  fields: [
    {
      object: 'field',
      type: 'string',
      name: 'url',
      label: 'URL',
      placeholder: 'https://...',
    },
    {
      object: 'field',
      type: 'string',
      name: 'category',
      label: 'Category',
      placeholder: 'ethereum',
    },
    {
      object: 'field',
      type: 'string',
      name: 'tags',
      label: 'Tags',
      placeholder: 'security, identity',
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