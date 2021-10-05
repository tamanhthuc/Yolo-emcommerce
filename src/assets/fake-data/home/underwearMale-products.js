const product_01_image_01 =
  require("../../images/home/product-males/product-underwears/product-01.jpg").default;
const product_02_image_01 =
  require("../../images/home/product-males/product-underwears/product-02.jpg").default;

const product_03_image_01 =
  require("../../images/home/product-males/product-underwears/product-03.jpg").default;

const product_04_image_01 =
  require("../../images/home/product-males/product-underwears/product-04.jpg").default;

const product_05_image_01 =
  require("../../images/home/product-males/product-underwears/product-05.jpg").default;

const product_06_image_01 =
  require("../../images/home/product-males/product-underwears/product-06.jpg").default;

const underwearMaleProducts = [
  {
    title: "áo pholo trẻ em coolmax",
    price: "149000",
    image01: product_01_image_01,
    catagorySlug: "ao-thun",
    color: ["white", "red", "orange"],
    slug: "áo pholo trẻ em coolmax",
    size: ["s", "m", "l", "xl"],
    description:
      "Áo thun polo nam coolmax với đặc tính sợi vải mát lạnh giúp bạn có thể thoải mái tham gia các hoạt động thể thao và mặc mát mẻ trong cả ngày. Sản phẩm được cho ra mắt đúng vào thời điểm xuân hè khi thời tiết đang ấm dần hứa hẹn sẽ là sản phẩm vô cùng hấp dẫn và được nhiều người đón chờ.",
    sale: "-50%",
  },
  {
    title: "áo pholo trẻ em coolmax",
    price: "149000",
    image01: product_02_image_01,
    catagorySlug: "ao-thun",
    color: ["white", "red", "orange"],
    slug: "áo pholo trẻ em coolmax",
    size: ["s", "m", "l", "xl"],
    description:
      "Áo thun polo nam coolmax với đặc tính sợi vải mát lạnh giúp bạn có thể thoải mái tham gia các hoạt động thể thao và mặc mát mẻ trong cả ngày. Sản phẩm được cho ra mắt đúng vào thời điểm xuân hè khi thời tiết đang ấm dần hứa hẹn sẽ là sản phẩm vô cùng hấp dẫn và được nhiều người đón chờ.",
    sale: "-50%",
  },
  {
    title: "áo pholo trẻ em coolmax",
    price: "149000",
    image01: product_03_image_01,
    catagorySlug: "ao-thun",
    color: ["white", "red", "orange"],
    slug: "áo pholo trẻ em coolmax",
    size: ["s", "m", "l", "xl"],
    description:
      "Áo thun polo nam coolmax với đặc tính sợi vải mát lạnh giúp bạn có thể thoải mái tham gia các hoạt động thể thao và mặc mát mẻ trong cả ngày. Sản phẩm được cho ra mắt đúng vào thời điểm xuân hè khi thời tiết đang ấm dần hứa hẹn sẽ là sản phẩm vô cùng hấp dẫn và được nhiều người đón chờ.",
    sale: "-50%",
  },
  {
    title: "áo pholo trẻ em coolmax",
    price: "149000",
    image01: product_04_image_01,
    catagorySlug: "ao-thun",
    color: ["white", "red", "orange"],
    slug: "áo pholo trẻ em coolmax",
    size: ["s", "m", "l", "xl"],
    description:
      "Áo thun polo nam coolmax với đặc tính sợi vải mát lạnh giúp bạn có thể thoải mái tham gia các hoạt động thể thao và mặc mát mẻ trong cả ngày. Sản phẩm được cho ra mắt đúng vào thời điểm xuân hè khi thời tiết đang ấm dần hứa hẹn sẽ là sản phẩm vô cùng hấp dẫn và được nhiều người đón chờ.",
    sale: "-50%",
  },
  {
    title: "áo pholo trẻ em coolmax",
    price: "149000",
    image01: product_05_image_01,
    catagorySlug: "ao-thun",
    color: ["white", "red", "orange"],
    slug: "áo pholo trẻ em coolmax",
    size: ["s", "m", "l", "xl"],
    description:
      "Áo thun polo nam coolmax với đặc tính sợi vải mát lạnh giúp bạn có thể thoải mái tham gia các hoạt động thể thao và mặc mát mẻ trong cả ngày. Sản phẩm được cho ra mắt đúng vào thời điểm xuân hè khi thời tiết đang ấm dần hứa hẹn sẽ là sản phẩm vô cùng hấp dẫn và được nhiều người đón chờ.",
    sale: "-50%",
  },
  {
    title: "áo pholo trẻ em coolmax",
    price: "149000",
    image01: product_06_image_01,
    catagorySlug: "ao-thun",
    color: ["white", "red", "orange"],
    slug: "áo pholo trẻ em coolmax",
    size: ["s", "m", "l", "xl"],
    description:
      "Áo thun polo nam coolmax với đặc tính sợi vải mát lạnh giúp bạn có thể thoải mái tham gia các hoạt động thể thao và mặc mát mẻ trong cả ngày. Sản phẩm được cho ra mắt đúng vào thời điểm xuân hè khi thời tiết đang ấm dần hứa hẹn sẽ là sản phẩm vô cùng hấp dẫn và được nhiều người đón chờ.",
    sale: "-50%",
  },
];

const getAllProducts = () => underwearMaleProducts;

const getProducts = (count) => {
  const max = underwearMaleProducts.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);

  return underwearMaleProducts.slice(start, start + count);
};

const getProductBySlug = (slug) =>
  underwearMaleProducts.find((e) => e.slug === slug);

const underwearProductData = {
  getAllProducts,
  getProducts,
  getProductBySlug,
};

export default underwearProductData;
