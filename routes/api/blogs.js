// routes/api/blogs.js

const express = require('express');
const router = express.Router();

// Load Blog model
const Blog = require('../../models/Blog');

// @route GET api/blogs/test
// @description tests blog route
// @access Public
router.get('/test', (req, res) => res.send('blog route testing!'));

// @route GET api/blogs
// @description Get all blogs
// @access Public
router.get('/', (req, res) => {
  Blog.find()
    .then(blogs => res.json(blogs))
    .catch(err => res.status(404).json({ noblogsfound: 'No Blogs found' }));
});

// @route GET api/blogs/:id
// @description Get single blog by id
// @access Public
router.get('/:id', (req, res) => {
  Blog.findById(req.params.id)
    .then(blog => res.json(blog))
    .catch(err => res.status(404).json({ noblogfound: 'No Blog found' }));
});

// @route GET api/blogs
// @description add/save blog
// @access Public
router.post('/', (req, res) => {
  Blog.create(req.body)
    .then(blog => res.json({ msg: 'Blog added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this blog' }));
});

// @route GET api/blogs/:id
// @description Update blog
// @access Public
router.put('/:id', (req, res) => {
  Blog.findByIdAndUpdate(req.params.id, req.body)
    .then(blog => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/blogs/:id
// @description Delete blog by id
// @access Public
router.delete('/:id', (req, res) => {
  Blog.findByIdAndRemove(req.params.id, req.body)
    .then(blog => res.json({ mgs: 'Blog entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a blog' }));
});

module.exports = router;