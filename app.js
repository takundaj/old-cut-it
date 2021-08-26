const header = document.querySelector('.header-section');
const dropdown = document.querySelector('.dropdown');
const topfiller = document.querySelector('.margin-filler')

//nav bar sticky
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0)
    topfiller.classList.toggle('margin-filler-active', window.scrollY > 0)
    
})


//navbar dropdown
header.addEventListener('click', event => {
        
    if (dropdown.classList.contains('dropdown-collapsed')) {
        dropdown.classList.remove('dropdown-collapsed')
    } else {

        dropdown.classList.toggle('dropdown-collapsed', event.target.tagName == 'I' )

    }

})





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