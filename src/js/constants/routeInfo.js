import Main from '../pages/Main.js';
import PostDrag from '../pages/Post_drag.js';
import PostThis from '../pages/Post_this.js';
import PostCoordinates from '../pages/Post_coordinates.js';
import PostURI from '../pages/Post_uri.js';
import PostNetwork from '../pages/Post_network.js';

export const BASE_URL = 'http://localhost:5500';

export const routes = [
  { path: /^\/$/, element: Main },
  { path: /^\/post\/1/, element: PostDrag },
  { path: /^\/post\/2/, element: PostThis },
  { path: /^\/post\/3/, element: PostCoordinates },
  { path: /^\/post\/4/, element: PostURI },
  { path: /^\/post\/5/, element: PostNetwork },
  { path: /.*/, element: Main },
];
