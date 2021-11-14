const menu = {
  namespaced: true,
  state: {
    menu: [
      {
        id: 0,
        label: "All",
        path: "/",
      },
      {
        id: 1,
        label: "Active",
        path: "/active",
      },
      {
        id: 2,
        label: "Completed",
        path: "/completed",
      },
    ],
  },
};
export default menu;
