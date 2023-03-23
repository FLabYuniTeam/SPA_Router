import Main from "../pages/Main.js";
import Post from "../pages/Post.js";

export const BASE_URL = "";

export const routes = [
  { path: /^\/$/, element: Main },
  { path: /^\/post\/[\w]+$/, element: Post },
  { path: /.*/, element: Main }
];
