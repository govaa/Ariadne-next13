import 'server-only';

type Dictionary = {
    [key: string]: any; // You can replace 'any' with a more specific type if you know the structure of the dictionary
  };
  
  const dictionaries: { [locale: string]: () => Promise<Dictionary> } = {
    en: () => import('dictionaries/en.json').then((module) => module.default),
    de: () => import('dictionaries/de.json').then((module) => module.default),
  };
  
  export const getDictionary = async (locale: string): Promise<Dictionary> => dictionaries[locale]();
  