import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';
import ShowBlogList from './components/Blog/ShowBlogList';
import CreateBlog from './components/Blog/CreateBlog';
import UpdateBlogInfo from './components/Blog/UpdateBloginfo';
import ShowBlogDetails from './components/Blog/ShowBlogDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowBookList} /> 
          <Route path='/book-list' component={ShowBookList} />
          <Route path='/create-book' component={CreateBook} />
          <Route path='/edit-book/:id' component={UpdateBookInfo} />
          <Route path='/show-book/:id' component={ShowBookDetails} />

          <Route path='/blog-list' component={ShowBlogList} />
          <Route path='/create-blog' component={CreateBlog} />
          <Route path='/edit-blog/:id' component={UpdateBlogInfo} />
          <Route path='/show-blog/:id' component={ShowBlogDetails} />
          
        </div>
      </Router>
    );
  }
}

export default App;