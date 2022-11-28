// 요소 선택 및 배열 선언
const todoList = document.getElementById('todo-list')
const todoForm = document.getElementById('todo-form')
const todoReset = document.getElementById("reset")

let todoArr6 = [];

// displayTodos 함수
function displayTodos(){
  todoList.innerHTML = ""
  todoArr6.forEach((aTodo, idx) => {
    const todoNum = document.createElement("div")
    todoNum.classList.add("num")
    const todoItem = document.createElement('li')
    const todoDelBtn = document.createElement('span')
    // 버튼
    
    todoNum.innerText = idx
    todoNum.title = '해야할일'
    todoDelBtn.innerText = 'x'
    todoDelBtn.title = '클릭시 삭제'
    //클릭시 완료
    todoItem.innerText = aTodo.todoText
    todoItem.title = '클릭시 완료'
    //번호
    todoItem.classList.add(aTodo.todoDone ? 'done' : 'yet')
    todoItem.appendChild(todoNum)

    todoItem.appendChild(todoDelBtn)

    todoDelBtn.addEventListener('click', function(){
      handleTodoDelBtnClick(aTodo.todoId)
    })
    todoItem.addEventListener('click', function(){
      handleTodoItemClick(aTodo.todoId)
    })
    todoList.appendChild(todoItem)
  });
}

// handleTodoDelBtnClick 함수
function handleTodoDelBtnClick(clickedId){
  todoArr6 = todoArr6.filter(function(aTodo){
    return aTodo.todoId !== clickedId
  })
  displayTodos()
  saveTodos()
}

// handleTodoItemClick 함수
function handleTodoItemClick(clickedId){
  todoArr6 = todoArr6.map(function(aTodo){
    return aTodo.todoId !== clickedId ? 
    aTodo : { ...aTodo, todoDone: !aTodo.todoDone } 
  })
  displayTodos()
  saveTodos()
}

// saveTodos 함수
function saveTodos(){
  const todoSting = JSON.stringify(todoArr6)
  localStorage.setItem('myTodos6', todoSting)
}

// loadTodos 함수
function loadTodos(){
  const myTodos6 = localStorage.getItem('myTodos6') 
  todoArr6 = myTodos6 !== null ? JSON.parse(myTodos6) : todoArr6
  displayTodos()
}

// 할일 입력 후 제출하면 발생하는 이벤트 핸들링
todoForm.addEventListener('submit', function(e){
  e.preventDefault()
  const toBeAdded = {
    todoText: todoForm.todo.value,
    todoId: new Date().getTime(),
    todoDone: false
  }
  todoForm.todo.value = ""
  todoArr6.push(toBeAdded)
  displayTodos()
  saveTodos()
})
todoReset.addEventListener('click', function(){
  todoArr6 = []
  const todoSting = JSON.stringify(todoArr6)
  localStorage.setItem('myTodos6', todoSting)
  loadTodos()
})


loadTodos() // 시작할 때 한번만!