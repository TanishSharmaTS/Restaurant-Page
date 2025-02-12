const navBar = document.querySelectorAll('nav button')

let currentPage = navBar[0].id

navBar.forEach(button =>{
    button.addEventListener('click', ()=>{
        currentPage = button.id
    })
})


export function getCurrentPage(){
    return currentPage
}



