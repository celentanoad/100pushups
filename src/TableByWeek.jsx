import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { weeks } from './reps';
import { useEffect, useState } from "react";

export default function TableByWeek({ week }) {
  const [day, setDay] = useState('day1');
  const [countdown, setCountdown] = useState(null);
  const [currentSet, setCurrentSet] = useState(0);
  const dataByWeek = weeks[week];
  const sets = Object.keys(dataByWeek[day].level1).filter(key => key !== "name");

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

  const handleComplete = () => {
    const lastCompleted = JSON.parse(localStorage.getItem('completed')) || [];
    const newCompleted = {
      week: week,
      day: day,
      date: new Date().toLocaleDateString()
    };
    const updatedCompleted = [...lastCompleted, newCompleted];
    localStorage.setItem('completed', JSON.stringify(updatedCompleted));
    setCurrentSet(null);
  }

  const isDayCompleted = (week, day) => {
    const completed = JSON.parse(localStorage.getItem('completed')) || [];
    return completed.some(item => item.week === week && item.day === day);
  }

  return (
    <>
      <div>
        <Button color={isDayCompleted(week, day) ? 'success' : day === 'day1' ? 'secondary' : 'primary'} onClick={() => setDay('day1')}> Day 1 </Button>
        <Button color={isDayCompleted(week, day) ? 'success' : day === 'day2' ? 'secondary' : 'primary'} onClick={() => setDay('day2')}> Day 2 </Button>
        <Button color={isDayCompleted(week, day) ? 'success' : day === 'day3' ? 'secondary' : 'primary'} onClick={() => setDay('day3')}> Day 3 </Button>
      </div>
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
      <Typography color="primary">
        Rest time: { countdown !== null ? countdown : dataByWeek[day].rest} seconds
      </Typography>
      {isDayCompleted(week, day) ? 
        <Typography color="success.main">Day completed!</Typography> : 
        <div>
          <Button variant="contained" color="secondary" onClick={() => startTimer(dataByWeek[day].rest)} disabled={countdown !== null}>
          {countdown ? 'Resting... ' : 'Start Rest'}
          </Button>
          <Button variant="contained" color="success" onClick={() => handleComplete()} disabled={isDayCompleted(week, day)}>
            Complete Day
          </Button>
        </div>
      }
    </>
  );
}