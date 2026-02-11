import getMenuItemComponent from "../components/menuItem.js";
import { addToCart, getCart, getCartSize } from "./cart.js";
import { getMenuItem, getMenuItems } from "../data/menu.js";

export function setupBurger() {
    document.querySelector('#burgerBtn').addEventListener('click', (event) => {
        event.currentTarget.classList.toggle('open');
    })
}

export async function setupCoffeeMenu() {
    const menu = getMenuItems();
    const menuRef = document.querySelector('#coffeeMenu');
    menuRef.innerHTML = '';
    for(let item of menu) {
        menuRef.innerHTML += getMenuItemComponent(item);
    }

    setupAddToCartBtns();
    updateCartIndicator();
}

function setupAddToCartBtns() {
    const btnRefs = document.querySelectorAll('.menu__add-btn');
    for(let btn of btnRefs) {
        btn.addEventListener('click', (event) => {
            const menuItem = getMenuItem(event.target.dataset.id);
            addToCart(menuItem);
            updateCartIndicator();
        });
    }
}

function updateCartIndicator() {
    console.log(getCart());
    
    document.querySelector('#cartIndicator').textContent = getCartSize();
}