const img1 = require("../images/policys/policy(1).png").default;
const img2 = require("../images/policys/policy(2).png").default;
const img3 = require("../images/policys/policy(3).png").default;
const img4 = require("../images/policys/policy(4).png").default;

const policy = [
  {
    name: "Miễn phí giao hàng",
    description: "Miễn phí ship với đơn hàng > 498K",
    image: img1,
  },
  {
    name: "Thanh toán COD",
    description: "Thanh toán khi nhận hàng (COD)",
    image: img2,
  },
  {
    name: "Khách hàng VIP",
    description: "Ưu đãi dành cho khách hàng VIP",
    image: img3,
  },

  {
    name: "Hỗ trợ bảo hành",
    description: "Đổi, sửa đồ tại tất cả store",
    image: img4,
  },
];

export default policy;
