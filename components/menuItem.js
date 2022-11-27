function MenuItem({
  name,
  price,
  ingredients,
  onClick,
  isOutOfStock,
  doesNeedPreOrder
}) {
  const outOfStock = "Hết hàng";
  const preOrder = "Cần đặt trước";

  return `<div class="menu-item col" >
   ${
     isOutOfStock
       ? `<div class="menu-item__out-of-stock">${outOfStock}</div>`
       : ``
   }
   ${
     doesNeedPreOrder
       ? `<div class="menu-item__pre-order badge text-bg-warning rounded-pill" data-bs-custom-class="custom-tooltip"
            data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">
              ${preOrder}
          </div>`
       : ``
   }
   <div class="menu-item__info" onClick=${onClick}>
    <h1 class="menu-item__info__name">${name}</h1>
    <h2 class="menu-item__info__price">${price.toLocaleString("vn-VN", {
      style: "currency",
      currency: "VND"
    })}
    </h2>
   </div>
   <div class="menu-item__ingredients">${ingredients}</div>
</div>`;
}

export default MenuItem;
