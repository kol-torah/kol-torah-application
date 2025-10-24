import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx({ 
      remarkPlugins: [remarkGfm, remarkFrontmatter],
      providerImportSource: '@mdx-js/react'
    }) },
    react()
  ],
})
