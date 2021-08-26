//HOME PAGE - WORD LOOP ANIMATION

//get h1 element
const titleObject = document.getElementById('job-title');

//Declare array of specialist title you want to loops through
const jobsArray= ["SPECIALIST","BARBER", "HAIR DRESSER", "TATOO ARTIST", "NAIL TECH", "BEAUTICIAN"]

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




//scroll message
const scrollMessage = document.querySelector('.scroll-message');

window.addEventListener('scroll', event => {
    
    scrollMessage.classList.add('scroll-fade-away') = 'none';

})





//Features section - collapsibles (feature items)

let features = Array.from(document.querySelectorAll('.features-list-item'));

let descriptions = Array.from(document.querySelectorAll('.features-list-item'));

let bookingCollapsible = document.getElementById('booking-collapsible')
let bookingTitle = document.getElementById('booking-title');
let bookingIcon = document.getElementById('booking-icon');

let cashlessCollapsible = document.getElementById('cashless-collapsible')
let cashlessTitle = document.getElementById('cashless-title')
let cashlessIcon = document.getElementById('cashless-icon')

let connectCollapsible = document.getElementById('connect-collapsible')
let connectTitle = document.getElementById('connect-title')
let connectIcon = document.getElementById('connect-icon')


let specialistCollapsible = document.getElementById('specialist-collapsible')
let specialistTitle = document.getElementById('specialist-title')
let specialistIcon = document.getElementById('specialist-icon')


let businessCollapsible = document.getElementById('business-collapsible')
let businessTitle = document.getElementById('business-title')
let businessIcon= document.getElementById('business-icon')



console.log(features)

features.forEach(feature => {
    feature.addEventListener('click', event => {


        //features list algorithm logic:

        let featureChildren = Array.from(feature.children);
        console.log(featureChildren);
        featureChildren[1].classList.toggle('collapsed');
        

        if (feature.classList.contains('booking')) {

            //turn selected feature brown
            bookingIcon.classList.toggle('features-list-item-icon-container-brown')
            bookingTitle.classList.toggle('features-list-item-title-brown');

            //uncolllapse other features
            cashlessCollapsible.classList.remove('collapsed');
            connectCollapsible.classList.remove('collapsed');
            specialistCollapsible.classList.remove('collapsed');
            businessCollapsible.classList.remove('collapsed');

            //turn all other feature's title text grey
            cashlessTitle.classList.remove('features-list-item-title-brown');
            connectTitle.classList.remove('features-list-item-title-brown');
            specialistTitle.classList.remove('features-list-item-title-brown');
            businessTitle.classList.remove('features-list-item-title-brown');

            //turn all other feature's icons grey
            cashlessIcon.classList.remove('features-list-item-icon-container-brown');
            connectIcon.classList.remove('features-list-item-icon-container-brown');
            specialistIcon.classList.remove('features-list-item-icon-container-brown');
            businessIcon.classList.remove('features-list-item-icon-container-brown');

            //Set Feature Phone Image to Booking screen


        } else if (feature.classList.contains('cashless')) {

            //turn selected feature brown
            cashlessIcon.classList.toggle('features-list-item-icon-container-brown')
            cashlessTitle.classList.toggle('features-list-item-title-brown');

            //uncolllapse other features
            bookingCollapsible.classList.remove('collapsed')
            connectCollapsible.classList.remove('collapsed');
            specialistCollapsible.classList.remove('collapsed');
            businessCollapsible.classList.remove('collapsed');

            //turn all other feature's title text grey
            bookingTitle.classList.remove('features-list-item-title-brown');
            connectTitle.classList.remove('features-list-item-title-brown');
            specialistTitle.classList.remove('features-list-item-title-brown');
            businessTitle.classList.remove('features-list-item-title-brown');

            //turn all other feature's icons grey
            bookingIcon.classList.remove('features-list-item-icon-container-brown');
            connectIcon.classList.remove('features-list-item-icon-container-brown');
            specialistIcon.classList.remove('features-list-item-icon-container-brown');
            businessIcon.classList.remove('features-list-item-icon-container-brown');

            //Set Feature Phone Image to Cashless screen

        } else if (feature.classList.contains('connect')) {

            //turn selected feature brown
            connectIcon.classList.toggle('features-list-item-icon-container-brown')
            connectTitle.classList.toggle('features-list-item-title-brown');

            //uncolllapse other features
            bookingCollapsible.classList.remove('collapsed');
            cashlessCollapsible.classList.remove('collapsed');
            specialistCollapsible.classList.remove('collapsed');
            businessCollapsible.classList.remove('collapsed');

            //turn all other feature's title text grey
            bookingTitle.classList.remove('features-list-item-title-brown');
            cashlessTitle.classList.remove('features-list-item-title-brown');
            specialistTitle.classList.remove('features-list-item-title-brown');
            businessTitle.classList.remove('features-list-item-title-brown');

            //turn all other feature's icons grey
            bookingIcon.classList.remove('features-list-item-icon-container-brown');
            cashlessIcon.classList.remove('features-list-item-icon-container-brown');
            specialistIcon.classList.remove('features-list-item-icon-container-brown');
            businessIcon.classList.remove('features-list-item-icon-container-brown');

            //Set Feature Phone Image to Connect screen

        } else if (feature.classList.contains('specialist')) {

            //turn selected feature brown
            specialistIcon.classList.toggle('features-list-item-icon-container-brown')
            specialistTitle.classList.toggle('features-list-item-title-brown');

            //uncolllapse other features
            bookingCollapsible.classList.remove('collapsed');
            cashlessCollapsible.classList.remove('collapsed');
            connectCollapsible.classList.remove('collapsed');
            businessCollapsible.classList.remove('collapsed');
            
            //turn all other feature's title text grey
            bookingTitle.classList.remove('features-list-item-title-brown');
            cashlessTitle.classList.remove('features-list-item-title-brown');
            connectTitle.classList.remove('features-list-item-title-brown');
            businessTitle.classList.remove('features-list-item-title-brown');

            //turn all other feature's icons grey
            bookingIcon.classList.remove('features-list-item-icon-container-brown');
            cashlessIcon.classList.remove('features-list-item-icon-container-brown');
            connectIcon.classList.remove('features-list-item-icon-container-brown');
            businessIcon.classList.remove('features-list-item-icon-container-brown');

            //Set Feature Phone Image to Specialist screen

        } else if (feature.classList.contains('business')) {

            //turn selected feature brown
            businessIcon.classList.toggle('features-list-item-icon-container-brown')
            businessTitle.classList.toggle('features-list-item-title-brown');

            //uncolllapse other features
            bookingCollapsible.classList.remove('collapsed');
            cashlessCollapsible.classList.remove('collapsed');
            connectCollapsible.classList.remove('collapsed');
            specialistCollapsible.classList.remove('collapsed');

            //turn all other feature's title text grey
            bookingTitle.classList.remove('features-list-item-title-brown');
            cashlessTitle.classList.remove('features-list-item-title-brown');
            connectTitle.classList.remove('features-list-item-title-brown');
            specialistTitle.classList.remove('features-list-item-title-brown');

            //turn all other feature's icons grey
            bookingIcon.classList.remove('features-list-item-icon-container-brown');
            cashlessIcon.classList.remove('features-list-item-icon-container-brown');
            connectIcon.classList.remove('features-list-item-icon-container-brown');
            specialistIcon.classList.remove('features-list-item-icon-container-brown');

            //Set Feature Phone Image to Business screen

        }



    })
})
    