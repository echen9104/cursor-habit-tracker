"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface HabitCardProps {
  habit: {
    name: string
    description?: string
    progress: number
    streak: number
  }
  onComplete: () => void
}

export function HabitCard({ habit, onComplete }: HabitCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{habit.name}</CardTitle>
        {habit.description && (
          <CardDescription>{habit.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm">Progress</span>
              <span className="text-sm">{habit.progress}%</span>
            </div>
            <Progress value={habit.progress} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Current streak:</span>
            <span className="font-bold">{habit.streak} days</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onComplete} className="w-full">
          Complete Today
        </Button>
      </CardFooter>
    </Card>
  )
} 