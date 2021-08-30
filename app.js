const header = document.querySelector('.header-section');
const dropdown = document.querySelector('.dropdown');
const topfiller = document.querySelector('.margin-filler');
const menuButton = document.querySelector('.nav-menu-icon');
const priceSwiper = document.querySelector('.priceplan-container');
const priceSwiperWrapper = document.querySelector('.priceplan-swiper');

//nav bar sticky
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0)
    
})


//navbar dropdown
header.addEventListener('click', event => {
        
    if (dropdown.classList.contains('dropdown-collapsed')) {
        dropdown.classList.remove('dropdown-collapsed')
        dropdown.style.display = "none"
        header.style.boxShadow = ""
    
    } else if (!dropdown.classList.contains('dropdown-collapsed') && event.target === menuButton) {

        dropdown.classList.toggle('dropdown-collapsed', event.target.tagName == 'I' )
        header.style.boxShadow = "0 0 1rem grey"
        dropdown.style.display = "block"
    }

})


//get h1 element
const titleObject = document.getElementById('job-title');

//Declare array of specialist title you want to loops through
const jobsArray= ["Specialist","Barber", "Hairdresser", "Tatoo Artist", "Nail tech", "Beautician"]

let i = 0
let j = 0
let currentJobTitle = []
let isDeleting = false
let isEnd = false


function loop() {
    let isEnd = false
    titleObject.innerHTML = currentJobTitle.join('')
    
    if (i < jobsArray.length ) {
        
        
        if (!isDeleting && j <= jobsArray[i].length) {
            currentJobTitle.push(jobsArray[i][j])
            j++
            titleObject.innerHTML = currentJobTitle.join('')
            
        }

        if (isDeleting && j <= jobsArray[i].length) {
            currentJobTitle.pop(jobsArray[i][j])
            j--
            titleObject.innerHTML = currentJobTitle.join('')
    
        }

        if (j == jobsArray[i].length) {
            isEnd = true
            isDeleting = true
        }

        if (isDeleting && j === 0) {
            currentPhrase = []
            isDeleting = false
            i++
            if (i == jobsArray.length) {
                i=0
            }
        }

    }
    const spedUp = Math.random() * (80 -50) + 50
    const normalSpeed = Math.random() * (200 -100)  + 100
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
    setTimeout(loop, time)
}

loop()





//swiper funtionality - testimonials

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    direction: 'horizontal',
    loop: false,
    allowTouchMove: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



//Sign In Form Validation






//Features Button Collapsible Functionality (feature items) - TODO

const featureButtonsContainer = document.querySelector('.features-buttons')
const featuresButtonsArray = document.querySelectorAll('.btn-feature')
const featureIconContainersArray = document.querySelectorAll('.feature-icon-container')
const featureIconImageArray = document.querySelectorAll('.feature-icon')
const featureDescriptionArray = document.querySelectorAll('.feature-description')
const featureTitlesArray = document.querySelectorAll('.feature-title')


