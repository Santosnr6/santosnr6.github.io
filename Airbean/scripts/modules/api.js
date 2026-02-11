export default async function fetchMenu() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/airbeanproducts.json');
        const data = await response.json();
        return data.menu;
    } catch(error) {
        console.log(error.message);
        return [];
    }
}