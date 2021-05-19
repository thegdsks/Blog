import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';

class ShowBlogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/blogs')
      .then(res => {
        this.setState({
          blogs: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowBlogList');
      })
  };


  render() {
    const blogs = this.state.blogs;
    console.log("PrintBlog: " + blogs);
    let blogList;

    if(!blogs) {
      blogList = "there is no blog record!";
    } else {
      blogList = blogs.map((blog, k) =>
        <BlogCard blog={blog} key={k} />
      );
    }

    return (
    <div class="main-wrapper">
        <div class="axil-post-list-area axil-section-gap bg-color-white">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-xl-8">
                        {blogList}
                    </div>
                </div>
             </div>     
        </div>
    </div>
    );
  }
}

export default ShowBlogList;