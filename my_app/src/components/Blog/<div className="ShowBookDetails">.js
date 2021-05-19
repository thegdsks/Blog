<div className="ShowBookDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to={`/blog-list`} className="btn btn-outline-warning float-left">
                  Show Blog List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Blog's Record</h1>
              <p className="lead text-center">
                  View Blog's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { BlogItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,blog._id)}>Delete Blog</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-blog/${blog._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Blog
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Blog</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Blog</button> */}

        </div>
      </div>