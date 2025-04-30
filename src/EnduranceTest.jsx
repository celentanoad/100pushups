import { Box, TextField, Typography, Button, List, ListItem, ListItemText, Tooltip } from "@mui/material"
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { LineChart } from "@mui/x-charts";
import { useEffect, useState } from "react";

export const EnduranceTest = () => {
  const [view, setView] = useState('update');
  const [result, setResult] = useState(null);
  const [results, setResults] = useState(() => JSON.parse(localStorage.getItem('results')) || []);
  const [error, setError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [displayGraph, setDisplayGraph] = useState(false);

  useEffect(() => {
  },[results]);

  const suggestRetakeWeek = (result) => {
    const lastCompleted = JSON.parse(localStorage.getItem('completed')) || [];
    const lastWeek = lastCompleted[lastCompleted.length - 1]?.week;
    if (!result) return false;
    switch (lastWeek) {
      case 'week2':
        if (result < 16) return true;
        break;
      case 'week4':
        if (result < 31) return true;
        break;
      case 'week5':
        if (result < 46) return true;
        break;
      default:
        return false;
    }
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setError(isNaN(value));
    setResult(value);
  }

  const handleSubmit = () => {
    if (result && !error) {
      const newResult = {
        date: new Date().toLocaleDateString(),
        result: Number(result)
      };
      const updatedResults = [...results, newResult];
      localStorage.setItem('results', JSON.stringify(updatedResults));
      setResults(updatedResults);
      setResult(null);
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 2000);
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: 4,
        backgroundColor: '#1e1e1e',
        color: '#e0e0e0',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Update test results
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <TextField placeholder="Total pushups done" variant="outlined" error={error} value={result || ""} onChange={handleChange}/>
        <Tooltip title="Do as many pushups as you can and record your result">
          <QuestionMarkIcon />
        </Tooltip>
      </Box>
      <Button onClick={handleSubmit} disabled={submitSuccess}>
        Save Result
      </Button>
      {submitSuccess && (
        <Typography variant="body1" color="success.main">
          Result saved successfully!
        </Typography>
      )}
      {suggestRetakeWeek(results[results.length-1]?.result) && (
        <Typography variant="body1" color="error.main">
          Based on your latest results, redo the previous week or retake the test.
        </Typography>
      )}
      <Button onClick={() => setView(view === 'history' ? 'update' : 'history')}>
        {view === 'history' ? 'Hide Previous Results' : 'Show Previous Results'}
      </Button>
      {view === 'history' && (
        <Box>
          <Typography variant="h6">Previous Results</Typography>
          <Button onClick={() => { setDisplayGraph(!displayGraph)}}>
            {displayGraph ? 'Hide Graph' : 'Show Graph'}
          </Button>
          {displayGraph ? (
            results.length > 0 && results.every((result) => !isNaN(result.result) && result.date) ? (
              <LineChart
                xAxis={[{ 
                  data: results.map((result) => new Date(result.date).getTime()),
                  valueFormatter: (value) => new Date(value).toLocaleDateString()
                }]}
                series={[
                  {
                    data: results.map((result) => Number(result.result)),
                  },
                ]}
                height={300}
              />
            ) : (
              <Typography variant="body1" color="error.main">
                No valid data available to display the graph.
              </Typography>
            )
          ) : (
            <List
              sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: 1,
              }}
            >
              {results.map((result, index) => (
                <ListItem key={index} divider>
                  <ListItemText
                    primary={`${result.result} pushups`}
                    secondary={`Date: ${result.date}`}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      )}
    </Box>
  )
}