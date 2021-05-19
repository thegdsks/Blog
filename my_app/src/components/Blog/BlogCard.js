import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const BlogCard = (props) => {
    const blog  = props.blog;

    return(
        <div className="content-block post-list-view axil-control mt--30">
            <div class="post-thumbnail">
                <Link to={`/show-blog/${blog._id}`}>
                    <img src="https://mk0bannerflowss888vj.kinstacdn.com/app/uploads/blog-header-creative-banner.jpg" alt="Post Images" />
                 </Link>
            </div>
            <div class="post-content">
                <div class="post-cat">
                    <div class="post-cat-list">
                        <Link to='#'>TECH</Link>
                    </div>
                </div>
                <h4 class="title">
                    <Link to={`/show-blog/${blog._id}`}>{ blog.title }</Link>
                </h4>
                <div class="post-meta-wrapper">
                    <div class="post-meta">
                        <div class="post-author-avatar border-rounded"><i class="fad fa-user-circle fa-2x"></i></div>
                            <div class="content">
                                <h6 class="post-author-name"><a href="author-details.html">{blog.author}</a></h6>
                                <ul class="post-meta-list">
                                    <li>Feb 17, 2019</li>
                                    <li>3 min read</li>
                                </ul>
                            </div>
                        </div>
                        <ul class="social-share-transparent justify-content-end">
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fas fa-link"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
    )
};

export default BlogCard;