featuresButtonsArray.forEach( button => {


    button.addEventListener('click', event => {

    
        if (button.classList.contains('0') && !button.classList.contains('btn-feature-selected')) {
            
            button.classList.toggle('btn-feature-selected')
            featureDescriptionArray[0].classList.toggle('feature-description-open')
            featureTitlesArray[0].classList.toggle('feature-title-selected')
            featureIconContainersArray[0].classList.toggle('feature-icon-container-selected')
            featureIconImageArray[0].classList.toggle('feature-icon-selected')

            //DESELECT

            //deselect others (background)
            featuresButtonsArray.forEach(item => {
                if (item !== featuresButtonsArray[0]) {
                    item.classList.remove('btn-feature-selected')
                }
            })

            featureTitlesArray.forEach(item => {
                if(item!== featureTitlesArray[0]) {
                    item.classList.remove('feature-title-selected')
                }
            })

            //deselect others (text)
            featureDescriptionArray.forEach(item => {
                if (item !== featureDescriptionArray[0]) {
                    item.classList.remove('feature-description-open')
                }
            })

            //deselect others (icon-container)
            featureIconContainersArray.forEach(item => {
                if (item !== featureIconContainersArray[0]) {
                    item.classList.remove('feature-icon-container-selected')
                }
            })

            //deselect others (icon)
            featureIconImageArray.forEach(item => {
                if (item !== featureIconImageArray[0]) {
                    item.classList.remove('feature-icon-selected')
                }
            })


    
        } 
    
        if (button.classList.contains('1') && !button.classList.contains('btn-feature-selected')) {

            button.classList.toggle('btn-feature-selected')
            featureDescriptionArray[1].classList.toggle('feature-description-open')
            featureTitlesArray[1].classList.toggle('feature-title-selected')
            featureIconContainersArray[1].classList.toggle('feature-icon-container-selected')
            featureIconImageArray[1].classList.toggle('feature-icon-selected')

                        //DESELECT

            //deselect others (background)
            featuresButtonsArray.forEach(item => {
                if (item !== featuresButtonsArray[1]) {
                    item.classList.remove('btn-feature-selected')
                }
            })

            featureTitlesArray.forEach(item => {
                if(item!== featureTitlesArray[1]) {
                    item.classList.remove('feature-title-selected')
                }
            })

            //deselect others (text)
            featureDescriptionArray.forEach(item => {
                if (item !== featureDescriptionArray[1]) {
                    item.classList.remove('feature-description-open')
                }
            })

            //deselect others (icon-container)
            featureIconContainersArray.forEach(item => {
                if (item !== featureIconContainersArray[1]) {
                    item.classList.remove('feature-icon-container-selected')
                }
            })

            //deselect others (icon)
            featureIconImageArray.forEach(item => {
                if (item !== featureIconImageArray[1]) {
                    item.classList.remove('feature-icon-selected')
                }
            })

        }

    
        if (button.classList.contains('2') && !button.classList.contains('btn-feature-selected')) {

            button.classList.toggle('btn-feature-selected')
            featureDescriptionArray[2].classList.toggle('feature-description-open')
            featureTitlesArray[2].classList.toggle('feature-title-selected')
            featureIconContainersArray[2].classList.toggle('feature-icon-container-selected')
            featureIconImageArray[2].classList.toggle('feature-icon-selected')

                        //DESELECT

            //deselect others (background)
            featuresButtonsArray.forEach(item => {
                if (item !== featuresButtonsArray[2]) {
                    item.classList.remove('btn-feature-selected')
                }
            })

            featureTitlesArray.forEach(item => {
                if(item!== featureTitlesArray[2]) {
                    item.classList.remove('feature-title-selected')
                }
            })

            //deselect others (text)
            featureDescriptionArray.forEach(item => {
                if (item !== featureDescriptionArray[2]) {
                    item.classList.remove('feature-description-open')
                }
            })

            //deselect others (icon-container)
            featureIconContainersArray.forEach(item => {
                if (item !== featureIconContainersArray[2]) {
                    item.classList.remove('feature-icon-container-selected')
                }
            })

            //deselect others (icon)
            featureIconImageArray.forEach(item => {
                if (item !== featureIconImageArray[2]) {
                    item.classList.remove('feature-icon-selected')
                }
            })
            
    
        }
    
        if (button.classList.contains('3') && !button.classList.contains('btn-feature-selected')) {
    
            button.classList.toggle('btn-feature-selected')
            featureDescriptionArray[3].classList.toggle('feature-description-open')
            featureTitlesArray[3].classList.toggle('feature-title-selected')
            featureIconContainersArray[3].classList.toggle('feature-icon-container-selected')
            featureIconImageArray[3].classList.toggle('feature-icon-selected')

            
            //DESELECT

            //deselect others (background)
            featuresButtonsArray.forEach(item => {
                if (item !== featuresButtonsArray[3]) {
                    item.classList.remove('btn-feature-selected')
                }
            })

            featureTitlesArray.forEach(item => {
                if(item!== featureTitlesArray[3]) {
                    item.classList.remove('feature-title-selected')
                }
            })

            //deselect others (text)
            featureDescriptionArray.forEach(item => {
                if (item !== featureDescriptionArray[3]) {
                    item.classList.remove('feature-description-open')
                }
            })

            //deselect others (icon-container)
            featureIconContainersArray.forEach(item => {
                if (item !== featureIconContainersArray[3]) {
                    item.classList.remove('feature-icon-container-selected')
                }
            })

            //deselect others (icon)
            featureIconImageArray.forEach(item => {
                if (item !== featureIconImageArray[3]) {
                    item.classList.remove('feature-icon-selected')
                }
            })
    
        }


        if (button.classList.contains('4') && !button.classList.contains('btn-feature-selected')) {
    
            button.classList.toggle('btn-feature-selected')
            featureDescriptionArray[4].classList.toggle('feature-description-open')
            featureTitlesArray[4].classList.toggle('feature-title-selected')
            featureIconContainersArray[4].classList.toggle('feature-icon-container-selected')
            featureIconImageArray[4].classList.toggle('feature-icon-selected')

        
            //DESELECT

            //deselect others (background)
            featuresButtonsArray.forEach(item => {
                if (item !== featuresButtonsArray[4]) {
                    item.classList.remove('btn-feature-selected')
                }
            })

            featureTitlesArray.forEach(item => {
                if(item!== featureTitlesArray[4]) {
                    item.classList.remove('feature-title-selected')
                }
            })

            //deselect others (text)
            featureDescriptionArray.forEach(item => {
                if (item !== featureDescriptionArray[4]) {
                    item.classList.remove('feature-description-open')
                }
            })

            //deselect others (icon-container)
            featureIconContainersArray.forEach(item => {
                if (item !== featureIconContainersArray[4]) {
                    item.classList.remove('feature-icon-container-selected')
                }
            })

            //deselect others (icon)
            featureIconImageArray.forEach(item => {
                if (item !== featureIconImageArray[4]) {
                    item.classList.remove('feature-icon-selected')
                }
            })

        }


    })

})





/* HOW TO BUTTON FUNCTIONALITY */ 

