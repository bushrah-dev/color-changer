let btn = document.getElementById("btn")
let randomNo = () => {
    return Math.floor(Math.random() * 256)
}
let changeColor = () => {
    let randomColor = `rgb(${randomNo()}, ${randomNo()}, ${randomNo()})`
    document.body.style.backgroundColor = randomColor
}
btn.addEventListener("click", changeColor)
window.addEventListener("load", changeColor)

