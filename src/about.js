const htmlContent = document.querySelector('#content')

htmlContent.textContent = ''


export function createAboutPage(){

    const aboutSection = document.createElement('div')
    aboutSection.className = 'aboutSection'

    const aboutImage = document.createElement('div')
    aboutImage.className = "aboutImage"


    const aboutText = document.createElement('div')
    aboutText.className = "aboutText"

    const aboutTextTitle = document.createElement('h3')
    aboutTextTitle.textContent = "About Us"


    const aboutTextDescription = document.createElement('p')
    aboutTextDescription.textContent = "Welcome to our Bhutanese cuisine restaurant, where we bring the rich flavors and traditions of Bhutan to your table. Our menu offers authentic dishes made with fresh, locally sourced ingredients, inspired by the vibrant spices and unique culinary heritage of Bhutan. Experience the warmth, hospitality, and distinctive tastes that reflect the spirit of the Himalayan Kingdom, from fiery Ema Datshi to savory Momos. Join us for a truly unforgettable dining experience that celebrates the heart and soul of Bhutanese culture"

    const contactButton = document.createElement('button')
    contactButton.className = "contactButton"

    contactButton.textContent = "Contact Us"
    
    aboutText.append(aboutTextTitle, aboutTextDescription, contactButton)
    aboutSection.append(aboutImage, aboutText)

    htmlContent.appendChild(aboutSection)


}

