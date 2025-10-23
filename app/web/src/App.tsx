import { useTranslation } from 'react-i18next'
import { Layout } from './components/Layout'

function App() {
  const { t } = useTranslation()

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white">
            {t('welcome.title')}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            {t('welcome.subtitle')}
          </p>
          <div className="flex justify-center gap-4 pt-8">
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
