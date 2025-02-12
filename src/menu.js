const htmlContent = document.querySelector('#content')

htmlContent.textContent = ''


export function createMenuPage() {

    const menuSection = document.createElement('div');
    menuSection.classList.add('menuSection');

    const menu = document.createElement('div');
    menu.classList.add('menus');

    const itemList = ['Ema Datshi', 'Phaksha Paa', 'Jasha Maroo', 'Hoentay', 'Shakam Datshi'];
    const imagePaths = [require('./assets/cuisine1.jpg'), require('./assets/cuisine2.png'), require('./assets/cuisine3.jpg'), require('./assets/cuisine4.png'), require('./assets/cuisine5.png')];

    itemList.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menuItem');

        const img = document.createElement('img');
        img.src = imagePaths[index];
        img.alt = item;

        const name = document.createElement('p');
        name.textContent = item;

        if (index % 2 === 0) {
            menuItem.append(img, name);
        } else {
            menuItem.append(name, img);
        }

        menu.appendChild(menuItem);
    });

    menuSection.appendChild(menu);

    htmlContent.appendChild(menuSection);
}
