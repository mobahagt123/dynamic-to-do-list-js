

document.addEventListener('DOMContentLoaded', ()=>{

    // select elements
    const addButton = document.getElementById('add-task-btn')
    const taskInput = document.getElementById('task-input')
    const taskLists = document.getElementById('task-list')

    function addTask(){

        const taskText = taskInput.value.trim()

        if(!taskText){
            alert('Please Enter a task');

        } else{

            const task = document.createElement('li')
            task.textContent = taskText

            const removeBtn = document.createElement('button')
            removeBtn.textContent = 'Remove'

            removeBtn.classList.add('remove-btn')

            removeBtn.addEventListener('click', (event) => {
                if(event.target.className == 'remove-btn'){
                    const li = event.target.parentElement
                    taskLists.removeChild(li)
                }

            })


            // append created elements tasks and delete button
            task.appendChild(removeBtn)
            taskLists.appendChild(task)

            // clear task input 
            taskInput.value = ''
        }
    }

    addButton.addEventListener('click',(event) =>{
        addTask()
    })

    taskInput.addEventListener('keypress', (event) => {
        if(event.key == 'Enter'){
            addTask()
        }

    })


})