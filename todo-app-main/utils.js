function renderTaskTamplate(task){
    return `
        <li data-task-id='${task.id}' class="${task.complited ? "complited" : "" }"  > 
            <div class="parentdiv" >
                <div class="flex-item firstd" >
                    <button  class="check" data-action="complited" > ${task.complited ? "✅" : "✔️" } </button>
                </div>
                <div class="flex-item larger" >
                    id : ${task.id} | ${task.title}
                </div>
                <div class="flex-item thirdd">
                    <button  data-action="delete">❌</button>
                    <button  data-action="update">✒️</button>
                </div>
            </div>
        </li>
    `;
}

