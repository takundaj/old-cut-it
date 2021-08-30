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

featuresButtonsArray.forEach( button => {


    button.addEventListener('click', event => {

    
        if (button.classList.contains('0')) {

            featureDescriptionArray.forEach(description, index => {
                console.log(index)
                description.classList.remove('feature-description-open', index !== 0)
            })
            
            featureDescriptionArray[0].classList.toggle('feature-description-open')
    
        } 
    
        if (button.classList.contains('1')) {

            featureDescriptionArray.forEach(description, index => {
                description.classList.remove('feature-description-open', index !== 1)
            })
    
            featureDescriptionArray[1].classList.toggle('feature-description-open')
    
        }

    
        if (button.classList.contains('2')) {
    
            featureDescriptionArray.forEach(description, index => {
                description.classList.remove('feature-description-open', index !== 2)
            })

            featureDescriptionArray[2].classList.toggle('feature-description-open')
    
        }
    
        if (button.classList.contains('3')) {

            featureDescriptionArray.forEach(description, index => {
                description.classList.remove('feature-description-open', index !== 3)
            })
    
            featureDescriptionArray[3].classList.toggle('feature-description-open')
    
        }


        if (button.classList.contains('4')) {

            featureDescriptionArray.forEach(description, index => {
                description.classList.remove('feature-description-open', index !== 4)
            })
    
            featureDescriptionArray[4].classList.toggle('feature-description-open')
    
        }

    })

})





