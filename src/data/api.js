export const getData = async () => {
  console.log("Start Fetching");

  try {
    let data = await fetch("https://fakestoreapi.com/products");
    let products = await data.json();
    console.log(products);
    return products;
  } catch (e) {
    console.log(" url is not working");
  }
};
