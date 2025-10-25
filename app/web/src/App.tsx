import { useTranslation } from 'react-i18next'
import { Layout } from './components/Layout'
import { Suspense, lazy, useMemo, useEffect, useState } from 'react'
import { MDXContent } from './components/MDXContent'
import { config } from './config'

function App() {
  const { t, i18n } = useTranslation()
  const [backendMessage, setBackendMessage] = useState<string>('Loading...')

  // Dynamically import the correct MDX file based on language
  const HomeContent = useMemo(() => {
    return lazy(() => import(`./content/home/${i18n.language}.mdx`))
  }, [i18n.language])

  // Test backend connection
  useEffect(() => {
    fetch(`${config.apiUrl}/hello`)
      .then(res => res.json())
      .then(data => setBackendMessage(data.message))
      .catch(() => setBackendMessage('Error'))
  }, [])

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 p-4 bg-slate-100 rounded-lg border border-slate-200">
            <p className="text-sm text-slate-600">
              <strong>Backend Test:</strong> {backendMessage}
            </p>
          </div>

          <Suspense fallback={
            <div className="text-center py-8 text-slate-500">
              Loading content...
            </div>
          }>
            <MDXContent Content={HomeContent} />
          </Suspense>

          <div className="flex justify-center gap-4 pt-12">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
              {t('welcome.getStarted')}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
