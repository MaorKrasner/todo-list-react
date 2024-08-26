document.addEventListener('DOMContentLoaded', () => {
    const taskInputField = document.getElementById('task-input-field');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');
    const hideCompletedButton = document.getElementById('hide-completed-button');
    const deleteCompletedButton = document.getElementById('delete-completed-button');
    const showAllButton = document.getElementById('show-all-button');

    const addTask = () => {
        const taskText = taskInputField.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement('li');
            taskItem.className = 'task-item';
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <div>
                    <button class="complete-task-button">✓</button>
                    <button class="delete-task-button">🗑</button>
                </div>
            `;
            taskList.appendChild(taskItem);
            taskInputField.value = "";

            taskItem.querySelector('.complete-task-button').addEventListener('click', () => {
                taskItem.classList.toggle('completed');
            });

            taskItem.querySelector('.delete-task-button').addEventListener('click', () => {
                taskItem.remove();
            });
        }
    };

    addTaskButton.addEventListener('click', addTask);

    hideCompletedButton.addEventListener('click', () => {
        const completedTasks = document.querySelectorAll('.task-item.completed');
        completedTasks.forEach(task => task.style.display = 'none');
    });

    deleteCompletedButton.addEventListener('click', () => {
        const completedTasks = document.querySelectorAll('.task-item.completed');
        completedTasks.forEach(task => task.remove());
    });

    showAllButton.addEventListener('click', () => {
        const allTasks = document.querySelectorAll('.task-item');
        allTasks.forEach(task => task.style.display = 'flex');
    });
});