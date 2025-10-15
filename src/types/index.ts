export interface Transaction {
  id: string;
  name: string;
  category: string;
  amount: string;
  date: string;
  time: string;
  type: 'income' | 'expense';
  avatar?: string;
  icon?: string;
}

export interface Card {
  id: string;
  type: 'debit' | 'virtual';
  balance: string;
  lastFourDigits: string;
  gradient: string[];
}

export interface Notification {
  id: string;
  title: string;
  description?: string;
  amount?: string;
  date: string;
  time: string;
  category: 'payments' | 'system' | 'delivery' | 'travel' | 'security';
  isUnread: boolean;
  avatar?: string;
  icon?: string;
  cardInfo?: string;
  balance?: string;
}

export interface QuickAccess {
  id: string;
  title: string;
  icon: string;
}

