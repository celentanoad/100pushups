import { Box, TextField, Typography, Button, List, ListItem, ListItemText } from "@mui/material"
import { useState } from "react";

export const EnduranceTest = () => {
  const [view, setView] = useState('update');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    setError(isNaN(value));
    setResult(value);
  }
  const handleSubmit = () => {
    if (result && !error) {
      const storedResults = JSON.parse(localStorage.getItem('results')) || [];
      const newResult = {
        date: new Date().toLocaleDateString(),
        result: result
      };
      const updatedResults = [...storedResults, newResult];
      localStorage.setItem('results', JSON.stringify(updatedResults));
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
      <TextField placeholder="Total pushups done" variant="outlined" error={error} value={result || ""} onChange={handleChange}/>
      <Button onClick={handleSubmit} disabled={submitSuccess}>
        Save Result
      </Button>
      {submitSuccess && (
        <Typography variant="body1" color="success.main">
          Result saved successfully!
        </Typography>
      )}
      <Button onClick={() => setView('history')}>
        View Previous Results
      </Button>
      {view === 'history' && (
        <Box>
          <Typography variant="h6">Previous Results</Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
            {JSON.parse(localStorage.getItem('results')).map((result, index) => (
              <ListItem key={index} divider>
                <ListItemText
                  primary={`${result.result} pushups`}
                  secondary={`Date: ${result.date}`}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  )
}