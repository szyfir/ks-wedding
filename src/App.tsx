import React from 'react';
import './App.css';
import { Grid, Paper, styled } from '@mui/material';
import Image from './img/appPhoto.jpg'; // Import using relative path


const AppBarPhoto = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: "50vh",
  backgroundSize: "contain",
  opacity: "50%",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${Image})`
}));


function App() {
  return (
    <div className="App">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
      >
        <Grid item >
          <Paper elevation={8}>
            <AppBarPhoto />
            <h1>test</h1>
          </Paper>
        </Grid>
      </Grid>




      {/* 
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <div>
          <AppBarPhoto />
        </div>
        <div>
          Counter
        </div>
        <div>
          <div>sala</div>
          <div>kosciol</div>
        </div>
        <div>
          prezenty
        </div>
        <div>
          dane kontaktowe
        </div>
        <div>
          location
        </div>
        <div>
          footer
        </div>

      </Grid> */}
    </div>
  );
}

export default App;
