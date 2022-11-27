import Item from "../components/menuItem.js";
import { filterCommas } from "../helpers/parse-helpers.js";

const MenuList = [
  {
    name: "Caramen Truyền Thống",
    price: 4400,
    ingredients: "Trứng tươi, Sữa đặc, Đường",
    isOutOfStock: false,
    doesNeedPreOrder: false
  },
  {
    name: "Caramen Hàng Than",
    price: 6000,
    ingredients: "Trứng tươi, Sữa Tươi, Kem Béo, Đường",
    isOutOfStock: false,
    doesNeedPreOrder: false
  },
  {
    name: "Caramen Matcha",
    price: 5400,
    ingredients: "Trứng tươi, Sữa đặc, Đường, Bột Matcha",
    isOutOfStock: false,
    doesNeedPreOrder: true
  },
  {
    name: "Panna Cotta",
    price: 6000,
    ingredients: "Heavy Cream, Sữa tươi, Mứt hoa quả",
    isOutOfStock: false,
    doesNeedPreOrder: true
  },
  {
    name: "Sữa chua",
    price: 4400,
    ingredients: "Sữa tươi, Men tươi, Đường",
    isOutOfStock: true,
    doesNeedPreOrder: true
  }
];

const MenuContents = {
  title: "Các món tráng miệng",
  description:
    "Tráng miệng như là dấu chấm vậy.\n Chỉ là chi tiết nhỏ nhưng nếu thiếu thì không thể trọn vẹn."
};

function Menu() {
  const half = Math.ceil(MenuList.length / 2);

  return `<section class="menu container margin"> 
    <div class="row menu__box">
      <h1 class="menu__box__title">${MenuContents.title}</h1>
      <p class="menu__box__description">${MenuContents.description}</p>
    </div>
    <div class="menu__row row">
      <div class="menu__col col-6">
        ${filterCommas(MenuList.slice(0, half), Item)}
      </div>
      <div class="menu__col col-6">
        ${filterCommas(MenuList.slice(half), Item)}
      </div>
    </div>
</section>`;
}

export default Menu;
