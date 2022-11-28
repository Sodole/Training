const numbersDiv = document.querySelector('.numbers')
const drawButton = document.querySelector('#draw')
const resetButton = document.querySelector('#reset')
const lottoNumbers = []
const colors = ['orange', 'skyblue', 'red', 'purple', 'green']



// paintNumber 함수
function paintNumber(number){
  const eachNumDiv = document.createElement('div')
  eachNumDiv.classList.add('eachnum')
  let colorIndex = Math.floor(number / 10)
  eachNumDiv.style.backgroundColor = colors[colorIndex]
  eachNumDiv.textContent = number
  numbersDiv.appendChild(eachNumDiv)
}

numbersDiv = 


drawButton.addEventListener('click', function(){
  while(lottoNumbers.length < 6){
    let ran = Math.floor(Math.random() * 45) + 1
    if(lottoNumbers.indexOf(ran) === -1){
      lottoNumbers.push(ran)
      paintNumber(ran)
    }
  }
  for(let i = 0; i< 45; i++)
  
  while(lottoNumbers)
})



resetButton.addEventListener('click', function(){
  //로또 배열 빈 상태로 초기화
  lottoNumbers.splice(0, 44)
  // innerHTML : 해당 노드 안에 있는 HTML코드
  numbersDiv.innerHTML = ""
})