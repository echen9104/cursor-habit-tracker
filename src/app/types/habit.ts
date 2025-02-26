export type DateRangeOption = '1M' | '3M' | '6M' | '12M' | 'custom';

export interface Habit {
  _id?: string;
  name: string;
  createdAt: Date;
  isActive: boolean;
}

export interface DailyProgress {
  _id?: string;
  date: Date;
  habits: {
    habitId: string;
    completed: boolean;
  }[];
} 