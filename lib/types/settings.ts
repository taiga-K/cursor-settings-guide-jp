export interface SettingItem {
  id: string;
  nameJa: string;
  nameEn: string;
  category?: string;
  description: string[];
  isPro?: boolean;
}

export interface Category {
  id: string;
  name: string;
}

