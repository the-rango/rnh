import React, {Fragment} from 'react';
import logo from './RNHlogo.png';
import './App.css';
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Typography,
  Paper,
  IconButton
} from '@material-ui/core';

import ds from './pics/ds.jpeg'
import gj from './pics/gj.jpeg'

import {Menu} from '@material-ui/icons'


function App() {
  const [disp,setDisp] = React.useState(0);
  // disp is which tab is currently active:
  // 0->home, 1->HALO, 2->Ray, 3->Members

  const handleTabChange = (event, newTab) => {
    // Instead of embedding the children sites, can also redirect
    if (newTab === 1){
      // HALO
      // const newWindow = window.open("http://thehaloclub.org", '_blank', 'noopener,noreferrer')
      // if (newWindow) newWindow.opener = null
      setDisp(newTab);
    } else if (newTab === 2){
      // Ray
      const newWindow = window.open("http://www.rayclub.org", '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    } else {
      setDisp(newTab);
    }
  };

  return (
    <div className="App">
      <header>
        <AppBar position="static" color="transparent">
          <Toolbar style={{display: "flex"}}>
            <img src={logo} alt="logo" height="80px"/>
            <div style={{flexGrow: 1}} />
            {/*Create mobile view*/}
            {(window.innerWidth < 1000) ? (
              <IconButton >
                <Menu />
              </IconButton>
            ) : (
              <Paper square elevation={0}>
              <Tabs
                value={disp}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleTabChange}
                style={{
                  position: "absolute",
                  bottom: "0px",
                  right: "20px"
                }}
              >
                <Tab label="Home" />
                <Tab label="HALO" />
                <Tab label="RAY" />
                <Tab label="Members" />
              </Tabs>
            </Paper>
            )}

          </Toolbar>
        </AppBar>
      </header>
      <body>
        {(disp === 0) ? (
          <Fragment>
            <br />
            <Typography variant="h5">
              Welcome to RNH Foundation
            </Typography>
            <Typography variant="body2">
              Our mission is driven by equity to make a difference in the lives of those who were placed at a bad starting line.
              I don't know what else to put here...
            </Typography>

            <br />

          </Fragment>
        ) : (
          (disp === 1) ? (
            <div style={{width: "100%", height: "99%"}}>
              <iframe title="HALOclub" src="http://thehaloclub.org/" width="99%" padding={0} height={window.innerHeight - 90}/>
            </div>
          ) : (
            <Fragment>
              <br />
              <Typography variant="h5">
                This is the Members page
              </Typography>
              <Typography variant="body2">
                We owe all of our success to our wonderful people.
              </Typography>
              <img alt="" width={200} src={ds} />
              <Typography variant="body2">
                David Song | El Presidente | Whitney High School 10th
              </Typography>
              <br />
              <img alt="" width={200} src={gj} />
              <Typography variant="body2">
                Grace Jeong | Parkview School Teacher | Board Member | Founder 2016 | Advisor
              </Typography>
            </Fragment>
          )
        )}
      </body>
    </div>
  );
}

export default App;
