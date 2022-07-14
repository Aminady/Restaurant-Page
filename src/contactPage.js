import { contentBis } from ".";

export default function contact() {
  const contactContainer = document.createElement("div");
  contentBis.appendChild(contactContainer);
  return (contactContainer.innerHTML = `
  <div class="contact-container">
  <h1>Our Locations</h1>
  <p>467, Ouest Foire, Dakar</p>
  <p>452, Kiring, Bamako</p>
  <p>122, Xawma, Banjul</p>
  </div>
`);
}
