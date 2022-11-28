// 요소 선택 및 상수 선언
const numbersDiv = document.querySelector('.numbers')
const bonusDiv = document.querySelector('.bonus')
const drawButton = document.querySelector('#draw')
const resetButton = document.querySelector('#reset')
const lottoNumbers = []
const lottopan = []

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

function paintBonus(number){
  console.log(number)
  const eachNumDiv = document.createElement('div')
  eachNumDiv.classList.add('eachnum')
  let colorIndex = Math.floor(number / 10)
  eachNumDiv.style.backgroundColor = colors[colorIndex]
  eachNumDiv.textContent = number
  bonusDiv.appendChild(eachNumDiv)
}

// function paintNumber(lottoNumbers){
//   const eachNumsDiv = document.createElement('span')
//   eachNumDiv.textContent = number
//   numbersDiv.appendChild(eachNumsDiv)
// }

// drawButton.addEventListener('click', function(){
  // if(lottopan.length < 6){
    drawButton.addEventListener('click', function(){
      while(lottoNumbers.length < 6){
        let ran = Math.floor(Math.random() * 45) + 1
        if(lottoNumbers.indexOf(ran) === -1){
          lottoNumbers.push(ran)
          paintNumber(ran)
        }
      }

      while(lottoNumbers.length < 7){
        let ran = Math.floor(Math.random() * 45) + 1
        if(lottoNumbers.indexOf(ran) === -1){
          lottoNumbers.push(ran)
          paintBonus(ran)
        }
      }
      }
      )

  // }
  // if(lottopan.indexOf(lottoNumbers) === -1){
  //   lottopan.push(lottoNumbers)
  //   paintNumber(lottoNumbers)
// }})

// drawButton.addEventListener('click', function(){
//   for(i = 0; i < 45; i++){
//     lottopan.push(i+1)
//     paintNumber(i+1)
//   }  
// })
// 다시 버튼 클릭 이벤트 핸들링

resetButton.addEventListener('click', function(){
  //로또 배열 빈 상태로 초기화
  lottoNumbers.splice(0, 7)
  // innerHTML : 해당 노드 안에 있는 HTML코드
  numbersDiv.innerHTML = ""
  bonusDiv.innerHTML = ""
})

// drawButton.addEventListener('click', function(){
//   if(lottoNumbers.length < 6){
//     let ran = Math.floor(Math.random() * 45) + 1
//     if(lottoNumbers.indexOf(ran) === -1){
//       lottoNumbers.push(ran)
//       paintNumber(ran)
//     }
//   }
// })
