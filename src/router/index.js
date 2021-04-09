import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Calendar from "../views/Calendar";
import Colors from "../views/Colors";
import Post from "../views/Posts/Post";
import PageNotFound from "../views/PageNotFound";
import PostDetail from "../views/Posts/PostDetail";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar,
  },
  {
    path: "/colors",
    name: "Colors",
    component: Colors,
  },
  {
    path: "/posts",
    name: "Post",
    component: Post,
  },
  {
    path: "/post-detail",
    name: "PostDetail",
    component: PostDetail,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
