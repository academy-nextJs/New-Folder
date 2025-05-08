import 'i18next';

declare module 'i18next' {
  interface i18n {
    dir(): 'rtl' | 'ltr';
  }
} 