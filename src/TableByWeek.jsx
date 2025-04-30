import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { weeks } from './reps';
import { useEffect, useState } from "react";
import { DaySelector } from "./components/DaySelector";

export default function TableByWeek({ week }) {
  const [day, setDay] = useState('day1');
  const [countdown, setCountdown] = useState(null);
  const [currentSet, setCurrentSet] = useState(0);
  const dataByWeek = weeks[week];
  const sets = Object.keys(dataByWeek[day].level1).filter(key => key !== "name");
  const [completedDays, setCompletedDays] = useState(() => JSON.parse(localStorage.getItem('completed')) || []);

  const isDayCompleted = (week, day) => {
    return completedDays.some((item) => item.week === week && item.day === day);
  };

  const startTimer = (restTime) => {
    setCountdown(restTime);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setCurrentSet(currentSet + 1);
          return null;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
  }, [currentSet]);

  const isLastWeekAndDayCompleted = (week, day) => {
    if (week === 'week1' && day === 'day1') return true;
    const lastCompleted = completedDays[completedDays.length - 1];
    if (lastCompleted) {
      const lastWeek = lastCompleted.week;
      const lastDay = lastCompleted.day;
      if (lastWeek === week && lastDay === `day${parseInt(day.slice(-1)) - 1}`) return true;
      if (lastWeek === `week${parseInt(week.slice(-1)) - 1}` && lastDay === 'day3') return true;
    }
    return false;
  }

  const updateCompletedDays = (week, day) => {
    const lastCompleted = JSON.parse(localStorage.getItem('completed')) || [];
    const newCompleted = {
      week: week,
      day: day,
      date: new Date().toLocaleDateString(),
    };
    const updatedCompleted = [...lastCompleted, newCompleted];
    localStorage.setItem('completed', JSON.stringify(updatedCompleted));
    setCompletedDays(updatedCompleted);
  };
  
  const handleComplete = () => {
    updateCompletedDays(week, day);
    setCurrentSet(null);
  };

  const resetWeek = () => {
    const remainingCompleted = completedDays.filter((item) => item.week !== week);
    if (confirm(`Are you sure you want to reset all progress for ${week}? (Action cannot be undone)`)) {
      localStorage.setItem('completed', JSON.stringify(remainingCompleted));
      setCompletedDays(remainingCompleted);
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginTop: '1rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={resetWeek}
        >
          Reset Week
        </Button>
      </Box>
      <DaySelector week={week} day={day} setDay={setDay} isDayCompleted={isDayCompleted} />
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Pushups</TableCell>
              <TableCell align="right">{dataByWeek[day].level1.name}</TableCell>
              <TableCell align="right">{dataByWeek[day].level2.name}</TableCell>
              <TableCell align="right">{dataByWeek[day].level3.name}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sets.map((set, idx) => (
              <TableRow
                key={set}
                hover={false}
                sx={(theme) => ({
                  backgroundColor: currentSet === idx ? theme.palette.primary.highlight : 'inherit',
                  border: currentSet === idx ? `3px solid ${theme.palette.primary.main}` : 'none',
                })}
              >
                <TableCell component="th" scope="row">
                  {`Set ${idx + 1}`}
                </TableCell>
                <TableCell align="right">{dataByWeek[day].level1[set]}</TableCell>
                <TableCell align="right">{dataByWeek[day].level2[set]}</TableCell>
                <TableCell align="right">{dataByWeek[day].level3[set]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
        <Typography color="primary">
          Rest time: { countdown !== null ? countdown : dataByWeek[day].rest} seconds
        </Typography>
        {isDayCompleted(week, day) ? 
          <Typography color="success">Day completed!</Typography> : 
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <Button variant="contained" color="secondary" onClick={() => startTimer(dataByWeek[day].rest)} disabled={countdown !== null}>
              {countdown ? 'Resting... ' : 'Start Rest'}
            </Button>
            <Button variant="contained" color="success" onClick={() => handleComplete()} disabled={!isLastWeekAndDayCompleted(week, day)}>
              Complete Day
            </Button>
          </div>
        }
      </div>
    </Box>
  );
}