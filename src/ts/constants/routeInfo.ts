import Main from '../pages/Main';
import PostDrag from '../pages/Post_drag';
import PostThis from '../pages/Post_this';
import PostCoordinates from '../pages/Post_coordinates';
import PostURI from '../pages/Post_uri';
import PostNetwork from '../pages/Post_network';

export const BASE_URL = 'http://localhost:8080';

export const routes = [
  { path: '/', element: Main },
  { path: '/post/1', element: PostDrag },
  { path: '/post/2', element: PostThis },
  { path: '/post/3', element: PostCoordinates },
  { path: '/post/4', element: PostURI },
  { path: '/post/5', element: PostNetwork },
];
