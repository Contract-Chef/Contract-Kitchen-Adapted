import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import TemplateEditor from '../components/TemplateEditor';

export default function Templates() {
  const [selectedTemplate, setSelectedTemplate] = React.useState(null);
  const templates = [
    { id: 1, name: 'nda', displayName: 'Non-Disclosure Agreement' },
    // Add other templates here
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Legal Templates
      </Typography>
      {!selectedTemplate ? (
        <List>
          {templates.map((template) => (
            <ListItem key={template.id} button onClick={() => setSelectedTemplate(template.name)}>
              <ListItemText primary={template.displayName} />
            </ListItem>
          ))}
        </List>
      ) : (
        <>
          <Typography variant="h5" gutterBottom>{templates.find(t => t.name === selectedTemplate).displayName}</Typography>
          <TemplateEditor templateName={selectedTemplate} />
        </>
      )}
    </div>
  );
}