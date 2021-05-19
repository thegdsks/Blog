import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';

class showBlogDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/blogs/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBlogDetails-API-response: " + res.data);
        this.setState({
          blog: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowBLogDetails");
      })
  };

  // BLOG DELTE 

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/blogs/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowBlogDetails_deleteClick");
      })
  };


  render() {

    const blog = this.state.blog;
    let BlogItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{ blog.title }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Author</td>
            <td>{ blog.author }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Description</td>
            <td>{ blog.description }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Content</td>
            <td>{ blog.content }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Published Date</td>
            <td>{ blog.published_date }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
    <div class="containersas">
      <div class="banner banner-single-post post-layout-3 post-formate post-standard bg_image bg_image--2 d-flex align-items-end">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="content-block">
                            <div class="post-content">
                                <div class="post-cat">
                                    <div class="post-cat-list">
                                        <a class="hover-flip-item-wrapper" href="#">
                                            <span class="hover-flip-item">
                                                <span data-text="FEATURED POST">FEATURED POST</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <h1 class="title">Apple honors eight developers with annual
                                    Apple Design Awards</h1>
                                <div class="post-meta-wrapper">
                                    <div class="post-meta">
                                        <div class="post-author-avatar border-rounded">
                                            <img src="assets/images/post-images/author/author-image-3.png" alt="Author Images"/>
                                        </div>
                                        <div class="content">
                                            <h6 class="post-author-name">
                                                <a class="hover-flip-item-wrapper" href="author.html">
                                                    <span class="hover-flip-item">
                                                        <span data-text="Ismat Jahan">Ismat Jahan</span>
                                                    </span>
                                                </a>
                                            </h6>
                                            <ul class="post-meta-list">
                                                <li>Feb 17, 2019</li>
                                                <li>300k Views</li>
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
                    </div>
                </div>
            </div>
        </div>

       <div class="post-single-wrapper axil-section-gap bg-color-white">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <div class="axil-post-details">
                    <p class="has-medium-font-size">Winners are recognized for outstanding app design,
                        innovation, ingenuity, and technical achievement</p>
                    <div class="wp-block-image">
                        <img src="assets/images/post-single/post-single-02.jpg" alt="Post Images" />
                        <figcaption>The Apple Design Award trophy, created by the Apple Design team, is a symbol
                            of achievement and excellence.</figcaption>
                    </div>
                    <div>
                      { BlogItem }
                    </div>
                    <figure class="wp-block-image">
                        <img src="assets/images/post-single/post-single-03.jpg" alt="Post Images"/>
                        <figcaption>The Apple Design Award trophy, created by the Apple Design team, is a symbol
                            of achievement and excellence.</figcaption>
                    </figure>
                    <h2>Apple Design Award Winners: Apps</h2>
                    <p><a href="#">Apple today named</a> eight app and game developers receiving an Apple Design
                        Award, each one selected for being thoughtful and creative. Apple Design Award winners
                        bring distinctive new ideas to life and demonstrate deep mastery of Apple technology.
                        The apps spring up from developers large and small, in every part of the world, and
                        provide users with new ways of working, creating, and playing.</p>
                    <p>“Every year, app and game developers demonstrate exceptional craftsmanship and we’re
                        honoring the best of the best,” said Ron Okamoto, Apple’s vice president of Worldwide
                        Developer Relations. “Receiving an Apple Design Award is a special and laudable
                        accomplishment. Past honorees have made some of the most noteworthy apps and games of
                        all time. Through their vision, determination, and exacting standards, the winning
                        developers inspire not only their peers in the Apple developer community, but all of us
                        at Apple, too.”</p>

                    <figure class="wp-block-image">
                        <img src="assets/images/post-single/post-single-04.jpg" alt="Post Images"/>
                        <figcaption>The Apple Design Award trophy, created by the Apple Design team, is a symbol
                            of achievement and excellence.</figcaption>
                    </figure>
                    <h3>Apple Design Award Winners: Apps </h3>
                    <p> <a href="#">Apple today named</a> eight app and game developers receiving an Apple
                        Design Award, each one selected for being thoughtful and creative. Apple Design Award
                        winners bring distinctive new ideas to life and demonstrate deep mastery of Apple
                        technology. The apps spring up from developers large and small, in every part of the
                        world, and provide users with new ways of working, creating, and playing.</p>
                    <p>“Every year, app and game developers demonstrate exceptional craftsmanship and we’re
                        honoring the best of the best,” said Ron Okamoto, Apple’s vice president of Worldwide
                        Developer Relations. “Receiving an Apple Design Award is a special and laudable
                        accomplishment. Past honorees have made some of the most noteworthy apps and games of
                        all time. Through their vision, determination, and exacting standards, the winning
                        developers inspire not only their peers in the Apple developer community, but all of us
                        at Apple, too.” </p>
                    <p>More than 250 developers have been recognized with Apple Design Awards
                        over the past 20 years. The recognition has proven to be an accelerant for developers
                        who are pioneering innovative designs within their individual apps and influencing
                        entire categories. Previous winners such as Pixelmator, djay, Complete Anatomy,
                        HomeCourt, “Florence,” and “Crossy Road” have set the standard in areas such as
                        storytelling, interface design, and use of Apple tools and technologies.</p>
                    <p>For more information on the apps and games, visit the <a href="#">App Store</a>.</p>

                    <div class="tagcloud">
                        <a href="#">Design</a>
                        <a href="#">Life Style</a>
                        <a href="#">Web Design</a>
                        <a href="#">Development</a>
                        <a href="#">Design</a>
                        <a href="#">Life Style</a>
                    </div>

                    <div class="social-share-block">
                        <div class="post-like">
                            <a href="#"><i class="fal fa-thumbs-up"></i><span>2.2k Like</span></a>
                        </div>
                        <ul class="social-icon icon-rounded-transparent md-size">
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>

                                    <div class="about-author">
                        <div class="media">
                            <div class="thumbnail">
                                <a href="#">
                                    <img src="assets/images/post-images/author/author-b1.png" alt="Author Images"/>
                                </a>
                            </div>
                            <div class="media-body">
                                <div class="author-info">
                                    <h5 class="title">
                                        <a class="hover-flip-item-wrapper" href="#">
                                            <span class="hover-flip-item">
                                                <span data-text="Rahabi Ahmed Khan">Rahabi Ahmed Khan</span>
                                            </span>
                                        </a>
                                    </h5>
                                    <span class="b3 subtitle">Sr. UX Designer</span>
                                </div>
                                <div class="content">
                                    <p class="b1 description">At 29 years old, my favorite compliment is being
                                        told that I look like my mom. Seeing myself in her image, like this
                                        daughter up top, makes me so proud of how far I’ve come, and so thankful
                                        for where I come from.</p>
                                    <ul class="social-share-transparent size-md">
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="far fa-envelope"></i></a></li>
                                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> 

                                    <div class="axil-comment-area">
                        <div class="axil-total-comment-post">
                            <div class="title">
                                <h4 class="mb--0">30+ Comments</h4>
                            </div>
                            <div class="add-comment-button cerchio">
                                <a class="axil-button button-rounded" href="post-details.html" tabindex="0"><span>Add
                                        Your Comment</span></a>
                            </div>
                        </div>

                                        <div class="comment-respond">
                            <h4 class="title">Post a comment</h4>
                            <form action="#">
                                <p class="comment-notes"><span id="email-notes">Your email address will not be
                                        published.</span> Required fields are marked <span class="required">*</span></p>
                                <div class="row row--10">
                                    <div class="col-lg-4 col-md-4 col-12">
                                        <div class="form-group">
                                            <label>Your Name</label>
                                            <input id="name" type="text"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-12">
                                        <div class="form-group">
                                            <label>Your Email</label>
                                            <input id="email" type="email"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-12">
                                        <div class="form-group">
                                            <label>Your Website</label>
                                            <input id="website" type="text"/>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label>Leave a Reply</label>
                                            <textarea name="message"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <p class="comment-form-cookies-consent">
                                            <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent"
                                                type="checkbox" value="yes"/>
                                            <label for="wp-comment-cookies-consent">Save my name, email, and
                                                website in this browser for the next time I comment.</label>
                                        </p>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-submit cerchio">
                                            <input name="submit" type="submit" id="submit"
                                                class="axil-button button-rounded" value="Post Comment"/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                                        <div class="axil-comment-area">
                            <h4 class="title">2 comments</h4>
                            <ul class="comment-list">
                                                <li class="comment">
                                    <div class="comment-body">
                                        <div class="single-comment">
                                            <div class="comment-img">
                                                <img src="assets/images/post-images/author/author-b2.png"
                                                    alt="Author Images"/>
                                            </div>
                                            <div class="comment-inner">
                                                <h6 class="commenter">
                                                    <a class="hover-flip-item-wrapper" href="#">
                                                        <span class="hover-flip-item">
                                                            <span data-text="Cameron Williamson">Cameron
                                                                Williamson</span>
                                                        </span>
                                                    </a>
                                                </h6>
                                                <div class="comment-meta">
                                                    <div class="time-spent">Nov 23, 2018 at 12:23 pm</div>
                                                    <div class="reply-edit">
                                                        <div class="reply">
                                                            <a class="comment-reply-link hover-flip-item-wrapper"
                                                                href="#">
                                                                <span class="hover-flip-item">
                                                                    <span data-text="Reply">Reply</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="comment-text">
                                                    <p class="b2">Duis hendrerit velit scelerisque felis tempus, id
                                                        porta
                                                        libero venenatis. Nulla facilisi. Phasellus viverra
                                                        magna commodo dui lacinia tempus. Donec malesuada nunc
                                                        non dui posuere, fringilla vestibulum urna mollis.
                                                        Integer condimentum ac sapien quis maximus. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="children">
                                                        <li class="comment">
                                            <div class="comment-body">
                                                <div class="single-comment">
                                                    <div class="comment-img">
                                                        <img src="assets/images/post-images/author/author-b3.png"
                                                            alt="Author Images"/>
                                                    </div>
                                                    <div class="comment-inner">
                                                        <h6 class="commenter">
                                                            <a class="hover-flip-item-wrapper" href="#">
                                                                <span class="hover-flip-item">
                                                                    <span data-text="Rahabi Khan">Rahabi Khan</span>
                                                                </span>
                                                            </a>
                                                        </h6>
                                                        <div class="comment-meta">
                                                            <div class="time-spent">Nov 23, 2018 at 12:23 pm
                                                            </div>
                                                            <div class="reply-edit">
                                                                <div class="reply">
                                                                    <a class="comment-reply-link hover-flip-item-wrapper"
                                                                        href="#">
                                                                        <span class="hover-flip-item">
                                                                            <span data-text="Reply">Reply</span>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="comment-text">
                                                            <p class="b2">Pellentesque habitant morbi tristique senectus
                                                                et netus et malesuada fames ac turpis egestas.
                                                                Suspendisse lobortis cursus lacinia. Vestibulum vitae
                                                                leo id diam pellentesque ornare.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>

                                <li class="comment">
                                    <div class="comment-body">
                                        <div class="single-comment">
                                            <div class="comment-img">
                                                <img src="assets/images/post-images/author/author-b2.png"
                                                    alt="Author Images"/>
                                            </div>
                                            <div class="comment-inner">
                                                <h6 class="commenter">
                                                    <a class="hover-flip-item-wrapper" href="#">
                                                        <span class="hover-flip-item">
                                                            <span data-text="Rahabi Khan">Rahabi Khan</span>
                                                        </span>
                                                    </a>
                                                </h6>
                                                <div class="comment-meta">
                                                    <div class="time-spent">Nov 23, 2018 at 12:23 pm</div>
                                                    <div class="reply-edit">
                                                        <div class="reply">
                                                            <a class="comment-reply-link hover-flip-item-wrapper"
                                                                href="#">
                                                                <span class="hover-flip-item">
                                                                    <span data-text="Reply">Reply</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="comment-text">
                                                    <p class="b2">Duis hendrerit velit scelerisque felis tempus, id
                                                        porta
                                                        libero venenatis. Nulla facilisi. Phasellus viverra
                                                        magna commodo dui lacinia tempus. Donec malesuada nunc
                                                        non dui posuere, fringilla vestibulum urna mollis.
                                                        Integer condimentum ac sapien quis maximus. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                                <div class="sidebar-inner">
                                    <div class="axil-single-widget widget widget_categories mb--30">
                        <ul>
                            <li class="cat-item">
                                <a href="#" class="inner">
                                    <div class="thumbnail">
                                        <img src="assets/images/post-images/category-image-01.jpg" alt=""/>
                                    </div>
                                    <div class="content">
                                        <h5 class="title">Tech</h5>
                                    </div>
                                </a>
                            </li>
                            <li class="cat-item">
                                <a href="#" class="inner">
                                    <div class="thumbnail">
                                        <img src="assets/images/post-images/category-image-02.jpg" alt=""/>
                                    </div>
                                    <div class="content">
                                        <h5 class="title">Style</h5>
                                    </div>
                                </a>
                            </li>
                            <li class="cat-item">
                                <a href="#" class="inner">
                                    <div class="thumbnail">
                                        <img src="assets/images/post-images/category-image-03.jpg" alt=""/>
                                    </div>
                                    <div class="content">
                                        <h5 class="title">Travel</h5>
                                    </div>
                                </a>
                            </li>
                            <li class="cat-item">
                                <a href="#" class="inner">
                                    <div class="thumbnail">
                                        <img src="assets/images/post-images/category-image-04.jpg" alt=""/>
                                    </div>
                                    <div class="content">
                                        <h5 class="title">Food</h5>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>

                                    <div class="axil-single-widget widget widget_search mb--30">
                        <h5 class="widget-title">Search</h5>
                        <form action="#">
                            <div class="axil-search form-group">
                                <button type="submit" class="search-button"><i class="fal fa-search"></i></button>
                                <input type="text" class="form-control" placeholder="Search"/>
                            </div>
                        </form>
                    </div>

                                    <div class="axil-single-widget widget widget_postlist mb--30">
                        <h5 class="widget-title">Popular on Blogar</h5>
                                        <div class="post-medium-block">

                                            <div class="content-block post-medium mb--20">
                                <div class="post-thumbnail">
                                    <a href="post-details.html">
                                        <img src="assets/images/small-images/blog-sm-01.jpg" alt="Post Images"/>
                                    </a>
                                </div>
                                <div class="post-content">
                                    <h6 class="title"><a href="post-details.html">The underrated design book that
                                            transformed the way I
                                            work </a></h6>
                                    <div class="post-meta">
                                        <ul class="post-meta-list">
                                            <li>Feb 17, 2019</li>
                                            <li>300k Views</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                                            <div class="content-block post-medium mb--20">
                                <div class="post-thumbnail">
                                    <a href="post-details.html">
                                        <img src="assets/images/small-images/blog-sm-02.jpg" alt="Post Images"/>
                                    </a>
                                </div>
                                <div class="post-content">
                                    <h6 class="title"><a href="post-details.html">Here’s what you should (and shouldn’t)
                                            do when</a>
                                    </h6>
                                    <div class="post-meta">
                                        <ul class="post-meta-list">
                                            <li>Feb 17, 2019</li>
                                            <li>300k Views</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                                            <div class="content-block post-medium">
                                <div class="post-thumbnail">
                                    <a href="post-details.html">
                                        <img src="assets/images/small-images/blog-sm-03.jpg" alt="Post Images"/>
                                    </a>
                                </div>
                                <div class="post-content">
                                    <h6 class="title"><a href="post-details.html">How a developer and designer duo at
                                            Deutsche Bank keep
                                            remote</a></h6>
                                    <div class="post-meta">
                                        <ul class="post-meta-list">
                                            <li>Feb 17, 2019</li>
                                            <li>300k Views</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                                    <div class="axil-single-widget widget widget_newsletter mb--30">
                                        <div class="newsletter-inner text-center">
                            <h4 class="title mb--15">Never Miss A Post!</h4>
                            <p class="b2 mb--30">Sign up for free and be the first to <br /> get notified about updates.
                            </p>
                            <form action="#">
                                <div class="form-group">
                                    <input type="text" placeholder="Enter Your Email "/>
                                </div>
                                <div class="form-submit">
                                    <button class="cerchio axil-button button-rounded"><span>Subscribe</span></button>
                                </div>
                            </form>
                        </div>
                                      </div>

                                    <div class="axil-single-widget widget widget_ads mb--30">
                                        <div class="thumbnail">
                            <a href="#">
                                <img src="assets/images/post-single/ads-01.jpg" alt="Ads Images"/>
                            </a>
                        </div>
                                      </div>

                                    <div class="axil-single-widget widget widget_social mb--30">
                        <h5 class="widget-title">Stay In Touch</h5>
                                        <ul class="social-icon md-size justify-content-center">
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-slack"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                                      </div>

                                    <div class="axil-single-widget widget widget_instagram mb--30">
                        <h5 class="widget-title">Instagram</h5>
                                        <ul class="instagram-post-list-wrapper">
                            <li class="instagram-post-list">
                                <a href="#">
                                    <img src="assets/images/small-images/instagram-01.jpg" alt="Instagram Images"/>
                                </a>
                            </li>
                            <li class="instagram-post-list">
                                <a href="#">
                                    <img src="assets/images/small-images/instagram-02.jpg" alt="Instagram Images"/>
                                </a>
                            </li>
                            <li class="instagram-post-list">
                                <a href="#">
                                    <img src="assets/images/small-images/instagram-03.jpg" alt="Instagram Images"/>
                                </a>
                            </li>
                            <li class="instagram-post-list">
                                <a href="#">
                                    <img src="assets/images/small-images/instagram-04.jpg" alt="Instagram Images"/>
                                </a>
                            </li>
                            <li class="instagram-post-list">
                                <a href="#">
                                    <img src="assets/images/small-images/instagram-05.jpg" alt="Instagram Images"/>
                                </a>
                            </li>
                            <li class="instagram-post-list">
                                <a href="#">
                                    <img src="assets/images/small-images/instagram-06.jpg" alt="Instagram Images"/>
                                </a>
                            </li>
                        </ul>
                    </div>

                                    <div class="axil-single-widget widget widget_archive mb--30">
                        <h5 class="widget-title">Archives</h5>
                                        <ul>
                            <li><a href="#">January 2020</a></li>
                            <li><a href="#">February 2020</a></li>
                            <li><a href="#">March 2020</a></li>
                            <li><a href="#">April 2020</a></li>
                        </ul>
                                      </div>


                                    <div class="axil-single-widget widget widget_video mb--30">
                        <h5 class="widget-title">Featured Videos</h5>
                                        <div class="video-post-wrapepr">

                                            <div class="content-block image-rounded">
                                <div class="post-content">
                                    <div class="post-thumbnail">
                                        <a href="post-details.html">
                                            <img src="assets/images/post-single/post-md-01.jpg" alt="Post Images"/>
                                        </a>
                                        <a class="video-popup size-medium icon-color-secondary position-top-center"
                                            href="post-details.html"><span class="play-icon"></span></a>
                                    </div>
                                    <h6 class="title mt--10"><a href="post-details.html">I built my own camera with a
                                            Raspberry Pi 4</a>
                                    </h6>
                                </div>

                            </div>

                            <div class="content-block image-rounded mt--20">
                                <div class="post-content">
                                    <div class="post-thumbnail">
                                        <a href="post-details.html">
                                            <img src="assets/images/post-single/post-md-02.jpg" alt="Post Images" />
                                        </a>
                                        <a class="video-popup size-medium icon-color-secondary position-top-center"
                                            href="post-details.html"><span class="play-icon"></span></a>
                                    </div>
                                    <h6 class="title mt--10"><a href="post-details.html">A rocket launch can’t unite us
                                            until the space
                                            world acknowledges our divisions</a></h6>
                                </div>

                            </div>

                            <div class="content-block image-rounded mt--20">
                                <div class="post-content">
                                    <div class="post-thumbnail">
                                        <a href="post-details.html">
                                            <img src="assets/images/post-single/post-md-03.jpg" alt="Post Images"/>
                                        </a>
                                        <a class="video-popup size-medium icon-color-secondary position-top-center"
                                            href="post-details.html"><span class="play-icon"></span></a>
                                    </div>
                                    <h6 class="title mt--10"><a href="post-details.html"> With iOS 14, Apple is finally
                                            letting the
                                            iPhone home screen get complicated</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>


                                    <div class="axil-single-widget widget widget_tag_cloud mb--30">
                        <h5 class="widget-title">Archives</h5>
                                        <div class="tagcloud">
                            <a href="#">Design</a>
                            <a href="#">Development</a>
                            <a href="#">Graphic</a>
                            <a href="#">UI/UX Design</a>
                            <a href="#">HTML</a>
                        </div>
                                      </div>
                    <div class="axil-single-widget widget widget_dropdown mb--30">
                        <h5 class="widget-title">Archives</h5>
                        <form action="#">
                            <select>
                                <option>Select Month</option>
                                <option>April 2020 (4)</option>
                                <option>March 2020 (3)</option>
                                <option>November 2018 (11)</option>
                                <option>January 2013 (5)</option>
                            </select>
                        </form>
                    </div>

                    <div class="axil-single-widget widget widget_postlist mb--30">
                        <h5 class="widget-title">Recent Post</h5>
                        <div class="post-medium-block">

                            <div class="content-block post-medium mb--20">
                                <div class="post-content">
                                    <h6 class="title"><a href="post-details.html">The underrated design book that
                                            transformed the way I
                                            work </a></h6>
                                    <div class="post-meta">
                                        <ul class="post-meta-list">
                                            <li>Feb 17, 2019</li>
                                            <li>300k Views</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="content-block post-medium mb--20">
                                <div class="post-content">
                                    <h6 class="title"><a href="post-details.html">Here’s what you should (and shouldn’t)
                                            do when</a>
                                    </h6>
                                    <div class="post-meta">
                                        <ul class="post-meta-list">
                                            <li>Feb 17, 2019</li>
                                            <li>300k Views</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="content-block post-medium">
                                <div class="post-content">
                                    <h6 class="title"><a href="post-details.html">How a developer and designer duo at
                                            Deutsche Bank keep
                                            remote</a></h6>
                                    <div class="post-meta">
                                        <ul class="post-meta-list">
                                            <li>Feb 17, 2019</li>
                                            <li>300k Views</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="axil-banner">
                        <div class="thumbnail">
                            <a href="#">
                                <img class="w-100" src="assets/images/add-banner/banner-02.png" alt="Banner Images" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    );        
  }
}

export default showBlogDetails;