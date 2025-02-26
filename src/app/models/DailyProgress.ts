import mongoose from 'mongoose';

const dailyProgressSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  habits: [{
    habitId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Habit',
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  }],
});

export const DailyProgress = mongoose.models.DailyProgress || mongoose.model('DailyProgress', dailyProgressSchema); 