
const foodData = [
  // Vegetables
  {
    category: "Vegetables",
    name: "Namibian Cabbage",
    price: 19.9,
    image: "https://example.com/images/cabbage.jpg",
  },
  {
    category: "Vegetables",
    name: "Namibian Gem Squash",
    price: 12.99,
    image: "https://example.com/images/gem_squash.jpg",
  },
  {
    category: "Vegetables",
    name: "Namibian Carrot Thriftpack",
    price: 15.99,
    image: "https://example.com/images/carrots.jpg",
  },
  {
    category: "Vegetables",
    name: "Namibian Beetroot",
    price: 15.99,
    image: "https://example.com/images/beetroot.jpg",
  },
  {
    category: "Vegetables",
    name: "Namibian Spinach Pillow Packs",
    price: 12.99,
    image: "https://example.com/images/spinach.jpg",
  },
  {
    category: "Vegetables",
    name: "Namibian Asparagus Prepacks",
    price: 25.99,
    image: "https://example.com/images/asparagus.jpg",
  },
  {
    category: "Vegetables",
    name: "Namibian Potato Pocket 4kg",
    price: 59.99,
    image: "https://example.com/images/potatoes.jpg",
  },
  {
    category: "Vegetables",
    name: "Namibian Tomatoes",
    price: 16.99,
    image: "https://example.com/images/tomatoes.jpg",
  },
  {
    category: "Vegetables",
    name: "Namibian Broccoli Prepacks",
    price: 24.99,
    image: "https://example.com/images/broccoli.jpg",
  },
  {
    category: "Vegetables",
    name: "Namibian Lettuce Prepacks",
    price: 14.99,
    image: "https://example.com/images/lettuce.jpg",
  },
  {
    category: "Vegetables",
    name: "Namibian English Cucumber",
    price: 12.99,
    image: "https://example.com/images/cucumber.jpg",
  },
  {
    category: "Vegetables",
    name: "Green Beans Thriftpack",
    price: 19.99,
    image: "https://example.com/images/green_beans.jpg",
  },

  // Fruits
  {
    category: "Fruits",
    name: "Namibian Grapefruit Carry Packet",
    price: 39.99,
    image: "https://placehold.co/400",
  },
  {
    category: "Fruits",
    name: "Namibian Blueberries",
    price: 19.99,
    image: "https://placehold.co/400",
  },
  {
    category: "Fruits",
    name: "Namibian Oranges",
    price: 39.99,
    image: "https://placehold.co/400",
  },
  {
    category: "Fruits",
    name: "Namibian Watermelon",
    price: 69.99,
    image: "https://placehold.co/400",
  },
  {
    category: "Fruits",
    name: "Spanspek or Winter Melons",
    price: 34.99,
    image: "https://placehold.co/400",
  },
  {
    category: "Fruits",
    name: "Bananas",
    price: 24.99,
    image: "https://example.com/images/bananas.jpg",
  },
  {
    category: "Fruits",
    name: "Pawpaws",
    price: 29.99,
    image: "https://example.com/images/pawpaw.jpg",
  },

  // Meat
  {
    category: "Meat",
    name: "Namibian Export Quality Beef Fillets",
    price: 309.99,
    image: "https://example.com/images/beef_fillets.jpg",
  },
  {
    category: "Meat",
    name: "Namibian Oxtail",
    price: 149.99,
    image: "https://example.com/images/oxtail.jpg",
  },
  {
    category: "Meat",
    name: "Namibian Bulk Beef Club Steak",
    price: 129.99,
    image: "https://example.com/images/beef_steak.jpg",
  },
  {
    category: "Meat",
    name: "Namibian Kameelhout Boerwors",
    price: 104.99,
    image: "https://example.com/images/boerwors.jpg",
  },
  {
    category: "Meat",
    name: "Namibian Export Quality Beef Rump Hearts",
    price: 99.99,
    image: "https://example.com/images/beef_rump.jpg",
  },
  {
    category: "Meat",
    name: "Namibian Ox Tongue",
    price: 89.99,
    image: "https://example.com/images/ox_tongue.jpg",
  },
  {
    category: "Meat",
    name: "Namibian Ground Beef Mince",
    price: 89.99,
    image: "https://example.com/images/beef_mince.jpg",
  },
  {
    category: "Meat",
    name: "Namibian Beef Goulash or Stroganoff",
    price: 119.99,
    image: "https://example.com/images/goulash.jpg",
  },
  {
    category: "Meat",
    name: "Namibian Bulk Beef Rump Steak",
    price: 139.99,
    image: "https://example.com/images/rump_steak.jpg",
  },
  {
    category: "Meat",
    name: "Namibian Bulk Lamb Packs",
    price: 119.99,
    image: "https://example.com/images/lamb_packs.jpg",
  },
  {
    category: "Meat",
    name: "Namibian Lamb Sosaties Assorted",
    price: 129.99,
    image: "https://example.com/images/lamb_sosaties.jpg",
  },
  {
    category: "Meat",
    name: "Namibian Whole Frozen Chickens",
    price: 54.99,
    image: "https://example.com/images/frozen_chickens.jpg",
  },
  {
    category: "Meat",
    name: "Namibian Chicken Flatties Assorted",
    price: 89.99,
    image: "https://example.com/images/chicken_flatties.jpg",
  },
  {
    category: "Meat",
    name: "Namibian Pork Goulash",
    price: 99.99,
    image: "https://example.com/images/pork_goulash.jpg",
  },
  {
    category: "Meat",
    name: "Namibian Bulk Pork Packs",
    price: 89.99,
    image: "https://example.com/images/pork_packs.jpg",
  },
  {
    category: "Meat",
    name: "Namibian Pork Mince",
    price: 89.99,
    image: "https://example.com/images/pork_mince.jpg",
  },
  {
    category: "Meat",
    name: "Namibian Pork Texan Steak",
    price: 94.99,
    image: "https://example.com/images/texan_steak.jpg",
  },

  // Seafood
  {
    category: "Seafood",
    name: "Prawns",
    price: 189.99,
    image: "https://example.com/images/prawns.jpg",
  },
  {
    category: "Seafood",
    name: "Braai Snoek",
    price: 89.99,
    image: "https://example.com/images/snoek.jpg",
  },
  {
    category: "Seafood",
    name: "Crab Sticks",
    price: 39.99,
    image: "https://example.com/images/crab_sticks.jpg",
  },

  // Pantry
  {
    category: "Pantry",
    name: "White Sugar",
    price: 36.99,
    image: "https://example.com/images/sugar.jpg",
  },
  {
    category: "Pantry",
    name: "Braai Spice",
    price: 39.99,
    image: "https://example.com/images/braai_spice.jpg",
  },
  {
    category: "Pantry",
    name: "Crushed Garlic",
    price: 27.9,
    image: "https://example.com/images/garlic.jpg",
  },
  {
    category: "Pantry",
    name: "Eggs",
    price: 49.99,
    image: "https://example.com/images/eggs.jpg",
  },
  {
    category: "Pantry",
    name: "Peanuts, Roasted 400g",
    price: 36.99,
    image: "https://example.com/images/peanuts.jpg",
  },
  {
    category: "Pantry",
    name: "B-well Blended Canola and Extra Virgin Olive Oil",
    price: 59.99,
    image: "https://example.com/images/canola_olive_oil.jpg",
  },
];

export default foodData;