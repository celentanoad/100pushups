import { useEffect, useState } from 'react';
import { Button, Typography, Box, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TableByWeek from './TableByWeek';
import { EnduranceTest } from './EnduranceTest';

function App() {
  const [view, setView] = useState('home');
  const [week, setWeek] = useState(null);
  const [completed, setCompleted] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    const storedCompleted = JSON.parse(localStorage.getItem('completed'));
    if (storedCompleted) {
      setCompleted(storedCompleted);
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'completed') {
        const updatedCompleted = JSON.parse(event.newValue);
        setCompleted(updatedCompleted);
      }
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const getLastCompleted = () => {
    const lastCompleted = completed?.[completed.length - 1];
    if (lastCompleted) {
      return `${lastCompleted.week}, ${lastCompleted.day} on ${lastCompleted.date}`
    }
    return null;
  }

  const isWeekCompleted = (week) => {
    return completed?.find(item => item.week === week && item.day === 'day3');
  }

  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: theme.palette.background.default,
    }}>
      <Box
        sx={{
          flex: 1,
          alignItems: 'center',
          paddingTop: theme.spacing(10),
          flexDirection: 'column',
          height: '100vh',
          width: '100vw',
          backgroundColor: theme.palette.background.default
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: theme.spacing(2),
            right: theme.spacing(2),
          }}
        >
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={() => {
              if (confirm('Are you sure you want to reset all progress? (Action cannot be undone)')) {
                localStorage.clear();
                setCompleted(null);
              } else {
                return;
              }
            } }
          >
            Reset Progress
          </Button>
        </Box>
        {view === 'home' ? (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: theme.spacing(4),
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
              borderRadius: theme.shape.borderRadius,
              boxShadow: theme.shadows[3],
            }}
          >

            <Typography variant="h4" gutterBottom>
              100 Pushups Challenge
            </Typography>
            <Box sx={{ marginBottom: theme.spacing(2) }}>
              <Typography variant="body1">
                Last test result: {JSON.parse(localStorage.getItem('results'))?.slice(-1)?.[0]?.result || 'No results yet'}
              </Typography>
              {['week2', 'week4', 'week5'].includes(completed?.[completed.length - 1]?.week) &&
                completed?.[completed.length - 1]?.day === 'day3' &&
                completed?.[completed.length - 1]?.date >= JSON.parse(localStorage.getItem('results'))?.slice(-1)?.[0]?.date
                &&
                <Typography variant="body1">
                  Time to retake the endurance test!
                </Typography>}
              <Button variant="contained" size="small" color="primary" sx={{ marginTop: theme.spacing(1) }} onClick={() => setView('test')}>
                Endurance Test
              </Button>
            </Box>
            <Typography variant="body1">
              Last completed: {completed ? getLastCompleted() : 'No sets completed yet'}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: theme.spacing(2),
                flexWrap: 'wrap',
                marginTop: theme.spacing(2),
              }}
            >
              {['week1', 'week2', 'week3', 'week4', 'week5', 'week6'].map((weekName) => (
                <Button
                  key={weekName}
                  variant="contained"
                  color={isWeekCompleted(weekName) ? "success" : week === weekName ? 'secondary' : 'primary'}
                  onClick={() => setWeek(weekName)}
                >
                  {weekName.replace('week', 'Week ') + (isWeekCompleted(weekName) ? ' (Completed)' : '')}
                </Button>
              ))}
            </Box>
            {week && (
              <Box sx={{ marginTop: theme.spacing(4) }}>
                <TableByWeek week={week} />
              </Box>
            )}
          </Box>
        ) : (
          <>
            <EnduranceTest />
            <Button onClick={() => setView('home')}>
              Back to Home
            </Button>
          </>
        )}
      </Box>
      <Box
        sx={{
          position: 'relative',
          left: theme.spacing(2),
          width: 'calc(100% - 32px)',
          textAlign: 'center'
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Visit <Link href="https://hundredpushups.com/">https://hundredpushups.com/</Link> for more info - all charts and data are from there.
        </Typography>
      </Box>
    </Box>
  );
}

export default App;