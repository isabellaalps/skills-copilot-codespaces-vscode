// Create web server
const express = require('express');
const app = express();
// Serve static files from public folder
app.use(express.static('public'));
// Parse form data
app.use(express.urlencoded({ extended: true }));
// Handle form submission
app.post('/comments', (req, res) => {
  // 1. Get the comment from the form
  const comment = req.body.comment;
  // 2. Create a new li element
  const li = document.createElement('li');
  // 3. Add the comment to the li element
  li.innerText = comment;
  // 4. Append the li element to the ul
  document.querySelector('#comments-list').appendChild(li);
  res.redirect('/');
});
// Start the web server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});