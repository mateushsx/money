import { colors } from './colors';

export const categories: Record<Category, CategoryType> = {
  income: {
    icon: 'work',
    background: colors.categoryIncome,
    name: 'income',
    displayName: 'Renda',
  },
  food: {
    icon: 'fastfood',
    background: colors.categoryFood,
    name: 'food',
    displayName: 'Alimentação',
  },
  house: {
    icon: 'home',
    background: colors.categoryHouse,
    name: 'house',
    displayName: 'Casa',
  },
  education: {
    icon: 'book',
    background: colors.categoryEducation,
    name: 'education',
    displayName: 'Educação',
  },
  travel: {
    icon: 'airplanemode-active',
    background: colors.categoryTravel,
    name: 'travel',
    displayName: 'Viagens',
  },
};

export type Category = 'income' | 'food' | 'house' | 'education' | 'travel';

export type CategoryType = {
  icon: CategoryIcon;
  background: string;
  name: Category;
  displayName: string;
};

export type CategoryIcon =
  | 'work'
  | 'fastfood'
  | 'home'
  | 'book'
  | 'airplanemode-active';
