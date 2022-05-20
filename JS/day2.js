let div = document.querySelector('divClass')
let list = document.querySelector('ulClass')
let button = document.querySelector('buttonClass')
let input = document.querySelector('inputClass')

button.addEventListener('onClick', addToDo())

function addToDo(){
    let li = document.createElement('li')
    const val = input.value()
    console.log(val)

}