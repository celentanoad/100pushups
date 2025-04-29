import { Button } from "@mui/material";

export const DaySelector = ({ week, day, setDay, isDayCompleted }) => (
  <div>
    {['day1', 'day2', 'day3'].map((dayName) => (
      <Button
        key={dayName}
        color={isDayCompleted(week, dayName) ? 'success' : day === dayName ? 'secondary' : 'primary'}
        onClick={() => setDay(dayName)}
      >
        {dayName.replace('day', 'Day ')}
      </Button>
    ))}
  </div>
);