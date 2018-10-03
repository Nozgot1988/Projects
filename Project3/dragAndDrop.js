function handleDragStart(e) {
    // this.className += " dragStartClass";
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    console.log("move");
}

function handleDragOver(e) {
   if (e.preventDefault){
       e.preventDefault();
   }
    console.log("over....")
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

function handleDrop(e) {
    if (dragSrcEl.classList.contains("switch")) {
        createNewTabke();
    } else {
        e.stopPropagation();
        if (dragSrcEl !== this) {
            // Set the source column's HTML to the HTML of the columnwe dropped on.
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }
    }
};

function handleDragEnd(e) {
    var listItems = document.querySelectorAll('.listItem');
    for (i = 0; i < listItems.length; i++) {
        listItem = listItems[i];
        listItem.classList.remove('over');
    }
    dragSrcEl.classList.remove("dragStartClass");
}

function reOrder(listItems) {
    var tempListItems = listItems;
    tempListItems = Array.prototype.slice.call(tempListItems, 0);

    tempListItems.sort(function(a, b) {
        return a.getAttribute("order-id") - b.getAttribute("order-id");
    });



    var parent = document.getElementById('user-table1');
    parent.innerHTML = "";

    for (var i = 0, l = tempListItems.length; i < l; i++) {
        parent.appendChild(tempListItems[i]);
    }
}

var index = 0;
function dropOverride(e) {
    if (dragSrcEl.classList.contains("switch")){
        createNewTabke();
    } else if (this.classList.contains("switch1")){
        handleDragStart();
    console.log("other switch");
    if (dragSrcEl != this) {
        // Set the source column's HTML to the HTML of the columnwe dropped on.
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
}

}

function createNewTabke() {
    dragSrcOrderId = parseInt(dragSrcEl.getAttribute("order-id"));
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

        tr.setAttribute("draggable", "true");

        tr.className += " listItem";

        tr.className += " order-id";

        tr.className += " switch1";

        tr.setAttribute("order-id", index);

        img.src = users[dragSrcOrderId].picture.thumbnail;

        td1.innerHTML = `${users[dragSrcOrderId].name.first}
            ${users[dragSrcOrderId].name.last}`;

        div.innerHTML = `${users[dragSrcOrderId].email}`;

        td2.innerHTML = `${users[dragSrcOrderId].dob.date}`;

        td3.innerHTML = `${users[dragSrcOrderId].location.street}`;

        td4.innerHTML = `${users[dragSrcOrderId].phone}`;

        td6.innerHTML = `${users[dragSrcOrderId].role}`;

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