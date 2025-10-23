import { useTranslation } from 'react-i18next'
import { GlobeIcon } from '@radix-ui/react-icons'
import { cn } from '../lib/utils'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'he' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "fixed top-4 z-50",
        i18n.language === 'he' ? 'left-4' : 'right-4',
        "flex items-center gap-2 px-4 py-2",
        "bg-white dark:bg-slate-800 rounded-lg shadow-lg",
        "border border-slate-200 dark:border-slate-700",
        "hover:bg-slate-50 dark:hover:bg-slate-700",
        "transition-colors duration-200",
        "text-slate-700 dark:text-slate-200 font-medium"
      )}
      aria-label="Toggle language"
    >
      <GlobeIcon className="w-5 h-5" />
      <span>{i18n.language === 'en' ? 'עברית' : 'English'}</span>
    </button>
  )
}
