fetchTasks();





const addTaskForm = document.getElementById('add-task-form')
const addTaskbutton = document.getElementById('add_task');
const updateTaskbutton = document.getElementById('update_task')

addTaskForm.addEventListener('submit' , async (e)=> {
    e.preventDefault();
})


addTaskbutton.addEventListener('click' , async function(e){
    if (e.target.nodeName == "BUTTON"){
        const formdata = new FormData(addTaskForm);
        const taskarray = [ {
            title: formdata.get('title'),
            description: formdata.get("description"),
            author_id : formdata.get("author_id"),
            category_id : [formdata.get("category_id")]
        }
        ]
        
        // const task = taskarray[0]
        await createTask(taskarray);
        fetchTasks();
        addTaskForm.reset();
    }
    
});



updateTaskbutton.addEventListener('click', async function (e) {
    const formdata = new FormData(addTaskForm);
    const task = {
        title: formdata.get("title"),
        description: formdata.get('description'),
    };
    const task_id = formdata.get('task-id');
    const updatedTask = await updateTask(task_id, task);

    const updatedTaskElement = document.querySelector(`li[data-task-id="${task_id}"]`);
    if (updatedTaskElement) {
        updatedTaskElement.outerHTML = renderTaskTamplate(updatedTask);
    }

    addTaskForm.reset();
});



const ul_tasklist = document.querySelector('.tasklist');

let tasks = [];


ul_tasklist.addEventListener('click' , async (e)=> {
    if (e.target.nodeName ==='BUTTON'){
    const action = e.target.getAttribute('data-action');
        //delete task
        if (action === "delete"){
            const li = e.target.closest("li");
            const task_id = li.getAttribute('data-task-id');
            await deleteTask(task_id);
            fetchTasks();
        }

        //update 
        if (action === 'update'){
            //get task id from parent element's data atribute
            const li = e.target.closest("li")
            const task_id = li.getAttribute('data-task-id');
            //fetch task from server
            const task = await fetchTask(task_id)
            //get input element
            const titleInputElement = document.getElementById('inputText')
            const descriptionInputElement = document.getElementById('inputText2')
            const taskIdInputElement = document.getElementById('task__id')
            // set input values 
            titleInputElement.value = task.title;
            descriptionInputElement.value = task.description;
            taskIdInputElement.value = task.id
        }
        
        //complited
        //complited
        if (action === "complited") {
            const li = e.target.closest("li");
            const task_id = li.getAttribute("data-task-id");
            const task = await fetchTask(task_id);

            const updatedTask = { ...task, complited: !task.complited };

            await updateTask(task_id, updatedTask);
            fetchTasks(corrent_page);
        }
        
    
    }
    
});

// TODO HOME 
const todo_home = document.querySelector(".HOME")
todo_home.addEventListener("click" , async function(){
    fetchTasks(10)
} )




const next = document.querySelector(".pagination_buttons");
let corrent_page = 1;

next.addEventListener("click", async function (e) {
    const action = e.target.getAttribute("data-action");
    try {
        // pushing next button
        if (action === "next") {
            next_page_tasks = await fetchNextTaskPage(corrent_page + 1);
            const tasklist = document.querySelector(".tasklist");
            let taskListRenderString = '';
            const tasks = next_page_tasks.results;
            for (let task of tasks) {
                taskListRenderString = taskListRenderString + renderTaskTamplate(task);
            }
            tasklist.innerHTML = taskListRenderString;
            corrent_page++;
            if (corrent_page > next_page_tasks.total_pages) {
                console.log("no more pages");
                corrent_page = next_page_tasks.total_pages; // Ensure corrent_page doesn't exceed total_pages
            }
        }
        
        // pushing previous button
        if (action === "previous") {
            previous_page_tasks = await fetchNextTaskPage(corrent_page - 1);
            const tasklist = document.querySelector(".tasklist");
            let taskListRenderString = '';
            const tasks = previous_page_tasks.results;

            for (let task of tasks) {
                taskListRenderString = taskListRenderString + renderTaskTamplate(task);
            }
            tasklist.innerHTML = taskListRenderString;
            corrent_page--;
            if (corrent_page < 1) {
                console.log("no more pages");
                corrent_page = 1; // Ensure corrent_page doesn't go below 1
            }
        }
    } catch (error) {
        console.log("error");
    }
});





// show all tasks

const all = document.querySelector(".all");
all.addEventListener("click" , async function() {
    const main_data = await fetchAllTasks(5);
    const total_pages = main_data.total_pages;
    const page_size = main_data.page_size;
    size = total_pages*page_size;
    const data = await fetchAllTasks(size);
    const all_tasks = data.results;

    const tasklist = document.querySelector(".tasklist"); // Replace with your element ID
    taskListRenderString = ""
    for (let task of all_tasks) {
        taskListRenderString = taskListRenderString + renderTaskTamplate(task);
    }
    tasklist.innerHTML = taskListRenderString;
    
})



//clear complited 



let clear_complited = document.querySelector(".clear_complited");
clear_complited.addEventListener("click" , async function() {
    const data = await fetchFalseTasks();
    const false_tasks = data.results;
    const size = data.total_pages*data.page_size
    const fetch_all_Tasks = fetchAllTasks(size)

    let taskListRenderString = ""
    for (let task of false_tasks) {
        taskListRenderString = taskListRenderString + renderTaskTamplate(task);
    }
    tasklist.innerHTML = taskListRenderString;
    } 

);


