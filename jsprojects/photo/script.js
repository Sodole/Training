const container = document.querySelector(".container")
const app = document.querySelector(".app")
const photo = document.getElementById("photo")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const beginning = document.getElementById("beginning")
const callBtn = document.getElementById("call-btn")
const text = document.querySelector(".breed")
const new1 = document.getElementById("new")

let photos = []
let breed1 = []
const numOfphoto = 8
let photoIndex = 0
const request = new XMLHttpRequest()
const api = `https://dog.ceo/api/breeds/image/random/${numOfphoto}`
let isPushed = false


function callPhotos(){
  request.open("get", api)
  request.send()
}

callBtn.addEventListener("click",() =>{
  if(isPushed){
    return;
  }
  isPushed = true;

  callPhotos()
  setTimeout(() => {
    beginning.classList.remove("beginning")
  }, 1000)
})

request.addEventListener("load", () => {
  const data = JSON.parse(request.response)
  data.message.forEach((e) => {photos.push(e)})
  data.message.forEach((e) => {breed1.push(e.split("/")[4])})
  photo.style.backgroundImage = `url(${photos[photoIndex]})`
  text.innerHTML =`${breed1[photoIndex]}` 
  // console.log(breed1)
})


prev.addEventListener("click", () => {
  if(photoIndex == 0){
    photoIndex = numOfphoto -1
    photo.style.backgroundImage = `url(${photos[photoIndex]})`
    text.innerHTML =`${breed1[photoIndex]}` 
    return;
  }
  photoIndex -= 1
  photo.style.backgroundImage = `url(${photos[photoIndex]})`
  text.innerHTML =`${breed1[photoIndex]}` 
})

next.addEventListener("click", () => {
  if(photoIndex == numOfphoto - 1){
    photoIndex = 0
    photo.style.backgroundImage = `url(${photos[photoIndex]})`
    text.innerHTML =`${breed1[photoIndex]}` 
    return;
  }
  photoIndex += 1
  photo.style.backgroundImage = `url(${photos[photoIndex]})`
  text.innerHTML =`${breed1[photoIndex]}` 
})

new1.addEventListener("click", () => {
  photos.splice(0, 8)
  breed1.splice(0, 8)
    callPhotos()
    request.addEventListener("load", () => {
      const data = JSON.parse(request.response)
      data.message.forEach((e) => {photos.push(e)})
      data.message.forEach((e) => {breed1.push(e.split("/")[4])})
      photo.style.backgroundImage = `url(${photos[photoIndex]})`
      text.innerHTML =`${breed1[photoIndex]}` 
      console.log([breed1])

    })
  })
