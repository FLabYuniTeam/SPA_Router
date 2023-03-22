import Main from '../pages/Main.js';
import Post from '../pages/Post.js';

export const BASE_URL = 'http://localhost:5500';

export const routes = [
  { path: /^\/$/, element: Main },
  { path: /^\/post\/[\w]+$/, element: Post },
];
