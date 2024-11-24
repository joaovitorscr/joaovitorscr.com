'use client'

import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { GlobeIcon } from 'lucide-react'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

export function LocaleSwitch() {
  const {
    i18n: { language, changeLanguage },
  } = useTranslation()

  function handleLanguageSwitch(lang: string) {
    const newLanguage = lang === 'en' ? 'pt' : 'en'

    changeLanguage(newLanguage)
    localStorage.setItem('preferred-locale', newLanguage)
  }

  return (
    <div className="container flex justify-end fixed end-5 top-3 z-10">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <GlobeIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-card border w-32">
          <DropdownMenuItem asChild>
            <Button
              disabled={language === 'en'}
              className="w-full flex justify-start cursor-pointer"
              onClick={() => handleLanguageSwitch('pt')}
              variant="ghost"
            >
              <img
                className="size-4"
                src="/assets/img/flags/us.svg"
                alt={language}
              />
              <span>English</span>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Button
              disabled={language === 'pt'}
              className="w-full flex justify-start cursor-pointer"
              onClick={() => handleLanguageSwitch('en')}
              variant="ghost"
            >
              <img
                className="size-4"
                src="/assets/img/flags/br.svg"
                alt={language}
              />
              <span>Português</span>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
