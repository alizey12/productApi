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

export async function Catagories(catagory) {
const findCatagory = await getData();
const MainCatagory =findCatagory.find((item) => {
  item.catagory = catagory
  
})
return MainCatagory()

}

export async function findCart(id) {
  const findCarts = await getData();
  const mainCart =findCarts.find((item) => {
    item.id = id
    
  })
  return mainCart()
   
}