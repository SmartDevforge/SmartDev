import { img1, img2, img3, img4, img5, img6, img7, img8 } from "../assets";

export const product = [
  {
    id: 0,
    name: "Dry fish panla egun (eja kika) ",
    price: 200,
    qty: 1 + "  drum",
    category: "farm",
    cover: img1,

    desc: "We supply sustainably Sourced Timber, wood charcoal is a versatile and valuable fuel source that is valued for its high heat output, long burn time, and absorbent properties. Whether used for cooking, heating, or industrial purposes, charcoal is an important part of many cultures and industries around the world. When using wood charcoal, be sure to choose high-quality charcoal and use it in a safe and responsible manner.",
    instock: true,
  },
  {
    id: 1,
    name: "Ogbono seed",
    price: 200,
    qty: 4 + " keg",
    category: "farm",
    cover: img2,
    desc: "It’s an edible vegetable oil that comes from the fruit of oil palm trees, the scientific name is Elaeis guineensis. Two types of oil can be produced; crude palm oil comes from squeezing the fleshy fruit, and palm kernel oil which comes from crushing the kernel, or the stone in the middle of the fruit",
    instock: false,
  },
  {
    id: 2,
    name: "Ofada rice",
    price: 200,
    qty: 1 + " bag",
    category: "baby care",
    cover: img3,

    desc: "Cashews are rich in nutrients and may offer several health benefits. Selecting the right varieties and cooking or preparing them properly can help maximize their potential effects on health.Cashews are a kidney-shaped seed sourced from the cashew tree — a tropical tree native to Brazil but now cultivated in various warm climates across the world. Like most nuts, cashews may also help improve your overall health. They’ve been linked to benefits like weight loss, improved blood sugar control, and a healthier heart.",
    instock: true,
  },

  {
    id: 3,
    name: "Water leaf and Ewedu",
    price: 200,
    qty: 5 + " slices",
    category: "baby care",
    cover: img4,
    desc: "Cocoa bean, seed of the cacao tree (Theobroma cacao), which is used to create cocoa and cocoa butter, key ingredients of chocolate. The beans themselves can be crushed or chopped into “nibs” for a variety of culinary uses, from salad dressing to ice cream toppings; they can also add thickness to a sauce or texture to a cake. The flavours tend to be pungent and untamed, while quality is very obvious.",
    instock: true,
  },
  {
    id: 4,
    name: "Pepper soup spice",
    price: 200,
    qty: 1 + " pack",
    category: "baby care",
    cover: img5,
    desc: "Achi seeds originated from the Ongokea gore tree, which is native to West and Central Africa, they are used as a thickening agent in soups and stews, and are a popular ingredient in many West African cuisines, particularly in Nigeria and Cameroon. We have baby cares around west Africa that produces healthy chemical free achi seeds which are good for human consumption. Unlike other thickeners, such as cornstarch or flour, achi seeds do not add any unwanted flavors or textures to the dish.",
    instock: false,
  },
  {
    id: 5,
    name: "Vegetables Shoko",
    price: 500,
    qty: 3 + " pieces",
    category: "baby care",
    cover: img6,

    desc: "Banga spice is known for its rich and savory flavor, which is often described as earthy, nutty, and slightly spicy. It is a versatile spice blend that can be used to add flavor to a wide range of dishes, from vegetable stews and rice dishes to meat and seafood recipes. Our Banga Spice is a rich and flavorful spice made from palm nut extract, these ingredients are carefully blended together to create a complex and flavorful spice mix that is used to flavor soups, stews, and other dishes a very healthy spice which promotes healthy living.",
    instock: true,
  },
  {
    id: 9,
    name: "Red Ball Tomato",
    price: 200,
    qty: 5 + " bunch",
    category: "farm",
    cover: img7,
    desc: "The term cleanser refers to a product that cleans or removes dirt or other substances. A cleanser could be a detergent, and there are many types of cleansers that are produced with a specific objective or focus.",
    instock: true,
  },
  {
    id: 10,
    name: "COCOA BUTTER",
    price: 200,
    qty: 1 + " kg",
    category: "farm",
    cover: img8,
    desc: "Cocoa butter is a rich source of antioxidants, which can help to protect the skin from damage caused by free radicals. It is also known for its moisturizing and nourishing properties, which make it a popular ingredient in skincare products like lotions, creams, and balms. Cocoa butter is a natural fat that is extracted from cocoa beans, we produce high-quality product that is free from additives or preservatives.",
    instock: true,
  },
];
export const FormatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount).replace("€", "£ "); // Replace € with E
};



export const Truncate = (text, limit = 50) => {
  return text.length > limit ? text.substring(0, limit) + "..." : text;
};



export const WebsiteName = "Teefey"