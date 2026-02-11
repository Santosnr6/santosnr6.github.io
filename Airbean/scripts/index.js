import { getMenuItems, setMenuItems } from "./data/menu.js";
import fetchMenu from "./modules/api.js";
import { setupBurger, setupCoffeeMenu } from "./modules/gui.js";

if(location.pathname === '/pages/menu.html') {
    setMenuItems(await fetchMenu());
    setupBurger();
    setupCoffeeMenu();
}