// // Use JavaScript to obtain a reference to the first section with the class of 
// article__header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
let firstEl = document.querySelector('.article_header')
firstEl.textContent = "Welcome to the Badger blog"

// Use JavaScript to obtain a reference to all article__header elements and change their classList property 
// value to article__header important.
let allEl = document.querySelectorAll('.article_header')
for (let i = 0; i < allEl.length; i ++) {
  allEl[i].classList.add("important")
}
// Obtain a reference the element with a class of dashed and remove it.
let dashed = document.querySelector('.dashed')
dashed.classList.remove('.dashed')

// Obtain a reference the element with a class of article__footer and add the class of goldenrod it.
document.querySelector('.article_footer').classList.add('goldenrod')