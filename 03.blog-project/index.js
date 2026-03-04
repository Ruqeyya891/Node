const express = require('express')
const { nanoid } = require('nanoid')

const app = express()
const port = 8080


app.use(express.json())

const blogs = require('./data')

app.get('/api/blogs', (req, res) => {
    try {
      console.log('query', req.query);
  
      const { search = '', sort, order = 'asc', page = 1, limit = 10 } = req.query;
  
      const pageNumber = Number(page);
      const limitNumber = Number(limit);
  
      let filteredBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.author.toLowerCase().includes(search.toLowerCase())
      );
  
      if (sort) {
        filteredBlogs = filteredBlogs.sort((a, b) => {
          if (typeof a[sort] === 'string') {
            return order === 'asc'
              ? a[sort].toLowerCase().localeCompare(b[sort].toLowerCase())
              : b[sort].toLowerCase().localeCompare(a[sort].toLowerCase());
          } else {
            return order === 'asc'
              ? a[sort] - b[sort]
              : b[sort] - a[sort];
          }
        });
      }
  
      const startIndex = (pageNumber - 1) * limitNumber;
      const endIndex = startIndex + limitNumber;
  
      const paginatedBlogs = filteredBlogs.slice(startIndex, endIndex);
  
      res.status(200).json({
        data: paginatedBlogs,
        message: 'Blogs retrieved successfully',
        success: true,
        error: null,
        pagination: {
          page: pageNumber,
          limit: limitNumber,
          total: filteredBlogs.length,
          totalPages: Math.ceil(filteredBlogs.length / limitNumber)
        }
      });
  
    } catch (error) {
      res.status(500).json({
        message: 'Internal Server Error',
        status: 'error',
        error: error.message
      });
    }
  });


























































































app.listen(port, () => {
    console.log(`Example app listening on port ${port}, url: http://localhost:${port}`);
})