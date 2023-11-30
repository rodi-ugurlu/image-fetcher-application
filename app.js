//! YEAR:1 DAY:59 30/11/2023
const formWrapper = document.querySelector(".form-wrapper")
const form = document.querySelector("#form")
const searchInput = document.querySelector("#searchInput")
const buttonWrapper = document.querySelector(".button-wrapper")
const searchButton = document.querySelector("#search-button")
const clearButton = document.querySelector("#clear-button")
const imageListWrapper = document.querySelector(".imagelist-wrapper")

runEventListener()

function runEventListener(){
form.addEventListener("submit",search)
clearButton.addEventListener("click",clear)

}

function clear(){
    searchInput.value="";
   Array.from(imageListWrapper.children).forEach((child)=>child.remove())
}




function search(e){
    const value=searchInput.value.trim()

fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
    method:"GET",
    headers: {
        Authorization: "Client-ID VKqRmi7oSd8nQv3GaYxdt2dNlKU23tJ1FX18K9cWD58"
    }
})
.then((response)=> response.json())
.then((data)=>{
    Array.from(data.results).forEach((images)=>{
        // console.log(images.urls.small)
        addImageToPage(images.urls.small)
    })
})
.catch((error)=> alert("REQUEST İS FAİLED"))


   e.preventDefault()
}



function addImageToPage(url){
    const div= document.createElement("div")
    div.className="card"
    const img=document.createElement("img")
    img.setAttribute("src",url);
    img.height='400'
    img.width='400'
    div.append(img)
    imageListWrapper.append(div)

    
}
console.log(imageListWrapper)