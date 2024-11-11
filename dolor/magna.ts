import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const MyComponent = () => (
    <Grid container>
        <Grid item xs={6} align="left">
            <Typography variant="body1">Left-aligned content</Typography>
        </Grid>
    </Grid>
);

export default MyComponent;
