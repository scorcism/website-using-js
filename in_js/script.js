const root = document.querySelector('.root')

// Head
let header = document.createElement('header')
header.classList.add('head')
root.appendChild(header)

// Root Node of head
let head_container = document.createElement('div')
head_container.classList.add('head_container')
header.appendChild(head_container)

// Logo Section
let head_container__1 = document.createElement('div')
head_container__1.classList.add('head_container__1')
head_container.appendChild(head_container__1)

// Logo
let head_container__img = document.createElement('img')
head_container__img.classList.add('head_container__img')
head_container__img.setAttribute('src', './Assets/logo.png')
head_container__1.appendChild(head_container__img)

// void Space
let debries = document.createElement('div')
debries.classList.add('debries')
head_container__1.appendChild(debries)

// Menu container
let head_container__2 = document.createElement('div')
head_container__2.classList.add('head_container__2')
head_container.appendChild(head_container__2)

// Menu ul
let head_container__2_ul = document.createElement('ul')
head_container__2_ul.classList.add('head_container__2_ul')
head_container__2.appendChild(head_container__2_ul)

// Menu li
let head_ul__li1 = document.createElement('li')
head_ul__li1.classList.add('head_ul__li')
let a1 = document.createElement('a')
let a_text1 = document.createTextNode('Github')
a1.href = "#"
a1.appendChild(a_text1)
head_ul__li1.appendChild(a1)
head_container__2_ul.appendChild(head_ul__li1)

// Menu li
let head_ul__li2 = document.createElement('li')
head_ul__li2.classList.add('head_ul__li')
let a2 = document.createElement('a')
let a_text2 = document.createTextNode('About us')
a2.href = "#"
a2.appendChild(a_text2)
head_ul__li2.appendChild(a2)
head_container__2_ul.appendChild(head_ul__li2)

// Menu li
let head_ul__li3 = document.createElement('li')
head_ul__li3.classList.add('head_ul__li')
let a3 = document.createElement('a')
let a_text3 = document.createTextNode('cta')
a3.href = "#"
a3.appendChild(a_text3)
head_ul__li3.appendChild(a3)
head_container__2_ul.appendChild(head_ul__li3)

// Menu li
let head_ul__li4 = document.createElement('li')
head_ul__li4.classList.add('head_ul__li')
let a4 = document.createElement('a')
let a_text4 = document.createTextNode('Contribute')
a4.href = "#"
a4.appendChild(a_text4)
head_ul__li4.appendChild(a4)
head_container__2_ul.appendChild(head_ul__li4)

// Menu li
let head_ul__li5 = document.createElement('li')
head_ul__li5.classList.add('head_ul__li')
let button1 = document.createElement('button')
button1.textContent = "To Moon"
button1.classList.add('head_ul__li_button')
head_ul__li5.appendChild(button1)
head_container__2_ul.appendChild(head_ul__li5)

// Section 2
let about_companey = document.createElement('section')
about_companey.classList.add('about_companey')
let companey_left = document.createElement('div')
companey_left.classList.add('companey_left')
about_companey.appendChild(companey_left)
let c_h1 = document.createElement('h1')
c_h1.classList.add('c_h1')
c_h1.innerText = " Lorem ipsum dolor sit amet consectetur adipisicing."
companey_left.appendChild(c_h1)
let c_hr = document.createElement('hr')
c_hr.classList.add('c_hr')
companey_left.appendChild(c_hr)
root.appendChild(about_companey)
let c_p = document.createElement('p')
c_p.innerText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae quidem sit, eligendi sequi placeat sed?`
companey_left.appendChild(c_p)

let companey_right = document.createElement('div')
companey_right.classList.add('companey_right')
about_companey.appendChild(companey_right)

