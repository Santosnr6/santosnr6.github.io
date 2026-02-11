export default function getMenuItemComponent(item) {
    return `
        <li class="menu__item">
            <img
                src="../assets/plus.svg"
                alt="Add to cart icon"
                class="menu__add-btn"
                data-id="${item.id}"
            />
            <div class="menu__item-content">
                <h2 class="menu__item-name">${item.title}</h2>
                <p class="menu__item-price">${item.price} kr</p>
                <p class="menu__item-description">
                    ${item.desc}
                </p>
            </div>
        </li>
    `;
}