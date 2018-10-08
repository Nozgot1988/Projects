const newUsers = [];
var index = 0;
function createNewTable() {
    if (index < 10) {
        let div = createNode('div'),
            img = createNode('img'),
            tr = createNode('tr'),
            td = createNode('td'),
            td1 = createNode('td'),
            td2 = createNode('td'),
            td3 = createNode('td'),
            td4 = createNode('td'),
            td5 = createNode('td'),
            td6 = createNode('td'),
            td7 = createNode("td");

        tr.addEventListener("dragstart", handleDragStart, false);
        tr.addEventListener("dragenter", handleDragEnter, false);
        tr.addEventListener("dragleave", handleDragLeave, false);
        tr.addEventListener("dragover", handleDragOver, false);
        tr.addEventListener("drop", handleDrop, false);
        tr.addEventListener("dragend", handleDragEnd, false);

        tr.setAttribute("class", "second-table-row");
        tr.setAttribute("draggable", "true");

        tr.setAttribute("order-id", index);

        img.src = newUsers[index].picture.thumbnail;

        td1.innerHTML = `${newUsers[index].name.first}
            ${newUsers[index].name.last}`;

        div.innerHTML = `${newUsers[index].email}`;

        td2.innerHTML = `${newUsers[index].dob.date}`;

        td3.innerHTML = `${newUsers[index].location.street}`;

        td4.innerHTML = `${newUsers[index].phone}`;

        td6.innerHTML = `${newUsers[index].role}`;

        append(td, img);
        append(td1, div);
        append(tr, td);
        append(tr, td1);
        append(tr, td2);
        append(tr, td3);
        append(tr, td4);
        append(table1, tr);
        index++;
    }
}

document.addEventListener("dragstart", function (event){
    event.dataTransfer.setData('text/html', event.target.id);
    classNameElement = event.target.className;
    console.log(classNameElement);
    indexOfDraggedEllement = parseInt(event.target.getAttribute("order-id"));
});


document.addEventListener("drag", function(event){
    // console.log("drag");
});

document.addEventListener("dragend", function (event) {
    // console.log("end");
});

document.addEventListener("dragover", function (event) {
    event.preventDefault();

});

document.addEventListener("dragleave", function (event) {

});

document.addEventListener("drop", function (event) {
    event.stopPropagation();
    event.preventDefault();
    var counter = 0;
    if (event.target.classList.contains("droptarget")) {
        for (var x = 0; x < newUsers.length; x++) {
            if (newUsers[x] !== undefined) {
                if (newUsers[x].email === users[indexOfDraggedEllement].email) {
                    counter = 1;
                }
            }
        }
        if (counter === 0) {
            newUsers.push(users[indexOfDraggedEllement]);
            createNewTable();
        }
    }
});

var dragSrcEl = null;

function handleDragStart(e) {
    dragSrcEl = this;
    console.log(dragSrcEl);
    firstDragElIndex = parseInt(dragSrcEl.getAttribute("order-id"));
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnter(e) {
    dragEnterElementIndex = (this.getAttribute("order-id"));
    console.log(dragEnterElementIndex);
}

function handleDragOver(e) {

}

function handleDragLeave(e) {

}

function handleDragEnd(e) {

}

function handleDrop(e) {

    clearTable();

    if (classNameElement === "second-table-row") {

        if (e.stopPropagation) {
            e.stopPropagation(); // Stops some browsers from redirecting.
        }

        var secondDragElIndex = parseInt(this.getAttribute("order-id"));

        var temp = 0;
        temp = newUsers[firstDragElIndex];
        newUsers[firstDragElIndex] = newUsers[secondDragElIndex];
        newUsers[secondDragElIndex] = temp;
    } else if (classNameElement === "first-table-row") {
        var insertElement = users[indexOfDraggedEllement];
        newUsers.splice(dragEnterElementIndex, 0, insertElement);
    }
    createTableAfterReorder();
    return false;


}

function clearTable() {
    var elements = document.getElementsByClassName("second-table-row"), index;

    for (index = elements.length -1; index >= 0; index--) {
        elements[index].parentNode.removeChild(elements[index]);
    }
}

function createTableAfterReorder() {
    console.log(newUsers);
    for (var x = 0; x < newUsers.length; x++){
        if (newUsers[x] !== undefined){
        let div = createNode('div'),
            img = createNode('img'),
            tr = createNode('tr'),
            td = createNode('td'),
            td1 = createNode('td'),
            td2 = createNode('td'),
            td3 = createNode('td'),
            td4 = createNode('td'),
            td5 = createNode('td'),
            td6 = createNode('td'),
            td7 = createNode("td");

        tr.addEventListener("dragstart", handleDragStart, false);
        tr.addEventListener("dragenter", handleDragEnter, false);
        tr.addEventListener("dragleave", handleDragLeave, false);
        tr.addEventListener("dragover", handleDragOver, false);
        tr.addEventListener("drop", handleDrop, false);
        tr.addEventListener("dragend", handleDragEnd, false);

        tr.setAttribute("class", "second-table-row");
        tr.setAttribute("draggable", "true");

        tr.setAttribute("order-id", x);

        img.src = newUsers[x].picture.thumbnail;

        td1.innerHTML = `${newUsers[x].name.first}
                ${newUsers[x].name.last}`;

        div.innerHTML = `${newUsers[x].email}`;

        td2.innerHTML = `${newUsers[x].dob.date}`;

        td3.innerHTML = `${newUsers[x].location.street}`;

        td4.innerHTML = `${newUsers[x].phone}`;

        td6.innerHTML = `${newUsers[x].role}`;

        append(td, img);
        append(td1, div);
        append(tr, td);
        append(tr, td1);
        append(tr, td2);
        append(tr, td3);
        append(tr, td4);
        append(table1, tr);
        }
    }
}
