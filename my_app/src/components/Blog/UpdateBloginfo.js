import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';

class UpdateBlogInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      description: '',
      content: '',
      published_date: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/blogs/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, blog: res.data})
        this.setState({
          title: res.data.title,
          author: res.data.author,
          description: res.data.description,
          content: res.data.content,
          published_date: res.data.published_date
        })
      })
      .catch(err => {
        console.log("Error from UpdateBlogInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      author: this.state.author,
      description: this.state.description,
      content: this.state.content,
      published_date: this.state.published_date
    };

    axios
      .put('http://localhost:8082/api/blogs/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-blog/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateBlogInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateBookInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/blog-list" className="btn btn-outline-warning float-left">
                  Show Blog List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Blog</h1>
              <p className="lead text-center">
                  Update Blog's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                placeholder='Title of the Blog'
                name='title'
                className='form-control'
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="author">Author</label>
              <input
                type='text'
                placeholder='Author'
                name='author'
                className='form-control'
                value={this.state.author}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="description">Description</label>
              <input
                type='text'
                placeholder='Describe this blog'
                name='description'
                className='form-control'
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="content">Content</label>
              <input
                type='text'
                placeholder='Content for this blog'
                name='content'
                className='form-control'
                value={this.state.content}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="published_date">Published Date</label>
              <input
                type='date'
                placeholder='published_date'
                name='published_date'
                className='form-control'
                value={this.state.published_date}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Blog</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateBlogInfo;