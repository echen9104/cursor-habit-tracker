'use client'

import { useState, useEffect } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, subMonths } from 'date-fns';
import type { Habit, DailyProgress, DateRangeOption } from '../types/habit';

interface HabitCalendarProps {
  habits: Habit[];
  progress: DailyProgress[];
}

export default function HabitCalendar({ habits, progress }: HabitCalendarProps) {
  const [dateRange, setDateRange] = useState<DateRangeOption>('1M');
  const [startDate, setStartDate] = useState(startOfMonth(subMonths(new Date(), 1)));
  const [endDate, setEndDate] = useState(endOfMonth(new Date()));

  useEffect(() => {
    switch (dateRange) {
      case '1M':
        setStartDate(startOfMonth(subMonths(new Date(), 1)));
        break;
      case '3M':
        setStartDate(startOfMonth(subMonths(new Date(), 3)));
        break;
      case '6M':
        setStartDate(startOfMonth(subMonths(new Date(), 6)));
        break;
      case '12M':
        setStartDate(startOfMonth(subMonths(new Date(), 12)));
        break;
    }
  }, [dateRange]);

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  return (
    <div className="p-4">
      <div className="mb-4">
        <select
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value as DateRangeOption)}
          className="border rounded p-2"
        >
          <option value="1M">Last Month</option>
          <option value="3M">Last 3 Months</option>
          <option value="6M">Last 6 Months</option>
          <option value="12M">Last Year</option>
          <option value="custom">Custom Range</option>
        </select>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center font-bold p-2">
            {day}
          </div>
        ))}
        {days.map((day) => (
          <div
            key={day.toISOString()}
            className="border rounded p-2 min-h-[80px] relative"
          >
            <div className="text-sm">{format(day, 'd')}</div>
            <div className="text-xs mt-1">
              {/* Add progress display here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 