const menu = [];

export function getMenuItems() {
    return menu;
}

export function getMenuItem(id) {
    return menu.find(item => item.id === Number(id));
}

export function setMenuItems(list) {
    console.log(list);
    
    for(let item of list) {
        menu.push(item);
    }
}