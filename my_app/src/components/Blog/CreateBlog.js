import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';


class CreateBlog extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author:'',
      description:'',
      content:'',
      published_date:'',
      updated_date:''
    };
  }

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
      published_date: this.state.published_date,
      updated_date: this.state.updated_date
    };

    axios
      .post('http://localhost:8082/api/blogs', data)
      .then(res => {
        this.setState({
            title: '',
            author:'',
            description:'',
            content:'',
            published_date:'',
            updated_date:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateBlog!");
      })
  };

  render() {
    return (
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/blog-list" className="btn btn-outline-warning float-left">
                  Show Blog List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Blog</h1>
              <p className="lead text-center">
                  Create new blog
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
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
                  <input
                    type='text'
                    placeholder='Describe this BLog'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='CONTENT'
                    name='content'
                    className='form-control'
                    value={this.state.content}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='published_date'
                    name='published_date'
                    className='form-control'
                    value={this.state.published_date}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateBlog;