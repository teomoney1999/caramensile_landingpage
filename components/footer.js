function Footer() {
  const LeftFooter = {
    iconRight: "assets/logo_22_11_2022.png",
    iconLeft: "assets/QRCode.png",
    href: "https://www.facebook.com/caramenngonre/",
    info: "Cung cấp các món tráng miệng cho các nhà hàng"
  };
  const RightFooter = [
    { field: "Email", value: "teomoney1999@gmail.com" },
    { field: "Số điện thoại", value: "039 452 1885" },
    {
      field: "Địa chỉ",
      value: "Số 5, ngách 381/64, Nguyễn Khang, Yên Hoà, Cầu Giấy, Hà Nội"
    }
  ];
  return `<section class="footer container-fluid margin bottom-border">
  <div class="row">
    <div class="col footer__content">
      <a href=${LeftFooter.href}>
        <img class="footer__content__icon" src=${LeftFooter.iconLeft} />
      </a>
    </div>
    <div class="col footer__icon">
      <a href="/">
        <img class="footer__contact__icon" src=${LeftFooter.iconRight} />
      </a>
    </div>
    <div class="col footer__contact">
      <table>
        <tbody>
          ${RightFooter.map(
            (info) => `<tr>
            <td>${info.field}</td>
            <td>${info.value}</td>
          </tr>`
          )}
        </tbody>
      </table>
    </div>
  </div>
</section>`;
}

export default Footer;
