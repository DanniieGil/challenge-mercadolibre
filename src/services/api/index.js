const API = process.env.API;
const SITE = process.env.SITE;

const endPoints = {
  products: {
    getProductDetail: (idProduct) => `${API}/items/${idProduct}`,
    getProductDescription: (idProduct) => `${API}/items/${idProduct}/description`,
    getAllProducts: (queryProduct) => `${API}/sites/${SITE}/search?q=${queryProduct}`,
  },
};

export default endPoints;
