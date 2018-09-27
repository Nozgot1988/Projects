function createNode(element) {
    return document.createElement(element);
}

function  append(parent, el) {
    return parent.appendChild(el);
}

function deleteAction(index, btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
    users.splice(index, 1);
    console.log(users);
}

function addRole(index) {
   var e = document.getElementById("Select1");""
   var strUser = e.options[e.selectedIndex].value;
   users[index].role = strUser;
   console.log(users[index].role);
}

var users;""

const table = document.getElementById("table-body");

const url = 'https://randomuser.me/api/?results=10';

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        users = data.results;

        return users.map(function (user, index) {

            console.log(index);

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

            img.src=user.picture.thumbnail;

            td1.innerHTML=`${user.name.first}
            ${user.name.last}`;

            div.innerHTML=`${user.email}`;

            td2.innerHTML=`${user.dob.date}`;

            td3.innerHTML=`${user.location.street}`;

            td4.innerHTML=`${user.phone}`;

            td5.innerHTML=`<button onclick="deleteAction(` + index + `, this)">Delete</button>`;

            td6.innerHTML=`${user.role}`;

            td7.innerHTML=`<select onchange="addRole(` + index + `)" name="drop1" id="Select1">
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>`;

            if (index != 0){
                document.getElementsByTagName("TR")[index].setAttribute("draggable", "true");
                document.getElementsByTagName("TR")[index].setAttribute("class", "listItem");
            };

            append(td, img);
            append(td1, div);
            append(tr, td);
            append(tr, td1);
            append(tr, td2);
            append(tr, td3);
            append(tr, td4);
            append(tr,td5);
            append(tr,td7);
            append(table, tr);

            var listItems = document.querySelectorAll('.listItem');

            var dragSrcEl = null;

            function handleDragStart(e) {
                this.className += " dragStartClass";
                dragSrcEl = this;

                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('text/html', this.innerHTML);
                e.dataTransfer.setDragClass("dataTransferClass");
            }

            function handleDragOver(e) {
                // if (e.preventDefault) { not needed according to my question and anwers on : http://stackoverflow.com/questions/36920665/why-if-statement-with-e-preventdefault-drag-and-drop-javascript
                e.preventDefault();
                // }
                e.dataTransfer.dropEffect = 'move'; // sets cursor
                return false;

            }

            function handleDragEnter(e) {
                // this / e.target is the current hover target.
                this.classList.add('over');
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

                for (i = 0; i < listItems.length; i++) {
                    listItem = listItems[i];
                    listItem.classList.remove('over');
                }
                dragSrcEl.classList.remove("dragStartClass");
            }


            for (i = 0; i < listItems.length; i++) {
                listItem = listItems[i];

                listItem.setAttribute("order-id", i);


                listItem.addEventListener('dragstart', handleDragStart, false);
                listItem.addEventListener('dragenter', handleDragEnter, false);
                listItem.addEventListener('dragover', handleDragOver, false);
                listItem.addEventListener('dragleave', handleDragLeave, false);
                listItem.addEventListener('drop', handleDrop, false);
                listItem.addEventListener('dragend', handleDragEnd, false);
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
            };
        })

    })




