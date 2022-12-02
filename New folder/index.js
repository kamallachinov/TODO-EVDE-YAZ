let todoForm = document.getElementById("todoForm");
let todoInput = document.getElementById("todoInput");
let addToDo = document.getElementById("addToDo")
todoForm.addEventListener("submit", function (e) {
    e.preventDefault()
    if (todoInput.value.trim() != "") {
        createToDo()
    } else {
        alert("Fill the input, then click button")
    }
})
let list = document.querySelector("ul")
function createToDo() {
    let li = document.createElement("li")
    list.appendChild(li);
    let span = document.createElement("span")
    span.innerHTML += `${todoInput.value}`;
    let editIcon = document.createElement("i");
    editIcon.setAttribute("class", "fa-solid fa-pen-to-square")


    li.appendChild(span)
    li.appendChild(editIcon);
    let deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "fa-solid fa-trash")
    deleteIcon.setAttribute("id", "deleteIcon");
    li.appendChild(deleteIcon);
    list.appendChild(li);

    deleteIcon.addEventListener("click", function (e) {
        console.log('knopka ishledi', e.target);
        e.target.parentElement.remove()
    })
    // let editedBtn = document.getElementById("editedBtn");
    // editIcon.addEventListener("click", function () {
    //     todoInput.value = li.innerText;

    //     editedBtn.removeAttribute("class", "editedBtn")

    //     editedBtn.addEventListener("click", function () {
    //         li.innerText = todoInput.value

    //         console.log(todoInput.value);

    //     })
    //     // todoForm.addEventListener("submit", function () {

    //     //     li.innerText = todoInput.value

    //     // })

    // });

    editIcon.addEventListener("click", function (e) {
        todoInput.value = e.target.parentElement.firstElementChild.innerText
        editedBtn.removeAttribute("class", "editedBtn")
        editedBtn.addEventListener("click", function () {
            e.target.parentElement.firstElementChild.innerText = todoInput.value

            console.log(todoInput.value);

        })
        console.log(e.target.parentElement)
    })


    todoInput.value = ""
}
let deleteAllBtn = document.getElementById("deleteAllBtn")
deleteAllBtn.addEventListener("click", function () {
    list.innerHTML = "";
})




