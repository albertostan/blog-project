import express from 'express';
import { posts } from '../data.js';
const router = express.Router();

router.post('/new', (req, res) => {
  const { title, content } = req.body;
  posts.push({ title, content });
  res.redirect('/');
});

router.post('/delete/:id', (req, res) => {
    const postId = req.params.id;
    posts.splice(postId, 1);
    res.redirect('/');
  });
  
  
router.get('/edit/:id', (req, res) => {
    const postId = req.params.id;
    const post = posts[postId];
    res.render('edit', { post, postId });
  });
  
  
router.post('/edit/:id', (req, res) => {
    const postId = req.params.id;
    const { title, content } = req.body;
    posts[postId] = { title, content };
    res.redirect('/');
  });

export default router;
