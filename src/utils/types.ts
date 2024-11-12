import { ReactNode } from 'react';

export type subCategory = {
  name: string;
  id: number;
  icon: ReactNode;
  category: string;
};
export type Category = {
  name: string;
  id: number;
  icon: ReactNode;
  subCategories: subCategory[];
};
