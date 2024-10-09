import { Typography, Button, Grid } from '@mui/material';

export default function AITools() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        AI-Assisted Legal Tools
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="contained" color="primary">
            Talk to Legal Textbooks
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Complete Legal Review Checklist
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}