document.addEventListener("DOMContentLoaded", () => {
 document.querySelector('form').addEventListener('submit',function (e) {
     e.preventDefault()
       logTask((e.target["new-task-description"].value)
       )

   });
//  {console.log(task)

function logTask (task) {
const p = document.createElement('p')
p.textContent = task
// console.log(p)('tasks')
document.querySelector('#tasks').appendChild(p)
}
})