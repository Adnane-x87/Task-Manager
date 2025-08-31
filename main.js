let tasks = [
    {
        "title" : "reading a book",
        "date" : "28/08/2025",
        "isDone" : false
    },
    {
        "title" : "finish the final project",
        "date" : "28/08/2025",
        "isDone" : false
    },
    {
        "title" : "finish js course",
        "date" : "28/08/2025",
        "isDone" : false
    },
]
function pageTask(){
    document.getElementById("tas").innerHTML="";
    let index = 0
    let edit = 0
for(task of tasks){
    let content =
    `
           <div class="task ${task.isDone ? 'done':''}"><div style="width: 70%;">
                        <h2>${task.title} </h2>
                        <div>
                            <span><strong>${task.date}</strong><i class="fa-solid fa-calendar-days"></i></span>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; width:20% ;"> 
                        <button onclick="deleteTask(${index})" class="circular" style="background-color: red; color: white;"><i class="fa-solid fa-trash"></i></button>
                         ${task.isDone ? `
                                     <button  onclick="completeTask(${index})" class="circular" style="background-color: #E62727; color: white;"><i class="fa-solid fa-xmark"></i></button>

                            ` : ` 
                        
                            <button  onclick="completeTask(${index})" class="circular" style="background-color: green; color: white;"><i class="fa-solid fa-check"></i></button>

                            `}
                        <button onclick="ediTtask(${index})" class="circular" style="background-color: blue; color: white;"><i class="fa-solid fa-pen-to-square"></i></button>
                    </div>
                </div>
    `
document.getElementById("tas").innerHTML+=content
index++
}
}
pageTask()

document.getElementById("lb").addEventListener("click",function(){
    let tSKname =prompt("Add task name")
    let now =new Date()
    let date = now.getDate() + "/" + (now.getMonth()+1) + "/" + now.getFullYear() 
     let taskObj = {
        "title" : tSKname,
        "date" : date,
        "iSdone": false,
     } 
     tasks.push(taskObj)
     pageTask()
})

function deleteTask(index){
    let ts = tasks[index]
   let isConfirm = confirm("Are you sure you want to remove " + ts.title +" ?")
   if(isConfirm){
     tasks.splice(index,1) 
      pageTask()

   }

}
function ediTtask(index){
    let ts = tasks[index]
    let newTaskname =prompt("Add a new task name",ts.title)
    ts.title =newTaskname
       pageTask()
}
function completeTask(index){
      let ts = tasks[index]
      if(ts.isDone){
         ts.isDone = false
      }else{
        ts.isDone = true
      }
     
      pageTask()
}
