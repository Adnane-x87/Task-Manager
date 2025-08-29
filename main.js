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

for(task of tasks){
    let content =
    `
           <div class="task"><div style="width: 70%;">
                        <h2>${task.title} </h2>
                        <div>
                            <span><strong>${task.date}</strong><i class="fa-solid fa-calendar-days"></i></span>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; width:20% ;"> 
                        <button class="circular" style="background-color: red; color: white;"><i class="fa-solid fa-trash"></i></button>
                        <button class="circular" style="background-color: green; color: white;"><i class="fa-solid fa-check"></i></button>
                        <button class="circular" style="background-color: blue; color: white;"><i class="fa-solid fa-pen-to-square"></i></button>
                    </div>
                </div>
    `
document.getElementById("tas").innerHTML+=content
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
