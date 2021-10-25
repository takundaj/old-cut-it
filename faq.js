
const backToMainBtn = document.querySelector('.nav-subscribe');

const faqButtonsArray = document.querySelectorAll('.btn-faq')
const faqSeperatorsArray = document.querySelectorAll('.faq-seperator')
const faqBodyArray = document.querySelectorAll('.btn-faq-body')
const faqIconsArray = document.querySelectorAll('.faq-icon')

faqButtonsArray.forEach((button, i) => {

    button.addEventListener('click', event => {

        if (button.classList.contains(i)) {
            faqButtonsArray[i].classList.toggle('btn-faq-open')
            faqSeperatorsArray[i].classList.toggle('faq-sepeator-open')
            faqBodyArray[i].classList.toggle('btn-faq-body-open')
            faqIconsArray[i].classList.toggle('faq-icon-open')
        }

    })

})

if (window.innerWidth < 500) {
    backToMainBtn.innerHTML = '<i class="fas fa-chevron-left"></i> BACK'

} else if (window.innerWidth > 500) {
    backToMainBtn.innerHTML = '<i class="fas fa-chevron-left"></i> BACK TO MAIN PAGE'
}


window.addEventListener('resize', event => {
    if (window.innerWidth < 500) {
        backToMainBtn.innerHTML = '<i class="fas fa-chevron-left"></i> BACK'
    
    } else if (window.innerWidth > 500) {
        backToMainBtn.innerHTML = '<i class="fas fa-chevron-left"></i> BACK TO MAIN PAGE'
    }
})