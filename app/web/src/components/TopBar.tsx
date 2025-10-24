import { useTranslation } from 'react-i18next'
import { GlobeIcon } from '@radix-ui/react-icons'
import { cn } from '../lib/utils'

export function TopBar() {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'he' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo and Name */}
        <div className="flex items-center gap-3">
          <img 
            src="/kol-torah-rabbi-logo.svg" 
            alt="Kol Torah Logo" 
            className="w-10 h-10"
          />
          <span className="text-xl font-bold text-slate-900 dark:text-white">
            {t('welcome.title')}
          </span>
        </div>

        {/* Language Switcher */}
        <button
          onClick={toggleLanguage}
          className={cn(
            "flex items-center gap-2 px-4 py-2",
            "bg-slate-100 dark:bg-slate-800 rounded-lg",
            "border border-slate-200 dark:border-slate-700",
            "hover:bg-slate-200 dark:hover:bg-slate-700",
            "transition-colors duration-200",
            "text-slate-700 dark:text-slate-200 font-medium"
          )}
          aria-label="Toggle language"
        >
          <GlobeIcon className="w-5 h-5" />
          <span className="text-sm">
            {i18n.language === 'en' ? 'עברית' : 'English'}
          </span>
        </button>
      </div>
    </header>
  )
}
