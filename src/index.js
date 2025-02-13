import "./style.css"
import {createMenuPage} from "./menu.js"
import {createHomePage} from "./home.js"
import {getCurrentPage} from "./pageloader.js";
import { createAboutPage} from "./about.js";


function updatePage(){
    document.querySelector('#content').textContent = ''
    const currentPage = getCurrentPage()

    if(currentPage == 'Menu'){
        createMenuPage()
    }
    else if(currentPage == 'About'){
        createAboutPage()
    }
    else{
        createHomePage()
    }

}

updatePage()

document.querySelectorAll('nav button').forEach(button =>{
    button.addEventListener('click', updatePage)
})
