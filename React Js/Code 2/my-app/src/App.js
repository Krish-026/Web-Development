
import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import{
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

export default class App extends Component {
  page = 5;
  render() {
    return (
      <>
      <div> 
      <Router>
        <NavBar></NavBar>
          <Routes>
            
        <Route exact path='/about' element = {<News key = "general" pageSize = {this.page} country = "in" category = "general"></News>}></Route>
        <Route exact path='/business' element = {<News key = "business" pageSize = {this.page} country = "in" category = "business"></News>}></Route>
        <Route exact path='/entertainment' element = {<News key = "entertainment" pageSize = {this.page} country = "in" category = "entertainment"></News>}></Route>
        <Route exact path='/general' element = {<News key = "general" pageSize = {this.page} country = "in" category = "general"></News>}></Route>
        <Route exact path='/health' element = {<News key = "health" pageSize = {this.page} country = "in" category = "health"></News>}></Route>
        <Route exact path='/science' element = {<News key = "science" pageSize = {this.page} country = "in" category = "science"></News>}></Route>
        <Route exact path='/sports' element = {<News key = "sports" pageSize = {this.page} country = "in" category = "sports"></News>}></Route>
        <Route exact path='/technology' element = {<News key = "technology" pageSize = {this.page} country = "in" category = "technology"></News>}></Route>
          </Routes>
      </Router>
      </div>
      </>
    )
  }
}


