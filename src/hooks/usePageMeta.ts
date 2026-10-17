import { useEffect } from 'react';
import { useI18n } from '../i18n/LanguageProvider';

interface PageMetaProps {
  title: string;
  description: string;
}

export function usePageMeta({ title, description }: PageMetaProps) {
  const { lang } = useI18n();

  useEffect(() => {
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
  }, [title, description, lang]);
}
