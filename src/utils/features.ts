import type { TFunction } from 'src/i18n/types';

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

/**
 * Obtiene la lista de features con sus traducciones
 * @param t - Función de traducción
 * @returns Lista de features traducidas
 */
export function getFeatures(t: TFunction): Feature[] {
  return [
    {
      icon: 'kanban',
      title: t('features.title'),
      description: t('features.description'),
    },
    {
      icon: 'analytics',
      title: t('features.title2'),
      description: t('features.description2'),
    },
    {
      icon: 'collaboration',
      title: t('features.title3'),
      description: t('features.description3'),
    },
    {
      icon: 'timetracking',
      title: t('features.title4'),
      description: t('features.description4'),
    },
  ];
}
