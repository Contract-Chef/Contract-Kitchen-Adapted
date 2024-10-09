import { Typography, Button, Grid as Grid2 } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Welcome to Contract Kitchen
      </Typography>
      <Typography variant="body1" paragraph>
        Manage legal templates and use AI-assisted tools for document creation and review.
      </Typography>
      <Grid2 container spacing={2}>
        <Grid2 item>
          <Button component={Link} to="/templates" variant="contained" color="primary">
            Browse Templates
          </Button>
        </Grid2>
        <Grid2 item>
          <Button component={Link} to="/ai-tools" variant="outlined" color="primary">
            AI Tools
          </Button>
        </Grid2>
      </Grid2>
    </div>
  );
}