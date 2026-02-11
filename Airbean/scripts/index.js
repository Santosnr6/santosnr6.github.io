import { getMenuItems, setMenuItems } from "./data/menu.js";
import fetchMenu from "./modules/api.js";
import { setupBurger, setupCoffeeMenu } from "./modules/gui.js";

console.log(location.pathname);


if(location.pathname.includes('menu.html')) {
    setMenuItems(await fetchMenu());
    setupBurger();
    setupCoffeeMenu();
}