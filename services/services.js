const ServiceAPI = {
    getTodo: () => {
      return axios.get("https://630f5f5337925634188dfd29.mockapi.io/api/products");
    },
    postTodo: (Tdo) => {
      return axios.post(
        "https://630f5f5337925634188dfd29.mockapi.io/api/products",
        Tdo
      );
    },
    deleteTodo: (id) => {
      return axios.delete(
        `https://630f5f5337925634188dfd29.mockapi.io/api/products/${id}`
      );
    },
    updateTodo: (tdo) => {
      return axios({
        url: `https://630f5f5337925634188dfd29.mockapi.io/api/products/${tdo.id}`,
        method: "PUT",
        data: tdo,
      });
    },
  };
  export default ServiceAPI;
  