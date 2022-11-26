function MenuItem({ name, price, ingredients, onClick }) {
  return `<div class="menu-item col" >
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
