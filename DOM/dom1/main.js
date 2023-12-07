// const rootNode = document
// console.log(rootNode)
// console.log(rootNode.nodeName)
// console.log(rootNode.nodeType)
// console.log(rootNode.nodeValue)

// console.log(document.documentElement)
// console.log(document.body)
// console.log(document.head)
// console.log(document.title)

const headElement = document.head
console.log(headElement)

const headChildren = headElement.childNodes
console.log(headChildren)

// headChildren.forEach((hc) => {
//     console.log(hc.nodeName)
//     console.log(hc.nodeType)
//     console.log(hc.nodeValue)
// })

// Array.from(headElement.children).forEach((hc) => {
//     console.log(hc.nodeName)
//     console.log(hc.nodeType)
//     console.log(hc.nodeValue)
// })

const headParentNode=headElement.parentNode
const headParentElement=headElement.parentElement

console.log(headParentNode)
console.log(headParentElement)

const headPreviousSibling=headElement.previousSibling
console.log(headPreviousSibling)

const headPreviousSiblingElement=headElement.previousElementSibling
console.log(headPreviousSiblingElement)

const headNextSibling=headElement.nextSibling
console.log(headNextSibling)

const headNextSiblingElement=headElement.nextElementSibling
console.log(headNextSiblingElement)