function Intro() {
  const backgroundImg = {
    src: "./assets/kevin-valladares-custard2.jpeg",
    alt: ""
  };
  const dialog = {
    title: "Chào mừng đến với",
    name: "CARAMEN SỈ LẺ"
  };
    return `<section class="intro">
      <img
        class="intro__img"
        src=${backgroundImg.src}
        alt=${backgroundImg.alt}
      />
      <div class="intro__dialog">
        <h3 class="intro__dialog__title">${dialog.title}</h3>
        <h1 class="intro__dialog__name">${dialog.name}</h1>
      </div>
    </section>`;
//   return (
//     <section class="intro">
//       <img class="intro__img" src={backgroundImg.src} alt={backgroundImg.alt} />
//       <div class="intro__dialog">
//         <h3 class="intro__dialog__title">${dialog.title}</h3>
//         <h1 class="intro__dialog__name">${dialog.name}</h1>
//       </div>
//     </section>
//   );
}

export default Intro;
