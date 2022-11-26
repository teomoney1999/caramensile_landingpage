import Nav from "../components/nav.js";
import Intro from "../components/intro.js";
import Menu from "../components/menu.js";
import Footer from "../components/footer.js";

function LandingPage() {
  return `
    ${Nav()} 
    ${Intro()} 
    ${Menu()} 
    ${Footer()}
  `;
}

export default LandingPage;