const howToButtonsArray = document.querySelectorAll('.btn-howto')
const howToIconsArray = document.querySelectorAll('.howto-icon')
const howToTextArray = document.querySelectorAll('.howto-text')
const howToImage = document.querySelector('.howto-image')


howToButtonsArray.forEach( button => {

    button.addEventListener('click', event => {

        if (button.classList.contains('0') && !button.classList.contains('btn-howto-selected')) {
            
            //change background
            button.classList.toggle('btn-howto-selected')
            //change text
            howToTextArray[0].classList.toggle('howto-text-selected')
            //change icons
            howToIconsArray[0].classList.toggle('howto-icon-selected')
            //change how to image
            howToImage.setAttribute('src','/images/howto-image-1.png')

            //deselect others (background)
            howToButtonsArray.forEach(item => {
                if (item !== button) {
                    item.classList.remove('btn-howto-selected')
                }
            })

            //deselect others (text)
            howToTextArray.forEach(item => {
                if (item !== howToTextArray[0]) {
                    item.classList.remove('howto-text-selected')
                }
            })

            //deselect others (icon)
            howToIconsArray.forEach(item => {
                if (item !== howToIconsArray[0]) {
                    item.classList.remove('howto-icon-selected')
                }
            })


    
        } 
    
        if (button.classList.contains('1') && !button.classList.contains('btn-howto-selected')) {

            //change background
            button.classList.toggle('btn-howto-selected')
            //change text
            howToTextArray[1].classList.toggle('howto-text-selected')
            //change icons
            howToIconsArray[1].classList.toggle('howto-icon-selected')
    
            //change how to image
            howToImage.setAttribute('src','/images/howto-image-2.png')

            //deselect others (background)
            howToButtonsArray.forEach(item => {
                if (item !== button) {
                    item.classList.remove('btn-howto-selected')
                }
            })

            //deselect others (text)
            howToTextArray.forEach(item => {
                if (item !== howToTextArray[1]) {
                    item.classList.remove('howto-text-selected')
                }
            })

            //deselect others (icon)
            howToIconsArray.forEach(item => {
                if (item !== howToIconsArray[1]) {
                    item.classList.remove('howto-icon-selected')
                }
            })

        }

    
        if (button.classList.contains('2') && !button.classList.contains('btn-howto-selected')) {

            //change background
            button.classList.toggle('btn-howto-selected')
            //change text
            howToTextArray[2].classList.toggle('howto-text-selected')
            //change icons
            howToIconsArray[2].classList.toggle('howto-icon-selected')        
            
            //change how to image
            howToImage.setAttribute('src','/images/howto-image-3.png')


            //deselect others (background)
            howToButtonsArray.forEach(item => {
                if (item !== button) {
                    item.classList.remove('btn-howto-selected')
                }
            })

            //deselect others (text)
            howToTextArray.forEach(item => {
                if (item !== howToTextArray[2]) {
                    item.classList.remove('howto-text-selected')
                }
            })

            //deselect others (icon)
            howToIconsArray.forEach(item => {
                if (item !== howToIconsArray[2]) {
                    item.classList.remove('howto-icon-selected')
                }
            })
    
        }
    
        if (button.classList.contains('3') && !button.classList.contains('btn-howto-selected')) {
            
            //change background
            button.classList.toggle('btn-howto-selected')
            //change text
            howToTextArray[3].classList.toggle('howto-text-selected')
            //change icons
            howToIconsArray[3].classList.toggle('howto-icon-selected')

            //change how to image
            howToImage.setAttribute('src','/images/howto-image-4.png')

            //deselect others (background)
            howToButtonsArray.forEach(item => {
                if (item !== button) {
                    item.classList.remove('btn-howto-selected')
                }
            })

            //deselect others (text)
            howToTextArray.forEach(item => {
                if (item !== howToTextArray[3]) {
                    item.classList.remove('howto-text-selected')
                }
            })

            //deselect others (icon)
            howToIconsArray.forEach(item => {
                if (item !== howToIconsArray[3]) {
                    item.classList.remove('howto-icon-selected')
                }
            })
    
        }


        if (button.classList.contains('4') && !button.classList.contains('btn-howto-selected')) {
            
            //change background
            button.classList.toggle('btn-howto-selected')
            //change text
            howToTextArray[4].classList.toggle('howto-text-selected')
            //change icons
            howToIconsArray[4].classList.toggle('howto-icon-selected')

            //change how to image
            howToImage.setAttribute('src','/images/howto-image-5.png')

            //deselect others (background)
            howToButtonsArray.forEach(item => {
                if (item !== button) {
                    item.classList.remove('btn-howto-selected')
                }
            })

            //deselect others (text)
            howToTextArray.forEach(item => {
                if (item !== howToTextArray[4]) {
                    item.classList.remove('howto-text-selected')
                }
            })

            //deselect others (icon)
            howToIconsArray.forEach(item => {
                if (item !== howToIconsArray[4]) {
                    item.classList.remove('howto-icon-selected')
                }
            })
    

        }

    })

})