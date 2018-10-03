function handleDragStart(e) {
    this.className += " dragStartClass";
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
    // if (e.preventDefault) { not needed according to my question and anwers on : http://stackoverflow.com/questions/36920665/why-if-statement-with-e-preventdefault-drag-and-drop-javascript
    e.preventDefault();
    // }
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
    var listItems = document.querySelectorAll('.listItem');
    e.stopPropagation(); // stops the browser from redirecting.
    dragSrcOrderId = parseInt(dragSrcEl.getAttribute("order-id"));
    dragTargetOrderId = parseInt(this.getAttribute("order-id"));
    var tempThis = this;


    // Don't do anything if dropping the same column we're dragging.
    // and
    // check if only one difference and then do not execute
    // && ((Math.abs(dragSrcOrderId - dragTargetOrderId)) != 1)
    if (dragSrcEl != this) {
        // Set the source column's HTML to the HTML of the column we dropped on.
        var tempThis = this;

        function makeNewOrderIds(tempThis) {
            // check if up or down movement

            dragSrcEl.setAttribute("order-id", dragTargetOrderId);
            tempThis.setAttribute("order-id", dragTargetOrderId);

            //  find divs between old and new location and set new ids - different in up or down movement (if else)
            if (dragSrcOrderId < dragTargetOrderId) {
                for (i = dragSrcOrderId + 1; i < dragTargetOrderId; i++) {
                    listItems[i].setAttribute("order-id", i - 1);
                    // set new id src
                    dragSrcEl.setAttribute("order-id", dragTargetOrderId - 1);
                }
            } else {
                for (i = dragTargetOrderId; i < dragSrcOrderId; i++) {
                    listItems[i].setAttribute("order-id", i + 1);
                    // set new id src
                    dragSrcEl.setAttribute("order-id", dragTargetOrderId);

                }
            }

        };
        makeNewOrderIds(tempThis);


        dragSrcEl.classList.remove("dragStartClass");

        reOrder(listItems);


    } else {

        dragSrcEl.classList.remove("dragStartClass");
        return false;

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



    var parent = document.getElementById('table-body');
    parent.innerHTML = "";

    for (var i = 0, l = tempListItems.length; i < l; i++) {
        parent.appendChild(tempListItems[i]);
    }
}

function dropOverride(e) {
    e.stopPropagation();
    dragSrcOrderId = parseInt(dragSrcEl.getAttribute("order-id"));
    var clone = users[dragSrcOrderId];

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

    img.src=clone.picture.thumbnail;

    td1.innerHTML=`${clone.name.first}
            ${clone.name.last}`;

    div.innerHTML=`${clone.email}`;

    td2.innerHTML=`${clone.dob.date}`;

    td3.innerHTML=`${clone.location.street}`;

    td4.innerHTML=`${clone.phone}`;

    td6.innerHTML=`${clone.role}`;

    table1.addEventListener('dragstart', handleDragStart, false);
    table1.addEventListener('dragenter', handleDragEnter, false);
    table1.addEventListener('dragover', handleDragOver, false);
    table1.addEventListener('dragleave', handleDragLeave, false);
    table1.addEventListener("drop", dropOverride, false);


    append(td, img);
    append(td1, div);
    append(tr, td);
    append(tr, td1);
    append(tr, td2);
    append(tr, td3);
    append(tr, td4);
    append(table1, tr);
}