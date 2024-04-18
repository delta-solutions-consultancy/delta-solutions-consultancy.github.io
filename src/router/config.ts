const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: "/blog",
    exact: true,
    component: "Blog",
  },
  {
    path: "/blog/:slug",
    exact: true,
    component: "BlogPost",
  },
];

export default routes;
