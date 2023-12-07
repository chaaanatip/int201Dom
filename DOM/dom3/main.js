const submitButton = document.querySelector('button')
submitButton.addEventListener('click',(e) => {
    e.preventDefault()
    const allInputElement = document.querySelectorAll('input')
    console.log(allInputElement)

    const isComplete = Array.from(allInputElement).every((input)=>input.value.length > 0)

    const pElement=document.getElementsByTagName('p')[0]
    if(isComplete){
        pElement.textContent="Your input are Complete"
    }
    else{
        pElement.textContent="Missing some value, please enter"
    }
})

