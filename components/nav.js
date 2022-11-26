function Nav() {
  const logo = {
    img: "assets/logo_22_11_2022.png",
    alt: "Caramen Sỉ Lẻ"
  };
  const icons = [
    {
      name: "Phone",
      href: "/",
      img: `<i class="nav__fa fa-solid fa-phone"></i>`
    },
    {
      name: "Facebook",
      href: "/",
      img: `<i class="nav__fa icon fa-brands fa-facebook-f"></i>`
    },
    {
      name: "Gmail",
      href: "/",
      img: `<i class="nav__fa fa-regular fa-envelope"></i>`
    }
  ];

  window.addEventListener("scroll", function () {
    const headerElClassList =
      document.getElementsByClassName("header")[0].classList;
    const iconsEl = document.getElementsByClassName("nav__fa");

    const headerScrollClass = "header__scroll";
    const blackColorClass = "color-black";

    let lastKnownScrollPosition = this.scrollY;

    // lastKnownScrollPosition > 0 => add class header__scroll
    if (!lastKnownScrollPosition) {
      console.log("Not Scroll ==========");
      headerElClassList.remove(headerScrollClass);
      /**
       * getElementsByClassName => HTMLCollection
       * To loop through that 
       *  Array.from(...).map()
       */
      Array.from(iconsEl).map((iconEl) =>
        iconEl.classList.remove(blackColorClass)
      );
      return;
    }
    // lastKnownScrollPosition === 0 => delete class header__scroll
    if (!headerElClassList.contains("header__scroll")) {
      console.log("Scroll ==========");
      headerElClassList.add(headerScrollClass);
      Array.from(iconsEl).map((iconEl) =>
        iconEl.classList.add(blackColorClass)
      );
      return;
    }
  });

  return `<nav class="header nav navbar navbar-expand-lg navbar-expand-sm navbar-expand-xs trans-0-4">
    <div class="margin container">
      <a href="/" class="navbar-brand">
        <img class="nav__icon" src=${logo.img} alt=${logo.alt} />
      </a>
      <!-- <button class="navbar-toggler" type="button"></button> -->
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="nav__contact navbar-nav">
          ${icons.map(
            (icon) => `<li class="nav-item">
            <a class="nav-link" href=${icon.href}
              >${icon.img}</a>
          </li>`
          )}
        </ul>
      </div>
    </div>
  </nav>
    `;
}

export default Nav;
