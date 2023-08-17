"use client"
import * as React from "react";
import { usePathname } from 'next/navigation';
import { i18n } from '../../../i18n-config';

export default function CurrentLocale() {
  const pathName = usePathname();

  const localeValue = () => {
    const locale = i18n.locales.find((l) => l === pathName.split('/')[1]);
    if (!locale) return i18n.defaultLocale;
    return locale;
  };

  return localeValue();
}
