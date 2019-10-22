export const createReference = (data, reference) => ({
  object: 'reference',
  reference: reference,
  version: '1.0.0.',
  data: data
})

export const createBookmark = (props, values) => ({ 
  object: 'bookmark',
  version: '1.0.0.',
  data: {
    url: values.url,
    category: values.category,
    tags: values.tags,
  }
})

export const createBookmarkPost = (props, values) => ({ 
  threadName: props.threadName,
  post: {
    object: 'bookmark',
    version: '1.0.0.',
    data: {
      url: values.url,
      category: values.category,
      tags: values.tags,
    }
  }
})

