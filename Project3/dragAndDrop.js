const newUsers = [];

document.addEventListener("dragstart", function (event){
    event.dataTransfer.setData('text/html', event.target.id);
    classNameElement = event.target.className;
    indexOfDraggedEllement = parseInt(event.target.getAttribute("order-id"));
    console.log(indexOfDraggedEllement);
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
    if (event.target.classList.contains("droptarget") && classNameElement.includes("first-table-row")) {
        for (var x = 0; x < newUsers.length; x++) {
            if (newUsers[x] !== undefined) {
                if (newUsers[x].addresses[0] === users[indexOfDraggedEllement].addresses[0] ) {
                    counter = 1;
                }
            }
        }
        if (counter === 0) {
            console.log(indexOfDraggedEllement);
            newUsers.push(users[indexOfDraggedEllement]);
            clearTable();
            createTableAfterReorder();
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
    dragEnterElementIndex = parseInt(this.getAttribute("order-id"));
    console.log(dragEnterElementIndex);
}

function handleDragOver(e) {

}

function handleDragLeave(e) {

}

function handleDragEnd(e) {

}

function handleDrop(e) {
    event.stopPropagation();
    event.preventDefault();

    if (classNameElement === "second-table-row") {

        if (e.stopPropagation) {
            e.stopPropagation(); // Stops some browsers from redirecting.
        }

        var secondDragElIndex = parseInt(this.getAttribute("order-id"));

        var temp = 0;
        temp = newUsers[firstDragElIndex];
        newUsers[firstDragElIndex] = newUsers[secondDragElIndex];
        newUsers[secondDragElIndex] = temp;
        clearTable();

    } else if (classNameElement === "first-table-row") {
        var count = 0;
        for (var x = 0; x < newUsers.length; x++) {
            if (newUsers[x].addresses[0]  === users[indexOfDraggedEllement].addresses[0]) {
                count = 1;
            }
        }
        if (count === 0){
            var insertElement = users[indexOfDraggedEllement];
            newUsers.splice(dragEnterElementIndex, 0, insertElement);
        }
        clearTable();
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
    for (var x = 0; x < newUsers.length; x++){
        if (newUsers[x] !== undefined){
            let tr = createNode('tr'),
                td1 = createNode('td'),
                td2 = createNode('td'),
                td3 = createNode('td'),
                td4 = createNode('td'),
                td6 = createNode('td');

        tr.addEventListener("dragstart", handleDragStart, false);
        tr.addEventListener("dragenter", handleDragEnter, false);
        tr.addEventListener("dragleave", handleDragLeave, false);
        tr.addEventListener("dragover", handleDragOver, false);
        tr.addEventListener("drop", handleDrop, false);
        tr.addEventListener("dragend", handleDragEnd, false);

        tr.setAttribute("class", "second-table-row");
        tr.setAttribute("draggable", "true");

        tr.setAttribute("order-id", x);

        if (newUsers[x].names !== undefined) {
            td1.innerHTML = `${newUsers[x].names[0].display}`;
        }
        if (newUsers[x].dob !== undefined){
            td2.innerHTML = `${newUsers[x].dob.display}`;
        }
        if (newUsers[x].addresses !== undefined){
            td3.innerHTML = `${newUsers[x].addresses[0].display}`;
        }
        if (newUsers[x].phones !== undefined){
            td4.innerHTML = `${newUsers[x].phones[0].display}`;
        }

        append(tr, td1);
        append(tr, td2);
        append(tr, td3);
        append(tr, td4);
        append(table1, tr);
        }
    }
}
