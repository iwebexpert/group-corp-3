import React, { ReactChild, ReactChildren } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LeftMenu from '../LeftMenu';
import { Grid, Box } from '@material-ui/core';

export interface LayoutProps  { 
  children: ReactChild | ReactChildren;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      <Box display="flex" flexDirection="column" flexGrow={1}>
        <Grid container style={{flex:1}}>
          <Grid item md={2} sm={3} xs={5}>
            <LeftMenu/>
          </Grid>
          <Grid item md={10} sm={9} xs={7}>
            <Box p={2} height='100%'>
              { children }
            </Box>
          </Grid>
        </Grid>
      </Box>
     <Footer/>
    </React.Fragment>
  );
}