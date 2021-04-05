var tasks = 0
var papers = 0
var containers = 0

function add_task() {
    tasks++
    const to_add = '<div class="check_task"><input type="checkbox" id="paper'+tasks+'"><textarea>Task</textarea></div>'
    var target = document.getElementById("paper"+papers)
    const button = document.getElementById("task_button"+containers)
    target.removeChild(button)
    target.innerHTML += to_add
    target.appendChild(button)
}

function add_paper() {
    papers++
    const to_add = ''
    var target = document.getElementById
}

function add_container() {
    
}