const BASE_URL = "http://localhost:8000/tasks/";

const tasklist = document.querySelector('.tasklist');


//function for get all tasks from server

async function fetchTasks(page = 1) {
    try {
        const response = await fetch(`${BASE_URL}?page=${page}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Token ${localStorage.getItem('token')}`
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch tasks. Status: ${response.status}`);
        }

        const data = await response.json();
        const tasks = data.results;
        let taskListRenderString = '';

        for (let task of tasks) {
            taskListRenderString += renderTaskTamplate(task);
        }

        tasklist.innerHTML = taskListRenderString;
    } catch (error) {
        console.error("An error occurred while fetching tasks:", error);
    }
}




async function fetchNextTaskPage(page){
    const response = await fetch(`${BASE_URL}?page=${page}`, {
        method: 'GET',
        headers : {
            'Content-type': "application/json",
            "Authorization": `Token ${localStorage.getItem('token')}` // Corrected typo here
        },
    });
    const data = await response.json();
    return data
    
}


//function fror creating task 

async function createTask(task) {
    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Token ${localStorage.getItem('token')}` // Corrected typo here
            },
            body: JSON.stringify(task)
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
        headers: {
            "Content-type": "application/json",
            "Authorization": `Token ${localStorage.getItem('token')}` // Corrected typo here
        },
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
                "Authorization": `Token ${localStorage.getItem('token')}` // Corrected typo here
                
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
    const response = await fetch(`${BASE_URL}${task_id}/`,{
        method: 'GET',
        headers : {
            'Content-type': "application/json",
            "Authorization": `Token ${localStorage.getItem('token')}` // Corrected typo here
        },
    });
    return await response.json()
}




async function fetchAllTasks(size){
    const response = await fetch(`${BASE_URL}?size=${size}` ,{
        method: 'GET',
        headers : {
            'Content-type': "application/json",
            "Authorization": `Token ${localStorage.getItem('token')}` // Corrected typo here
        },
    }
    );
    const data = await response.json();
    console.log("clicked")
    return data
}



async function fetchFalseTasks(){
    const response = await fetch(`${BASE_URL}?complited=false` , {
        method: 'GET',
        headers : {
            'Content-type': "application/json",
            "Authorization": `Token ${localStorage.getItem('token')}` // Corrected typo here
        },
    }
    );
    const data = await response.json();
    return data;
}