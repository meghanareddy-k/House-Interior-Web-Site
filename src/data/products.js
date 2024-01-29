import { CATEGORIES } from "../utils/constants";

const livingRoom = [
  {
    name: "Vintage Wall Paper",
    desc: "Embellish your wall with this appealing Vintage wall paper. The natural and black pattern is divided into blocks and intricately decorated with cotton stitching that softens and adds texture to this tactile show piece.",
    price: 55.32,
    category: CATEGORIES.LIVING_ROOM,
    image: "./Images/livingRoom/living-room-vintage-wall-paper.jpeg"
  },
  {
    name: "Mendi Basket",
    desc: "The beautifully crafted weave of these handmade Mendi seagrass baskets make them both practical and eye-catching. Created in four sizes to allow easy tucking away in any home, they have a sturdy top with an open weave. Also work well as stylish plant pot covers.",
    price: 34,
    category: CATEGORIES.LIVING_ROOM,
    image: "./Images/livingRoom/living-room-mendi-basket.jpeg"
  },
  {
    name: "Nkuku Leather Chair",
    desc: "Occasional chairs are the perfect way to add interest to your living space. Incredibly versatile, our Amari leather chair is upholstered in an attractive tanned leather, which has a natural warmth that adds to its appeal. ",
    price: 1350,
    category: CATEGORIES.LIVING_ROOM,
    image: "./Images/livingRoom/living-room-nkuku-amari-leather-occasional-chair.jpeg"
  },
  {
    name: "Modern Wall Art",
    desc: "We love the striking and intricate design of our Modern wire wall art. This detailed pattern is skilfully sculptured by hand in a web of pretty shapes and patterns bringing unique and stylish decoration to a wall or outside space.",
    price: 92,
    category: CATEGORIES.LIVING_ROOM,
    image: "./Images/livingRoom/living-room-wall-art.webp"
  },

];

const kitchen = [
  {
    name: "Charal Storage Jar",
    desc: "The simple clear glass body and mango wood top of this Charai storage jar makes it the perfect everyday organisational accessory. Finished with a silicon seal to ensure that its contents remain fresh,",
    price: 48,
    category: CATEGORIES.KITCHEN,
    image: "./Images/Kitchen/kitchen-charal-storage-jar.jpeg"
  },
  {
    name: "Industrial Wine Rack",
    desc: "Our Industrial Wine Rack provides stylish and solid storage for wine and other bottles. The dark iron frame is finished with a solid mango wood top and makes this a striking piece of furniture as well as a practical storage solution.",
    price: "70",
    category: CATEGORIES.KITCHEN,
    image: "./Images/Kitchen/kitchen-industrial-wine-rack.jpeg"
  },
  {
    name: "Hanging Cluster Lights",
    desc: "Our Ziva cluster pendant has a stunning and unique design. The glass pendant shape is handblown in a tactile and organic shape, enhanced with a subtle green smoke shade of colour. Each pendant light features a brown fabric cord.",
    price: "62",
    category: CATEGORIES.KITCHEN,
    image: "./Images/Kitchen/kitchen-hanging-lights.webp"
  },
  {
    name: "Chopping Board",
    desc: "Chopping boards make wonderful chopping boards but they also work beautifully as serving platters for tapas, breads and other culinary delights. Each one is made from sustainable mango wood",
    price: "40",
    category: CATEGORIES.KITCHEN,
    image: "./Images/Kitchen/kitchen-chopping-board.jpeg"
  },

];

const bedRoom = [
  {
    name: "Bed Cluster Sanctuary",
    desc: "Combine natural materials such as jute, linen and mango wood with an earthy colour palette for a calming space. Add character and comfort by layering textiles, with soft rugs underfoot, linens with hand-stitched detailing and traditional Kilims with subtle pattern and texture.",
    price: "565",
    category: CATEGORIES.BEDROOM,
    image: "./Images/BedRoom/Bedroom-bed-cluster-sanctuary.jpeg"
  },
  {
    name: "Babel Table Lamp",
    desc: "Naturally elegant, and strikingly beautiful these large, wide Babel table lamps celebrate recycled glass and natural organic contours.",
    price: "100",
    category: CATEGORIES.BEDROOM,
    image: "./Images/BedRoom/bedroom-bed-lamp.webp"
  },
  {
    name: "Imoma Mirror",
    desc: "This impressive full length Imoma mirror creates an impact. The bold yet elegant iron frame holds three tall columns of glass in an eye-catching design. It's a striking mirror that will transform a room and make a key focal point.",
    price: "80",
    category: CATEGORIES.BEDROOM,
    image: "./Images/BedRoom/bedroom-imoma-mirror.webp"
  },
  {
    name: "Kesu Kilim Pouf",
    desc: "The subtle, geometric pattern on our large Kesu kilim pouf appealingly blends a mix of colour tones. The washed finish is understated and homely. Woven from a Hemp and cotton mix and filled with a recucled wool filling,",
    price: "35",
    category: CATEGORIES.BEDROOM,
    image: "./Images/BedRoom/bedroom-kesu-kilim-pouf.jpeg"
  },

];

const diningRoom = [
  {
    name: "Rahuri Drinks Set",
    desc: "The Rahuri drinks set would make the perfect gift. The set includes a cork screw, bottle opener and drinks measure",
    price: "75",
    category: CATEGORIES.DINING_ROOM,
    image: "./Images/DiningRoom/dining-room-drinks-set.webp"
  },
  {
    name: "Esa Marble Bowl",
    desc: "The simple, natural qualities of smooth white marble are on display in our Esa bowl. These light-coloured bowls bring a certain style and quality to a table",
    price: "41",
    category: CATEGORIES.DINING_ROOM,
    image: "./Images/DiningRoom/dining-room-esa-marble-bowl.jpeg"
  },
  {
    name: "Yala Hammered Jug",
    desc: "The deep indigo blue of our Yala Glassware, brings with it the essence of Mediterranean seas. Transport yourself to warmer climates with a mix of glassware, whatever the occasion.",
    price: "45",
    category: CATEGORIES.DINING_ROOM,
    image: "./Images/DiningRoom/dininig-room-hammered-jug.jpeg"
  },
  {
    name: "Yala Smoke Glass",
    desc: "Enhance any gathering with our smoke brown Yala glasses. Their muted tone combines perfectly with the soft hammered texture of the glass. Each has a small stem and generous volume, making them ideal for a range of your favourite drinks.",
    price: "68",
    category: CATEGORIES.DINING_ROOM,
    image: "./Images/DiningRoom/dining-room-yala-smoke-glass.jpeg"
  },
];

export const products = [
  ...livingRoom,
  ...kitchen,
  ...bedRoom,
  ...diningRoom,
];
