"use client"

import { AddHabitForm } from "./AddHabitForm"
import { HabitCard } from "./HabitCard"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function HabitsSection({ habits }: { habits: any[] }) {
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Habit Tracker</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add New Habit</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create a New Habit</DialogTitle>
            </DialogHeader>
            <AddHabitForm
              onSubmit={(values) => {
                console.log(values)
              }}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {habits.map((habit, index) => (
          <HabitCard
            key={index}
            habit={habit}
            onComplete={() => {
              console.log(`Completed ${habit.name}`)
            }}
          />
        ))}
      </div>
    </>
  )
} 