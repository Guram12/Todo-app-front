const BASE_URL = "http://localhost:8000/tasks/";

const tasklist = document.querySelector('.tasklist');


//function for get all tasks from server

async function fetchTasks(page = 1) {
    const response = await fetch(`${BASE_URL}?page=${page}`);
    const data = await response.json();
    const tasks = data.results;

    let taskListRenderString = '';
    for (let task of tasks) {
        taskListRenderString = taskListRenderString + renderTaskTamplate(task);
    }
    tasklist.innerHTML = taskListRenderString;
}




async function fetchNextTaskPage(page){
    const response = await fetch(`${BASE_URL}?page=${page}`);
    const data = await response.json();
    return data
    
}


//function fror creating task 

async function createTask(task){
    try {
        const response = await fetch(BASE_URL , {
            method: "POST",
            headers: {
                "Content-type": "application/json", 
            },
            body : JSON.stringify(task)
        });
            const json = await response.json();
            return json;
    } catch (error) {
        throw new Error(error);
    }
}


async function deleteTask(task_id){
    try {
        const response = await fetch(`${BASE_URL}${task_id}`,{
        method : 'DELETE',
    })
    } catch (error) {
        throw new Error(error)  
    }

}


async function updateTask(task_id, task){
    try {
        const response = await fetch(`${BASE_URL}${task_id}/`,{
            method: "PUT",
            headers : {
                'Content-type': "application/json",
            },
            body : JSON.stringify(task)
        })
            const json = await response.json();
            return json;
    } catch (error) {
        throw new Error(error)
    }
}


async function fetchTask(task_id){
    const response = await fetch(`${BASE_URL}${task_id}/`);
    return await response.json()
}




async function fetchAllTasks(size){
    const response = await fetch(`${BASE_URL}?size=${size}`);
    const data = await response.json();
    return data
}



async function fetchFalseTasks(){
    const response = await fetch(`${BASE_URL}?complited=false`);
    const data = await response.json();
    return data;
}