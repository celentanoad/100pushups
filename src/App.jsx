import { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TableByWeek from './TableByWeek';
import { EnduranceTest } from './EnduranceTest';

function App() {
  const [view, setView] = useState('home');
  const [week, setWeek] = useState(null);
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        backgroundColor: theme.palette.background.default
      }}
    >
      { view === 'home' ? (
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
            Last test result: 
          </Typography>
          <Button variant="contained" size="small" color="primary" sx={{ marginTop: theme.spacing(1) }} onClick={() => setView('test')}>
            Endurance Test
          </Button>
        </Box>
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
              color={week === weekName ? 'secondary' : 'primary'}
              onClick={() => setWeek(weekName)}
            >
              {weekName.replace('week', 'Week ')}
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
         ) 
      }
    </Box>
  );
}

export default App;