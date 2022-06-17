import React, { Component } from "react";
import ReactDOM from "react-dom";
import ThreeScene from "./components/ThreeScene";
import Navbar from './components/Navbar'
import Panels from "./components/Panels";
import { Grid, GridItem } from '@chakra-ui/react'

class App extends Component {
  render() {
    return (
      <Grid templateColumns={['1fr', '1fr','70% 1fr', '70% 1fr']} >
        <GridItem>
          <Navbar />
          <ThreeScene />
        </GridItem>
        <GridItem>
          <Panels />
        </GridItem>
      </Grid>
    )
  }
}

export default App