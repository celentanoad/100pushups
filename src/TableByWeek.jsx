import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import {weeks} from './reps';
import { useState } from "react";

export default function TableByWeek({ week }) {
  const [day, setDay] = useState('day1');
  const [countdown, setCountdown] = useState(null);
  const dataByWeek = weeks[week];
  const sets = Object.keys(dataByWeek[day].level1).filter(key => key !== "name");

  const startTimer = (restTime) => {
    setCountdown(restTime);
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return null;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <>
      <div>
        <Button color={day === 'day1' ? 'secondary' : 'primary'} onClick={() => setDay('day1')}> Day 1 </Button>
        <Button color={day === 'day2' ? 'secondary' : 'primary'} onClick={() => setDay('day2')}> Day 2 </Button>
        <Button color={day === 'day3' ? 'secondary' : 'primary'} onClick={() => setDay('day3')}> Day 3 </Button>
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
      <Button variant="contained" color="secondary" onClick={() => startTimer(dataByWeek[day].rest)} disabled={countdown !== null}>
        {countdown ? 'Resting... ' : 'Start Rest'}
      </Button>
    </>
  );
}