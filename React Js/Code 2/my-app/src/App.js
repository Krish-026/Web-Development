
import './App.css';

import React, { useState } from 'react'
import NavBar from './Components/NavBar';
// import News from './Components/News';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import NewsInfiniteScroll from './Components/NewsInfiniteScroll';

const App =()=> {
  const page = 5;
  const apiKey = process.env.REACT_APP_NEWS_API; // This is stored in .env.local 
  const[progress, setProgress] = useState(0);
    return (
      <>
        <div>
          <Router>
            <NavBar></NavBar>
            <LoadingBar
              height={3}
              color="#f11946"
              progress={progress}
            // onLoaderFinished={()=> setProgess(0)}
            >

            </LoadingBar>
            <Routes>
              <Route exact path='/' element={<NewsInfiniteScroll setProgress={setProgress} key="general" apiKey={apiKey} pageSize={page} country="in" category="general"></NewsInfiniteScroll>}></Route>
              <Route exact path='/general' element={<NewsInfiniteScroll setProgress={setProgress} key="general" apiKey={apiKey} pageSize={page} country="in" category="general"></NewsInfiniteScroll>}></Route>
              <Route exact path='/business' element={<NewsInfiniteScroll setProgress={setProgress} key="business" apiKey={apiKey} pageSize={page} country="in" category="business"></NewsInfiniteScroll>}></Route>
              <Route exact path='/entertainment' element={<NewsInfiniteScroll setProgress={setProgress} key="entertainment" apiKey={apiKey} pageSize={page} country="in" category="entertainment"></NewsInfiniteScroll>}></Route>
              <Route exact path='/health' element={<NewsInfiniteScroll setProgress={setProgress} key="health" apiKey={apiKey} pageSize={page} country="in" category="health"></NewsInfiniteScroll>}></Route>
              <Route exact path='/science' element={<NewsInfiniteScroll setProgress={setProgress} key="science" apiKey={apiKey} pageSize={page} country="in" category="science"></NewsInfiniteScroll>}></Route>
              <Route exact path='/sports' element={<NewsInfiniteScroll setProgress={setProgress} key="sports" apiKey={apiKey} pageSize={page} country="in" category="sports"></NewsInfiniteScroll>}></Route>
              <Route exact path='/technology' element={<NewsInfiniteScroll setProgress={setProgress} key="technology" apiKey={apiKey} pageSize={page} country="in" category="technology"></NewsInfiniteScroll>}></Route>
            </Routes>

            {/* <Routes>
  <Route exact path='/general' element={<News setProgress={setProgress} key="general" apiKey={apiKey} pageSize={page} country="in" category="general"></News>}></Route>
  <Route exact path='/business' element={<News setProgress={setProgress} key="business" apiKey={apiKey} pageSize={page} country="in" category="business"></News>}></Route>
  <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" apiKey={apiKey} pageSize={page} country="in" category="entertainment"></News>}></Route>
  <Route exact path='/health' element={<News setProgress={setProgress} key="health" apiKey={apiKey} pageSize={page} country="in" category="health"></News>}></Route>
  <Route exact path='/science' element={<News setProgress={setProgress} key="science" apiKey={apiKey} pageSize={page} country="in" category="science"></News>}></Route>
  <Route exact path='/sports' element={<News setProgress={setProgress} key="sports" apiKey={apiKey} pageSize={page} country="in" category="sports"></News>}></Route>
  <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" apiKey={apiKey} pageSize={page} country="in" category="technology"></News>}></Route>
</Routes> */}
          </Router>
        </div>
      </>
    )
}

export default App


