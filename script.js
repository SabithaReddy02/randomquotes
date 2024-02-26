// function app(){

// }

const btn = document.querySelector("button")
const h1 = document.querySelector("p")


btn.addEventListener("click", function () {
    fetch(" https://api.quotable.io/random").then(res=>res.json()).then(data=> h1.innerHTML=data.content)
    // h1.innerHTML= "bhaskar sir<span> loves </span> 29th batch"
})
