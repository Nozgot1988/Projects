function handleDragStart(e) {
    // this.className += " dragStartClass";
    dragSrcEl = this;
    dragSrcOrderId = parseInt(dragSrcEl.getAttribute("order-id"));
    console.log(dragSrcEl);

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    console.log("move");
}

function handleDragOver(e) {
    e.preventDefault();
    console.log("over....");
    console.log(newUsers);
    e.dataTransfer.dropEffect = 'move'; // sets cursor
    return false;

}

function handleDragEnter(e) {
    // this / e.target is the current hover target.
    this.classList.add('over');
    console.log("enter...")
}

function handleDragLeave(e) {
    this.classList.remove('over'); // this / e.target is previous target element.
}

function handleDropInsideOfTheTable(e) {
        console.log("Hello");
        e.preventDefault();

        if (e.stopPropagation) {
            e.stopPropagation(); // Stops some browsers from redirecting.
        }

        if (dragSrcEl !== this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }

        return false
}

function handleDropFromTable(e) {
    if (dragSrcEl.classList.contains("switch")) {
        var counter = 0;
        for (var x = 0; x < newUsers.length; x++){
            if (newUsers[x] !== undefined){
                if (newUsers[x].email === users[dragSrcOrderId].email) {
                    console.log(newUsers[x].email);
                    console.log(users[dragSrcOrderId].email);
                    counter = 1;
                }
            }
        }
        console.log(counter);
        if (counter === 0){
            createNewTabke();
        }

    }
}

function handleDragEnd(e) {
    var listItems = document.querySelectorAll('.selectedUsers');
    for (i = 0; i < listItems.length; i++) {
        listItem = listItems[i];
        listItem.classList.remove('over');
    }
    dragSrcEl.classList.remove("dragStartClass");
}

const newUsers = [];
var index = 0;
function createNewTabke() {
    console.log(users);
    var checkValue = parseInt(dragSrcEl.getAttribute("checkValue"));
    if (index < 10) {
        newUsers[dragSrcOrderId] = users[dragSrcOrderId];
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

        tr.setAttribute("draggable", "true");
        tr.className += " checkValue";

        tr.setAttribute("checkValue", checkValue);

        tr.className += " order-id";

        tr.className += " selectedUsers";

        tr.setAttribute("order-id", index);

        img.src = newUsers[dragSrcOrderId].picture.thumbnail;

        td1.innerHTML = `${newUsers[dragSrcOrderId].name.first}
            ${newUsers[dragSrcOrderId].name.last}`;

        div.innerHTML = `${newUsers[dragSrcOrderId].email}`;

        td2.innerHTML = `${newUsers[dragSrcOrderId].dob.date}`;

        td3.innerHTML = `${newUsers[dragSrcOrderId].location.street}`;

        td4.innerHTML = `${newUsers[dragSrcOrderId].phone}`;

        td6.innerHTML = `${newUsers[dragSrcOrderId].role}`;

        tr.addEventListener('dragstart', handleDragStart, false);
        tr.addEventListener('dragenter', handleDragEnter, false);
        tr.addEventListener('dragend', handleDragEnd, false);
        tr.addEventListener('dragleave', handleDragLeave, false);
        // tr.addEventListener('dragover', handleDragOver, false);
        tr.addEventListener('drop', handleDropInsideOfTheTable, false);

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
