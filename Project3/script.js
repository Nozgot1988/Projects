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
   var e = document.getElementById("Select1");
   var strUser = e.options[e.selectedIndex].value;
   users[index].role = strUser;
}

function generateUserRow(user, index) {

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

    if (index !== 0){
        document.getElementsByTagName("TR")[index].setAttribute("draggable", "true");
        document.getElementsByTagName("TR")[index].setAttribute("class", "listItem");
    }

    tr.addEventListener('dragstart', handleDragStart, false);

    tr.setAttribute("order-id", index);

    tr.addEventListener('dragstart', handleDragStart, false);
    tr.addEventListener('dragenter', handleDragEnter, false);
    tr.addEventListener('dragover', handleDragOver, false);
    tr.addEventListener('dragleave', handleDragLeave, false);
    tr.addEventListener('drop', handleDrop, false);
    tr.addEventListener('dragend', handleDragEnd, false);

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
}

var users;
const table = document.getElementById("table-body");
const table1 = document.getElementById("table-body1");
var dragSrcEl = null;
const url = 'https://randomuser.me/api/?results=10';
var count = 0;
fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        users = data.results;
        users.map(function (user, index) {
            generateUserRow(user, index);
        });
        setSortActions();
    });

var previousArrow;
function sorting(direction) {
    let arrow = document.getElementById(direction);
    if (previousArrow) {
        previousArrow.classList.remove("red-up");
        previousArrow.classList.remove("red-bottom");
    }
    if (direction.includes("up")) {
        arrow.classList.add("red-up");
    } else {
        arrow.classList.add("red-bottom");
    }
    previousArrow = arrow;

    if (direction.includes("0")) {
        if (direction.includes("up")) {
            users = bubbleSortUp(users)
        } else {
            users = bubbleSortDown(users)
        }
    }

    if (direction.includes("1")){
        if (direction.includes("up")) {
            users = exchangeSortUp(users)
        } else {
            users.sort(sortByDateDown);
        }
    }

    if (direction.includes("2")){
        if (direction.includes("up")) {
            users.sort(sortByAddressUp);
        }
        else {
            users.sort(sortByAddressDown);
        }
    }

    if (direction.includes("3")){
        if (direction.includes("up")) {
            users.sort(sortByPhoneUp);
        } else {
            users.sort(sortByPhoneDown);
        }
    }

    clearList();
    users.map(function (user, index) {
        generateUserRow(user, index);
    });
}

function clearList() {
    var element = document.getElementsByTagName("TR"), index;

    for (index = element.length - 1; index > 0; index--) {
        element[index].parentNode.removeChild(element[index]);
    }
}

function sortByNamesUp(a, b) {
    if (a.name.last < b.name.last)
        return -1;
    if (a.name.last > b.name.last)
        return 1;
    return 0;
}

function sortByDateUp(a, b) {
    if (a.dob.date < b.dob.date)
        return -1;
    if (a.dob.date > b.dob.date)
        return 1;
    return 0;
}

function sortByAddressUp(a, b) {
    if (a.location.street < b.location.street)
        return -1;
    if (a.location.street > b.location.street)
        return 1;
    return 0;
}

function sortByPhoneUp(a, b) {
    if (a.phone < b.phone)
        return -1;
    if (a.phone > b.phone)
        return 1;
    return 0;
}

function sortByNamesDown(a, b) {
    if (a.name.last > b.name.last)
        return -1;
    if (a.name.last < b.name.last)
        return 1;
    return 0;
}

function sortByDateDown(a, b) {
    if (a.dob.date > b.dob.date)
        return -1;
    if (a.dob.date < b.dob.date)
        return 1;
    return 0;
}

function sortByAddressDown(a, b) {
    if (a.location.street > b.location.street)
        return -1;
    if (a.location.street < b.location.street)
        return 1;
    return 0;
}

function sortByPhoneDown(a, b) {
    if (a.phone > b.phone)
        return -1;
    if (a.phone < b.phone)
        return 1;
    return 0;
}



function setSortActions() {
    var bottom = document.getElementsByClassName('bottom-triangle');
    var up = document.getElementsByClassName('up-triangle');
    for (var i = 0; i < up.length; i++ ) {
        let elementId = up[i].id;
        up[i].onclick = function() {
            sorting(elementId)
        };
    }
    for (var i = 0; i < bottom.length; i++ ) {
        let elementId = bottom[i].id;
        bottom[i].onclick = function() {sorting(elementId)};
    }
}

function bubbleSortUp(arr) {
    for (var i = 0; i < arr.length; i++){
        for (var y = i-1; y >=0; y-- ){
            if(arr[y].name.last > arr[y + 1].name.last){
                var a = arr[y];
                arr[y] = arr[y + 1];
                arr[y + 1] = a;
            }
        }
    }
    return arr;
}

function bubbleSortDown(arr) {
    for (var i = 0; i < arr.length; i++){
        for (var y = i-1; y >=0; y-- ){
            if(arr[y].name.last < arr[y + 1].name.last){
                var a = arr[y];
                arr[y] = arr[y + 1];
                arr[y + 1] = a;
            }
        }
    }
    return arr;
}

function exchangeSortUp(arr) {
    var index;
    for (var i = 0; i < arr.length; i++){
        var min = arr[i];
        for (var y = i; y < arr.length; y++){
            if (min.dob.date > arr[y].dob.date){
                min = arr[y];
                index = y;
            }
        }
        var temp = arr[i];
        arr[i] = min;
        arr[index] = temp;
    }
    return arr;
}





