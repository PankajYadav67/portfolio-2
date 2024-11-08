export function calculateReadingTime(mdxContent: any) {
  // Define the average reading speed (words per minute)
  const wordsPerMinute = 200

  // Strip MDX/HTML tags and count the words
  const text = mdxContent.replace(/<\/?[^>]+(>|$)/g, '')
  const wordCount = text.split(/\s+/).filter((word: any) => word.length > 0).length

  // Calculate reading time
  const readingTime = Math.ceil(wordCount / wordsPerMinute)

  return readingTime
}


export function plural(count: number, singular: string, plural: string = `${singular}s`): string {
  return count === 1 ? singular : plural
}

