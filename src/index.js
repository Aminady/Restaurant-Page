import "./style.css";
import navBar from "./navBar";
import home from "./homePage";
import menu from "./menuPage";
import contact from "./contactPage";

navBar();

export let contentBis = document.createElement("div");
document.body.appendChild(contentBis);
contentBis.classList = "content-bis";
home();

const btns = document.querySelectorAll(".btn");

function navigation() {
  btns.forEach((element) => {
    element.addEventListener("click", (e) => {
      if (e.target.id === "contact-btn") {
        contentBis.innerHTML = "";
        // contentBis.innerHTML = abc;
        contentBis.innerHTML = contact();
      }
      if (e.target.id === "home-btn") {
        contentBis.innerHTML = "";
        // contentBis.innerHTML = def;
        contentBis.innerHTML = home();
      }
      if (e.target.id === "menu-btn") {
        contentBis.innerHTML = "";
        // contentBis.innerHTML = ghi;
        contentBis.innerHTML = menu();
      }
      console.log(e);
    });
  });
}

navigation();
