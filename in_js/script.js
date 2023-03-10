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
a1.href = "https://github.com/scorcism/website-using-js"
a1.target = "_blank"
a1.appendChild(a_text1)
head_ul__li1.appendChild(a1)
head_container__2_ul.appendChild(head_ul__li1)

// Menu li
let head_ul__li2 = document.createElement('li')
head_ul__li2.classList.add('head_ul__li')
let a2 = document.createElement('a')
let a_text2 = document.createTextNode('About')
a2.href = "https://github.com/scorcism"
a2.target = "_blank"
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
a4.href = "https://github.com/scorcism/website-using-js/"
a4.appendChild(a_text4)
head_ul__li4.appendChild(a4)
head_container__2_ul.appendChild(head_ul__li4)

// Menu li
let head_ul__li5 = document.createElement('li')
head_ul__li5.classList.add('head_ul__li')
let button1 = document.createElement('button')
button1.classList.add('head_ul__li_button')
let aa = document.createElement('a')
aa.innerText = "To Moon"
aa.href= "https://theuselessweb.com/"
aa.target = "_blank"
button1.appendChild(aa)
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
c_h1.innerText = "Website Made with HTML, CSS"
companey_left.appendChild(c_h1)
let c_hr = document.createElement('hr')
c_hr.classList.add('c_hr')
companey_left.appendChild(c_hr)
root.appendChild(about_companey)
let c_p = document.createElement('p')
c_p.innerText = `This website is entirely made using HTML,CSS. This is an HTML preview which is converted to JS`
companey_left.appendChild(c_p)
let companey_right = document.createElement('div')
companey_right.classList.add('companey_right')
about_companey.appendChild(companey_right)


// Section cta
let cta = document.createElement('section')
cta.classList.add('cta')
let cta_container = document.createElement('div')
cta_container.classList.add('cta_container')
cta.appendChild(cta_container)
let cta_text = document.createElement('div')
cta_text.classList.add('cta_text')
cta_container.appendChild(cta_text)
let h3 = document.createElement('h3')
h3.classList.add("h3");
h3.innerText = " In order to be irreplaceable, one must always be different"
cta_text.appendChild(h3)
let cta_button = document.createElement('div')
cta_button.classList.add('cta_button')
let a  = document.createElement('a')
a.innerText = "To Moon"
a.href = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGIWnQUKyw86jU3eiDBtYXEKD5Fmy0W-7cXCWOjzMbw&s"
a.target = "_blank"
cta_button.appendChild(a)
cta_container.appendChild(cta_button)
root.appendChild(cta)

// Footer
let footer = document.createElement('footer')
let content = document.createElement('div')
content.classList.add('content')
footer.appendChild(content);
let h4 = document.createElement('h4')
h4.classList.add('h4')
h4.innerText = "copyright@2023 Abhishek Pathak"
content.appendChild(h4)
root.appendChild(footer)


// Meta tags
document.title= "In JavaScript"
let head = document.querySelector('head');
let meta1 = document.createElement('meta')
meta1.setAttribute('name',"Website in JS")
meta1.setAttribute('content',"Website Entirely made using JS ")
head.appendChild(meta1)
let meta2 = document.createElement('meta')
meta2.setAttribute('name',"keywords")
meta2.setAttribute('content',"HTML, CSS, JS, JavaScript")
head.appendChild(meta2)
let meta3 = document.createElement('meta')
meta3.setAttribute('rel',"shortcut icon")
meta3.setAttribute('type',"image/x-icon")
meta3.setAttribute('href',"./Assets/logo.png")
head.appendChild(meta3)
let meta4 = document.createElement('meta')
meta4.setAttribute('name',"author")
meta4.setAttribute('content',"Abhishek Pathak")
head.appendChild(meta4)
let meta5 = document.createElement('meta')
meta5.setAttribute('charset',"UTF-8")
head.appendChild(meta5)
let meta6 = document.createElement('meta')
meta6.setAttribute('http-equiv',"X-UA-Compatible")
meta6.setAttribute('content',"IE=edge")
head.appendChild(meta6)
let meta7 = document.createElement('meta')
meta7.setAttribute('name',"viewport")
meta7.setAttribute('content',"width=device-width, initial-scale=1.0")
head.appendChild(meta7)
let link1 = document.createElement('link')
link1.type = "text/css"
link1.rel = "stylesheet"
link1.href = "./style.css"
head.appendChild(link1)