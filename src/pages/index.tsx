import { Head } from '@context/Shared/Seo/components/Head';
import React, { useState } from 'react';

const Home = () => {
  const [productList, setProductList] = useState([]);

  return (
    <div>
      <Head
        title="Mercado Libre Colombia - Envíos Gratis en el día"
        description="Compre productos con Envío Gratis en el día en Mercado Libre Colombia. Encuentre miles de marcas y productos a precios increíbles."
        url="https://www.mercadolibre.com.co/"
      />
      <p>Home de Prueba</p>
    </div>
  );
};

export default Home;
