// const ulStudents = document.getElementById('students')
// console.log(ulStudents)

// const ulStudents2=document.querySelector('#students')
// console.log(ulStudents2)

// const programmingLect=document.querySelector('.programming')
// console.log(programmingLect)

// const ulStudents3=document.querySelector('ul[id="students"]')
// console.log(ulStudents3)

// const ulEle = document.querySelector('ul')
// console.log(ulEle)

// const divUl = document.querySelector('div>ul')
// console.log(divUl)

// ----------------

// const programmingLect=document.getElementsByClassName('programming')

// console.log(programmingLect)
// console.log(programmingLect.length)

// const ulTagname = document.getElementsByTagName('ul')
// console.log(ulTagname)
// console.log(ulTagname.length)

// const coursesEle=document.querySelectorAll('.courses')
// console.log(coursesEle)

// const divEle = document.getElementById('bscit-courses')
// const courseUnderDiv = divEle.querySelectorAll('courses')
// console.log(courseUnderDiv)

// const programmingLect = document.querySelectorAll('.programming')
// console.log(programmingLect)
// programmingLect.forEach((p1) => {
//     console.log(p1)
//     console.log(p1.nodeName)
//     console.log(p1.nodeType)
//     console.log(p1.nodeValue)
//     console.log(p1.attributes)
//     Array.from(p1.attributes).forEach((attr) => console.log(attr))
// })

// const pEle=document.getElementById('p-01')
// const pEleAttributes = pEle.attributes
// console.log(pEleAttributes)
// console.log(pEleAttributes.length)
// Array.from(pEleAttributes).forEach((attr) => {
//     console.log(attr.name)
//     console.log(attr.value)
// })
// console.log(pEle.getAttribute('id'))

// const divEle = document.getElementById
// ('exampleElement')

// console.log(divEle.textContent)
// console.log(divEle.innerText)
// console.log(divEle.innerHTML)

// --------------------

const newLiEle = document.createElement('li')

newLiEle.setAttribute('class', 'devops')
newLiEle.setAttribute('name', 'devopsLect')

newLiEle.innerHTML='<span style="color:red">Siam YamsangSung</span>'

const divParent=document.querySelector('div.lecturers>ul')
console.log(divParent)
// divParent.appendChild(newLiEle)

const liEle=document.querySelectorAll('div.lecturers>ul>li')
console.log(liEle)
const refNode=liEle[1]
console.log(refNode)

// divParent.insertBefore(newLiEle,refNode)
// divParent.replaceChild(newLiEle,refNode)

divParent.removeChild(refNode)