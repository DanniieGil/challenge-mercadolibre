export const getItems = (results) => {
  return results.slice(0, 4).map((item) => {
    const { id, title, price, currency_id, thumbnail, condition, shipping, address } = item;
    return {
      id,
      title,
      price: {
        currency: currency_id,
        amount: price,
      },
      picture: thumbnail,
      condition,
      free_shipping: shipping?.free_shipping,
      state_name: address.state_name
    };
  });
}