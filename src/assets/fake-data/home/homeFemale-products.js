const product_01_image_01 =
  require("../../images/home/product-males/product-homes/product-01 (1).jpg").default;
const product_01_image_02 =
  require("../../images/home/product-males/product-homes/product-01 (2).jpg").default;
const product_02_image_01 =
  require("../../images/home/product-males/product-homes/product-02 (1).jpg").default;
const product_02_image_02 =
  require("../../images/home/product-males/product-homes/product-02 (2).jpg").default;

const product_03_image_01 =
  require("../../images/home/product-males/product-homes/product-03 (1).jpg").default;

const product_04_image_01 =
  require("../../images/home/product-males/product-homes/product-04 (1).jpg").default;

const product_04_image_02 =
  require("../../images/home/product-males/product-homes/product-04 (2).jpg").default;

const homeMaleProducts = [
  {
    title: "Bộ thể thao nam Melange",
    price: "149000",
    image01: product_01_image_01,
    image02: product_01_image_02,
    catagorySlug: "do-mac-nha",
    color: ["white", "red", "orange"],
    slug: "bo-do-the-thao-melange",
    size: ["s", "m", "l", "xl"],
    description:
      "Áo thun polo nam coolmax với đặc tính sợi vải mát lạnh giúp bạn có thể thoải mái tham gia các hoạt động thể thao và mặc mát mẻ trong cả ngày. Sản phẩm được cho ra mắt đúng vào thời điểm xuân hè khi thời tiết đang ấm dần hứa hẹn sẽ là sản phẩm vô cùng hấp dẫn và được nhiều người đón chờ.",
    sale: "-50%",
  },
  {
    title: "Đồ bộ thể thao in Phản Quang Gấu Áo",
    price: "149000",
    image01: product_02_image_01,
    image02: product_02_image_02,
    catagorySlug: "do-mac-nha",
    color: ["white", "red", "orange"],
    slug: "do-bo-theo-thao-in-phan-quan-gao-ao",
    size: ["s", "m", "l", "xl"],
    description:
      "Áo thun polo nam coolmax với đặc tính sợi vải mát lạnh giúp bạn có thể thoải mái tham gia các hoạt động thể thao và mặc mát mẻ trong cả ngày. Sản phẩm được cho ra mắt đúng vào thời điểm xuân hè khi thời tiết đang ấm dần hứa hẹn sẽ là sản phẩm vô cùng hấp dẫn và được nhiều người đón chờ.",
    sale: "-50%",
  },
  {
    title: "Đồ bộ nỉ nam",
    price: "149000",
    image01: product_03_image_01,

    catagorySlug: "do-mac-nha",
    color: ["white", "red", "orange"],
    slug: "bo-do-the-thao-nam-ni",
    size: ["s", "m", "l", "xl"],
    description:
      "Áo thun polo nam coolmax với đặc tính sợi vải mát lạnh giúp bạn có thể thoải mái tham gia các hoạt động thể thao và mặc mát mẻ trong cả ngày. Sản phẩm được cho ra mắt đúng vào thời điểm xuân hè khi thời tiết đang ấm dần hứa hẹn sẽ là sản phẩm vô cùng hấp dẫn và được nhiều người đón chờ.",
    sale: "-50%",
  },
  {
    title: "Đồ bộ nam in hình Family",
    price: "149000",
    image01: product_04_image_01,
    image02: product_04_image_02,
    catagorySlug: "do-mac-nha",
    color: ["white", "red", "orange"],
    slug: "bo-do-theo-thao-nam-in-hinh-family",
    size: ["s", "m", "l", "xl"],
    description:
      "Áo thun polo nam coolmax với đặc tính sợi vải mát lạnh giúp bạn có thể thoải mái tham gia các hoạt động thể thao và mặc mát mẻ trong cả ngày. Sản phẩm được cho ra mắt đúng vào thời điểm xuân hè khi thời tiết đang ấm dần hứa hẹn sẽ là sản phẩm vô cùng hấp dẫn và được nhiều người đón chờ.",
    sale: "-50%",
  },
];

const getAllProducts = () => homeMaleProducts;

const getProducts = (count) => {
  const max = homeMaleProducts.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);

  return homeMaleProducts.slice(start, start + count);
};

const getProductBySlug = (slug) =>
  homeMaleProducts.find((e) => e.slug === slug);

const homeProductData = {
  getAllProducts,
  getProducts,
  getProductBySlug,
};

export default homeProductData;
