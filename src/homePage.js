import { contentBis } from ".";

export default function home() {
  const homeContainer = document.createElement("div");
  contentBis.appendChild(homeContainer);
  return (homeContainer.innerHTML = `
      <div class="resto-presentation">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquid dolorem ex repellendus odio quibusdam amet voluptatibus accusantium consequatur quia, quae ea incidunt sunt tenetur necessitatibus pariatur. Ipsa ad aliquam dignissimos, accusantium quibusdam blanditiis a voluptatum harum, repudiandae sunt excepturi fugit! Ratione odit deleniti et eius. Totam animi modi ab eligendi qui consequuntur, odit similique! Numquam suscipit hic in aliquid quisquam odio! Autem perspiciatis atque, nesciunt tenetur magnam cum deleniti perferendis excepturi magni aperiam consequatur sed exercitationem, minus quasi eaque ipsa ex ab deserunt, quam modi delectus debitis! Reiciendis blanditiis amet architecto magni maiores velit rem voluptas molestias itaque. Perspiciatis, itaque! Dignissimos modi sapiente vero laborum, rerum a laboriosam officia nulla voluptas necessitatibus et quibusdam quia est animi incidunt! Voluptatum ipsa, explicabo, dignissimos tempora expedita id ullam doloribus amet quas ad quis a similique libero consequatur incidunt molestiae, ea blanditiis repellat est consequuntur dolore enim. Corrupti excepturi animi cumque molestiae, vero rem voluptas doloribus necessitatibus? Ea culpa, nam cumque voluptatem pariatur optio autem recusandae impedit quod explicabo eligendi, excepturi reprehenderit. Sapiente enim quo exercitationem temporibus placeat esse voluptates perspiciatis dolor vel, quos possimus fuga non dicta ipsa autem veniam amet aut praesentium error quae cumque alias tenetur? Soluta, saepe tempore?</p>      </div>
      `);
}
