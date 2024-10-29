
const foodData = [
  // Vegetables
  {
    category: "Vegetables",
    name: "Namibian Cabbage",
    price: 19.9,
    image:
      "https://images.pexels.com/photos/134877/pexels-photo-134877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    category: "Vegetables",
    name: "Namibian Carrot Thriftpack",
    price: 15.99,
    image:
      "https://images.pexels.com/photos/54082/carrots-vegetables-food-orange-54082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    category: "Vegetables",
    name: "Namibian Potato Pocket 4kg",
    price: 59.99,
    image:
      "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    category: "Vegetables",
    name: "Namibian Tomatoes",
    price: 16.99,
    image:
      "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    category: "Vegetables",
    name: "Namibian Broccoli Prepacks",
    price: 24.99,
    image:
      "https://images.pexels.com/photos/47347/broccoli-vegetable-food-healthy-47347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  // Fruits

  {
    category: "Fruits",
    name: "Namibian Blueberries",
    price: 19.99,
    image:
      "https://images.pexels.com/photos/2539170/pexels-photo-2539170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    category: "Fruits",
    name: "Namibian Oranges",
    price: 39.99,
    image:
      "https://images.pexels.com/photos/2247142/pexels-photo-2247142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    category: "Fruits",
    name: "Namibian Watermelon",
    price: 69.99,
    image:
      "https://images.pexels.com/photos/59830/melons-water-melons-fruit-green-59830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    category: "Fruits",
    name: "Apples",
    price: 34.99,
    image:
      "https://images.pexels.com/photos/2487443/pexels-photo-2487443.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    category: "Fruits",
    name: "Bananas",
    price: 24.99,
    image:
      "https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  // Meat
  {
    category: "Meat",
    name: "Namibian Bulk Beef Club Steak",
    price: 129.99,
    image:
      "https://images.pexels.com/photos/618773/pexels-photo-618773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    category: "Meat",
    name: "Namibian Bulk Lamb Packs",
    price: 119.99,
    image:
      "https://images.pexels.com/photos/8352007/pexels-photo-8352007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    category: "Meat",
    name: "Namibian Lamb Sosaties Assorted",
    price: 129.99,
    image:
      "https://images.pexels.com/photos/28902905/pexels-photo-28902905/free-photo-of-delicious-grilled-meat-skewers-on-dark-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    category: "Meat",
    name: "Namibian Chicken Flatties Assorted",
    price: 89.99,
    image:
      "https://images.pexels.com/photos/5769377/pexels-photo-5769377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    category: "Meat",
    name: "Namibian Pork Mince",
    price: 89.99,
    image: "https://images.pexels.com/photos/128401/pexels-photo-128401.jpeg",
  },

  // Seafood
  {
    category: "Seafood",
    name: "Prawns",
    price: 189.99,
    image:
      "https://images.pexels.com/photos/566344/pexels-photo-566344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    category: "Seafood",
    name: "Braai Snoek",
    price: 89.99,
    image:
      "https://images.pexels.com/photos/29060104/pexels-photo-29060104/free-photo-of-close-up-of-fresh-mackerel-on-ice-for-sale.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    category: "Seafood",
    name: "Crab Sticks",
    price: 39.99,
    image:
      "https://images.pexels.com/photos/3640451/pexels-photo-3640451.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  // Pantry
  {
    category: "Pantry",
    name: "White Sugar",
    price: 36.99,
    image:
      "https://plus.unsplash.com/premium_photo-1671728604855-55f81a70d7e5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Pantry",
    name: "Braai Spice",
    price: 39.99,
    image:
      "https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    category: "Pantry",
    name: "Eggs",
    price: 49.99,
    image:
      "https://images.pexels.com/photos/3971483/pexels-photo-3971483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    category: "Pantry",
    name: "Peanuts, Roasted 400g",
    price: 36.99,
    image:
      "https://images.pexels.com/photos/4202964/pexels-photo-4202964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    category: "Pantry",
    name: "B-well Blended Canola and Extra Virgin Olive Oil",
    price: 59.99,
    image:
      "https://images.pexels.com/photos/10046938/pexels-photo-10046938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default foodData;