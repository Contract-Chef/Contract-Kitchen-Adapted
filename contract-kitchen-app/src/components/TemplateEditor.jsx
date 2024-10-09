import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';

const TemplateEditor = ({ templateName }) => {
  const [template, setTemplate] = useState('');
  const [editedTemplate, setEditedTemplate] = useState('');

  useEffect(() => {
    // In a real app, you'd fetch this from an API or database
    fetch(`/src/${templateName}-template.md`)
      .then(response => response.text())
      .then(text => {
        setTemplate(text);
        setEditedTemplate(text);
      });
  }, [templateName]);

  const handleEdit = (event) => {
    setEditedTemplate(event.target.value);
  };

  const handleSave = () => {
    // In a real app, you'd save this to an API or database
    console.log('Saving template:', editedTemplate);
    setTemplate(editedTemplate);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Paper style={{ padding: '1rem', marginBottom: '1rem' }}>
          <Typography variant="h6">Edit Template</Typography>
          <TextField
            multiline
            fullWidth
            rows={20}
            value={editedTemplate}
            onChange={handleEdit}
            variant="outlined"
          />
          <Button variant="contained" color="primary" onClick={handleSave} style={{ marginTop: '1rem' }}>
            Save Changes
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper style={{ padding: '1rem' }}>
          <Typography variant="h6">Preview</Typography>
          <ReactMarkdown>{template}</ReactMarkdown>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TemplateEditor;