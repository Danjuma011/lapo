export const postsRoutes = {
  getPosts: {
    path: "/Bail/:id",
    method: "GET",
  },
  addPartyToBailRequest: {
    path: "/Bail/Parties",
    method: "POST",
  },
  getBailParties: {
    path: "/Bail/Parties",
    method: "GET",
  },
  deleteBailRequest: {
    path: "/Bail",
    method: "DELETE",
  },
  deleteBailParties: {
    path: "/Bail/parties",
    method: "DELETE",
  },
  updateBailRequest: {
    path: "/Bail",
    method: "PUT",
  },
};
