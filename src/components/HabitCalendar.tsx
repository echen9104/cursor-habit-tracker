"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { 
  format, 
  eachDayOfInterval, 
  startOfMonth, 
  endOfMonth, 
  addMonths,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  subMonths,
  isAfter,
  min 
} from "date-fns"
import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type DateRange = '1M' | '3M' | '6M' | '12M' | 'custom'

interface HabitCalendarProps {
  habits: Array<{
    _id: string
    name: string
    createdAt: Date
    isActive: boolean
  }>
  progress: any[]
}

export default function HabitCalendar({ habits, progress }: HabitCalendarProps) {
  const [currentDate] = useState(new Date())
  const [range, setRange] = useState<DateRange>('3M')
  const [customStartDate, setCustomStartDate] = useState('')
  const [customEndDate, setCustomEndDate] = useState('')

  const getMonthsForRange = (range: DateRange): Date[] => {
    let startDate: Date
    let finalEndDate = currentDate

    switch (range) {
      case '1M':
        startDate = subMonths(currentDate, 1)
        break
      case '3M':
        startDate = subMonths(currentDate, 3)
        break
      case '6M':
        startDate = subMonths(currentDate, 6)
        break
      case '12M':
        startDate = subMonths(currentDate, 12)
        break
      case 'custom':
        if (!customStartDate || !customEndDate) return []
        startDate = new Date(customStartDate)
        const requestedEndDate = new Date(customEndDate)
        const maxEndDate = addMonths(startDate, 12)
        finalEndDate = isAfter(requestedEndDate, maxEndDate) ? maxEndDate : requestedEndDate
        break
      default:
        startDate = subMonths(currentDate, 3)
    }

    const monthDiff = Math.abs(finalEndDate.getMonth() - startDate.getMonth() + 
      (12 * (finalEndDate.getFullYear() - startDate.getFullYear()))) + 1

    return Array.from({ length: monthDiff }, (_, i) => {
      return addMonths(startDate, i)
    })
  }

  const getDaysInMonth = (date: Date) => {
    const start = startOfWeek(startOfMonth(date))
    const end = endOfWeek(endOfMonth(date))
    return eachDayOfInterval({ start, end })
  }

  const months = getMonthsForRange(range)

  return (
    <div className="space-y-4">
      <div className="flex gap-4 items-end">
        <div className="space-y-2">
          <Label>Date Range</Label>
          <Select
            value={range}
            onValueChange={(value: DateRange) => setRange(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1M">Last Month</SelectItem>
              <SelectItem value="3M">Last 3 Months</SelectItem>
              <SelectItem value="6M">Last 6 Months</SelectItem>
              <SelectItem value="12M">Last Year</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {range === 'custom' && (
          <div className="flex gap-2">
            <div className="space-y-2">
              <Label>Start Date</Label>
              <Input
                type="date"
                value={customStartDate}
                onChange={(e) => setCustomStartDate(e.target.value)}
                max={customEndDate || undefined}
              />
            </div>
            <div className="space-y-2">
              <Label>End Date</Label>
              <Input
                type="date"
                value={customEndDate}
                onChange={(e) => setCustomEndDate(e.target.value)}
                min={customStartDate || undefined}
                max={customStartDate ? format(addMonths(new Date(customStartDate), 12), 'yyyy-MM-dd') : undefined}
              />
            </div>
          </div>
        )}
      </div>

      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {months.map((month) => (
            <CarouselItem key={month.toISOString()}>
              <Card>
                <CardContent className="p-4">
                  <div className="text-center mb-4 font-bold">
                    {format(month, 'MMMM yyyy')}
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-sm">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                      <div key={day} className="font-medium">
                        {day}
                      </div>
                    ))}
                    {getDaysInMonth(month).map((date) => (
                      <div
                        key={date.toISOString()}
                        className={`aspect-square flex items-center justify-center rounded-full
                          ${isSameMonth(date, month) 
                            ? 'hover:bg-accent cursor-pointer' 
                            : 'text-muted-foreground'
                          }`}
                      >
                        {format(date, 'd')}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
} 