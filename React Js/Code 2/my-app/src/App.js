
import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
// import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import NewsInfiniteScroll from './Components/NewsInfiniteScroll';

export default class App extends Component {
  page = 5;
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <>
        <div>
          <Router>
            <NavBar></NavBar>
            <LoadingBar
              height={3}
              color="#f11946"
              progress={this.state.progress}
            // onLoaderFinished={()=> setProgess(0)}
            >

            </LoadingBar>
            <Routes>
              <Route exact path='/general' element={<NewsInfiniteScroll setProgress={this.setProgress} key="general" apiKey={this.apiKey} pageSize={this.page} country="in" category="general"></NewsInfiniteScroll>}></Route>
              <Route exact path='/business' element={<NewsInfiniteScroll setProgress={this.setProgress} key="business" apiKey={this.apiKey} pageSize={this.page} country="in" category="business"></NewsInfiniteScroll>}></Route>
              <Route exact path='/entertainment' element={<NewsInfiniteScroll setProgress={this.setProgress} key="entertainment" apiKey={this.apiKey} pageSize={this.page} country="in" category="entertainment"></NewsInfiniteScroll>}></Route>
              <Route exact path='/health' element={<NewsInfiniteScroll setProgress={this.setProgress} key="health" apiKey={this.apiKey} pageSize={this.page} country="in" category="health"></NewsInfiniteScroll>}></Route>
              <Route exact path='/science' element={<NewsInfiniteScroll setProgress={this.setProgress} key="science" apiKey={this.apiKey} pageSize={this.page} country="in" category="science"></NewsInfiniteScroll>}></Route>
              <Route exact path='/sports' element={<NewsInfiniteScroll setProgress={this.setProgress} key="sports" apiKey={this.apiKey} pageSize={this.page} country="in" category="sports"></NewsInfiniteScroll>}></Route>
              <Route exact path='/technology' element={<NewsInfiniteScroll setProgress={this.setProgress} key="technology" apiKey={this.apiKey} pageSize={this.page} country="in" category="technology"></NewsInfiniteScroll>}></Route>
            </Routes>

            {/* <Routes>
  <Route exact path='/general' element={<News setProgress={this.setProgress} key="general" apiKey={this.apiKey} pageSize={this.page} country="in" category="general"></News>}></Route>
  <Route exact path='/business' element={<News setProgress={this.setProgress} key="business" apiKey={this.apiKey} pageSize={this.page} country="in" category="business"></News>}></Route>
  <Route exact path='/entertainment' element={<News setProgress={this.setProgress} key="entertainment" apiKey={this.apiKey} pageSize={this.page} country="in" category="entertainment"></News>}></Route>
  <Route exact path='/health' element={<News setProgress={this.setProgress} key="health" apiKey={this.apiKey} pageSize={this.page} country="in" category="health"></News>}></Route>
  <Route exact path='/science' element={<News setProgress={this.setProgress} key="science" apiKey={this.apiKey} pageSize={this.page} country="in" category="science"></News>}></Route>
  <Route exact path='/sports' element={<News setProgress={this.setProgress} key="sports" apiKey={this.apiKey} pageSize={this.page} country="in" category="sports"></News>}></Route>
  <Route exact path='/technology' element={<News setProgress={this.setProgress} key="technology" apiKey={this.apiKey} pageSize={this.page} country="in" category="technology"></News>}></Route>
</Routes> */}
          </Router>
        </div>
      </>
    )
  }
}


