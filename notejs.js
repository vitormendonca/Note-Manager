// Show/Hide Edit Input
const ul = document.querySelector('ul');
ul.addEventListener('click', function (e) {
    if (e.target.className == "fas fa-edit fa-lg") {
        var targetp = e.target.parentNode.parentNode.lastElementChild;
        if (targetp.style.display === "none") {
            targetp.style.display = "block";
        }
        else {
            targetp.style.display = "none"
        }
    }
})
// Enter or Click to enable to edit text/input
ul.addEventListener('keyup', function (e) {
    if (e.target.className == "inputnote") {
        if (e.key === "Enter") {
            if (e.target.hasAttribute("readonly")) {
                e.target.removeAttribute("readonly")
            }
            else {
                e.target.setAttribute("readonly", "");
            }
        }

    }
})
ul.addEventListener('click', function (e) {
    if (e.target.className == "inputnote") {
        e.target.removeAttribute("readonly");
    }
})






// Remove Note
ul.addEventListener('click', function (e) {
    if (e.target.className == "fa fa-window-close fa-lg") {
        li = document.querySelector('ul li');
        ul.removeChild(li);
    }
})


//Hide or Show Notes
const hishowbtn = document.querySelector('#hide-notes label');
const hidecheckbox = document.getElementById("hide");
hishowbtn.addEventListener('click', function (e) {
    if (hidecheckbox.checked) {
        e.target.textContent = "Show Notes";
        ul.style.display = "none";
    }
    else {
        e.target.textContent = "Hide Notes";
        ul.style.display = "block";
    }
})

//Add Note
const addbtn = document.querySelector('#addnotes input[type="submit"]');
const inputadd = document.getElementById('add');
addbtn.addEventListener('click', function (e) {
    if (inputadd.value == "") {
        alert("Digite um título para sua nota.")
    }
    else {
        var newli = document.createElement('li');
        var newspanremove = document.createElement('span');
        var newiconremove = document.createElement('i');
        var newspanedit = document.createElement('span');
        var newiconedit = document.createElement('i');
        var newp = document.createElement('p');
        var newinput = document.createElement('input');
        var newinputcheck = document.createElement('input');

        newli.className = "linotes";
        newspanremove.className = "clickicon window-close";
        newiconremove.className = "fa fa-window-close fa-lg";
        newspanedit.className = "clickicon edit";
        newiconedit.className = "fas fa-edit fa-lg";
        newp.className = "titleofnotes";
        newinput.className = "inputnote";
        newinput.setAttribute("type", "text");
        newinput.setAttribute("value", "");

        ul.appendChild(newli).appendChild(newspanremove).appendChild(newiconremove);
        newli.appendChild(newspanedit).appendChild(newiconedit);
        newli.appendChild(newp);
        newli.appendChild(newinput);

        newp.innerHTML = inputadd.value;
    }
})

//Search Bar
searchbar = document.getElementById('searchbar');
searchbar.addEventListener('keyup', function (e) {
    valuesearch = e.target.value.toUpperCase();
    Array.from(ul.children).forEach(function (target) {
        valuetitleli = target.lastElementChild.previousElementSibling.textContent.toUpperCase();
        if (valuetitleli.indexOf(valuesearch) > -1) {
            target.style.display = "block"
        }
        else {
            target.style.display = "none"
        }

    })

})

















