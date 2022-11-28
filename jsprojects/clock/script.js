// let rat= 1
// let state = rat == 2? time : today
// let todayDiv = document.getElementById('today');

let timeDiv = document.getElementById('time');


function getTime(){
  let now = new Date();
  // let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  month = month < 10 ? `0${month}` : month;
  date = date < 10 ? `0${date}` : date;
  ampm = hour < 12 ? `AM` : "PM";
  hour = hour < 12 ? `${hour}` : `${hour-12}`
  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;


  timeDiv.textContent = `${ampm}    ${hour} : ${minute} : ${second}`
}
let button = document.querySelector(".trans")

button.addEventListener("click",function(){
  let now = new Date();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  let date = now.getDate();
  timeDiv.textContent = `${year}년 ${month}월 ${date}일`
  rat = 2
})
button.addEventListener("mouseenter", function(){
  this.style.color = "purple"
})
button.addEventListener("mouseleave", function(e){
  this.style.color = "white"
})

let alams = document.querySelector(".alams")

alams.addEventListener("click",function(){
  let now = new Date();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let milis = now.getMilliseconds();
  // // ampm = hour < 12 ? `AM` : "PM";
  // hour = hour < 12 ? `${hour}` : `${hour-12}`
  // hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;
  milis = milis < 10 ? `0${milis}` : milis;
  timeDiv.textContent = `MS ${minute} : ${second} : ${milis}`
  // timeDiv.textContent = `${ampm}    ${hour} : ${minute} : ${second}`
})

alams.addEventListener("mouseenter", function(){
  this.style.color = "purple"
})
alams.addEventListener("mouseleave", function(e){
  this.style.color = "white"
})

// setInterval 메소드
getTime()
setInterval(getTime, 1000);

