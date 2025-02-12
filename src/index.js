import "./style.css"
import {createMenuPage} from "./menu.js"
import {createHomePage} from "./home.js"
import {getCurrentPage} from "./pageloader.js";


const htmlContent = document.querySelector('#content')

function updatePage(){
    document.querySelector('#content').textContent = ''
    const currentPage = getCurrentPage()

    if(currentPage == 'Menu'){
        createMenuPage()
    }
    else if(currentPage == 'About'){
        htmlContent.textContent = 'AboutPage'
    }
    else{
        createHomePage()
    }

}

updatePage()

document.querySelectorAll('nav button').forEach(button =>{
    button.addEventListener('click', updatePage)
})
