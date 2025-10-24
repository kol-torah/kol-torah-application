import type { ComponentType } from 'react'

export interface ContentModule {
  default: ComponentType
  metadata?: {
    title?: string
    description?: string
    [key: string]: unknown
  }
}

export async function loadContent(lang: 'en' | 'he', contentPath: string): Promise<ContentModule> {
  try {
    const content = await import(`../content/${contentPath}/${lang}.mdx`)
    return content
  } catch (error) {
    console.error(`Failed to load content: ${contentPath}/${lang}.mdx`, error)
    throw error
  }
}
