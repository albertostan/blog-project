import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import blogRoutes from './routes/blog.js';
import { posts } from './data.js';

const app = express();



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));


app.use(express.urlencoded({ extended: true }));


app.use('/blog', blogRoutes);


app.get('/', (req, res) => {
  res.render('index', { posts });
});


app.listen(3000, () => {
  console.log('Serverul rulează pe http://localhost:3000');
});
