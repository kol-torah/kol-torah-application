import type { ComponentType, ReactNode } from 'react'

interface MDXWrapperProps {
  children: ReactNode
}

export function MDXWrapper({ children }: MDXWrapperProps) {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none
      prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white
      prose-h1:text-4xl prose-h1:mb-6
      prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4
      prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
      prose-p:text-lg prose-p:leading-relaxed prose-p:mb-4
      prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
      prose-strong:text-slate-900 dark:prose-strong:text-white
      prose-ul:my-6 prose-ol:my-6
      prose-li:my-2
      prose-img:rounded-lg prose-img:shadow-lg
    ">
      {children}
    </div>
  )
}

interface MDXContentProps {
  Content: ComponentType
}

export function MDXContent({ Content }: MDXContentProps) {
  return (
    <MDXWrapper>
      <Content />
    </MDXWrapper>
  )
}
