const htmlContent = document.querySelector('#content')

htmlContent.textContent = ''


export function createHomePage(){

    const heroSection = document.createElement('div')
    heroSection.classList.add('homeHeroSection')

    const homeImage = document.createElement('img')
    homeImage.classList.add('homeImage')

    const homeText = document.createElement('div')
    homeText.classList.add('homeText')


    const header = document.createElement('h1')
    header.textContent = "Bhutanese Cuisine"

    const description = document.createElement('p')
    description.textContent = "Indulge in the heartwarming flavors of Bhutan, where every dish tells a story of culture, tradition, and harmony with nature. From the fiery embrace of Ema Datshi to the comforting warmth of Suja, our menu brings you the best of Bhutanese gastronomy, crafted with fresh, locally sourced ingredients."

    const bookButton = document.createElement('button')
    bookButton.textContent = "Book a table"
    bookButton.classList.add("heroSectionBtn")

    htmlContent.appendChild(heroSection)

    heroSection.appendChild(homeText)
    heroSection.appendChild(homeImage)

    homeText.append(header, description, bookButton)
}
