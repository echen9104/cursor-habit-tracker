import Image from "next/image";
import HabitCalendar from '../components/HabitCalendar';
import { AddHabitForm } from "@/components/AddHabitForm"
import { HabitCard } from "@/components/HabitCard"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { HabitsSection } from "@/components/HabitsSection"

export default function Home() {
  // For now, we'll use dummy data. Later we'll fetch from MongoDB
  const dummyHabits = [
    { _id: '1', name: 'Make bed', createdAt: new Date(), isActive: true, progress: 60, streak: 3 },
    { _id: '2', name: 'Cold shower', createdAt: new Date(), isActive: true, progress: 80, streak: 5 },
    { _id: '3', name: 'Gym', createdAt: new Date(), isActive: true, progress: 40, streak: 2 },
  ];

  const dummyProgress: any[] = []; // We'll implement this later

  return (
    <div className="flex justify-center items-center md:px-32 px-12 py-12">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">        
        <HabitsSection habits={dummyHabits} />
        <HabitCalendar habits={dummyHabits} progress={dummyProgress} />
      </main>
    </div>
  );
}
