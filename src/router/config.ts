const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/about"],
    exact: true,
    component: "About",
  },
  {
    path: ["/training"],
    exact: true,
    component: "Training",
  },
  {
    path: ["/contact"],
    exact: true,
    component: "Contact",
  },
  {
    path: ["/services"],
    exact: true,
    component: "Services",
  },
  {
    path: ["/privacy-policy"],
    exact: true,
    component: "PrivacyPolicy",
  },
];

export default routes;
