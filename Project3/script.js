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



function generateUserRow(users) {
    clearFirstTable();
    for (let x = 0; x < 10; x++){
    let div = createNode('div'),
        div1 = createNode('div'),
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

    // img.src=user.picture.thumbnail;

    div1.style.backgroundImage = "url(" + users[x].picture.thumbnail + ")";

    div1.style.width = "48px";

    div1.style.height = "48px";

    div1.style.borderRadius = "24px";

    td1.innerHTML = `${users[x].name.first}
            ${users[x].name.last}`;

    div.innerHTML = `${users[x].email}`;

    td2.innerHTML = `${users[x].dob.date}`;

    td3.innerHTML = `${users[x].location.street}`;

    td4.innerHTML = `${users[x].phone}`;

    td5.innerHTML = `<button onclick="deleteAction(` + x + `, this)">Delete</button>`;

    td6.innerHTML = `${users[x].role}`;

    td7.innerHTML = `<select onchange="addRole(` + x + `)" name="drop1" id="Select1">
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>`;

    tr.setAttribute("draggable", "true");
    tr.setAttribute("order-id", x);

    img.setAttribute("draggable", "false");
    img.style.userSelect = "none";
    tr.className += "first-table-row";

    append(td, div1);
    append(td1, div);
    append(tr, td);
    append(tr, td1);
    append(tr, td2);
    append(tr, td3);
    append(tr, td4);
    append(tr, td5);
    append(tr, td7);
    append(table, tr);
    }
}

var users;
const table = document.getElementById("table-body");
const table1 = document.getElementById("table-body1");
const container1 = document.getElementById("container1");
container1.classList += " droptarget";

var dragSrcEl = null;
var url = 'https://randomuser.me/api/?page=1&results=10';
var count = 0;
fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        users = data.results;
        console.log(users);
        // users.map(function (user, index) {
        generateUserRow(users);
        pagination.render();
        // });
        // setSortActions();
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

var el = document.getElementById("pagination");

function getPageData(pageNo, pageLength) {
    let startPage = (pageNo - 1) * pageLength;
    let end = startPage + pageLength;

    let pageData = users.slice(startPage, end);

    console.log(pageData);

    return pageData;
}

function clearFirstTable() {
    var table = document.getElementById("user-table");
    for (let i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}

var counter = 2;
var pagination = {
    curentPage: 1,
    pageLength: 10,
    totalRecords: 50,
    render: function () {
        this.totalRecords = users.length;
        let pages = Math.ceil(this.totalRecords / this.pageLength);
        this.pages = pages;


        let div = createNode('div'),
            button1 = createNode('button'),
            button2 = createNode('button');

        button1.className = "pagination-btn prev";
        button1.type = "button";
        button1.innerHTML = `previous`;
        button2.className = "pagination-btn next";
        button2.type = "button";
        button2.innerHTML = `next`;
        button2.setAttribute("onclick", "pagination.addNewPage(this)");

        append(div, button1);
        for (let x = 1; x <= pages; x++){
            append(div, this.getButton(x));
        }
        append(div,button2);
        append(el, div);


    },
    getButton: function (text) {
        let className = "pagination-btn";
        if (this.curentPage === text){
            className += " current-page";
        }
        let button = createNode('button');
        button.setAttribute("id", "btn-"+ `${text}`);
        button.setAttribute("onclick", "pagination.goToPage(this," + `${text}` + ")");
        button.className = className;
        button.type = "button";
        button.innerHTML = `${text}`;
        return button;
    },
    goToPage: function (btn, pageNumber) {
        this.curentPage = pageNumber;
        let paginationButtons = document.getElementsByClassName("pagination-btn");
        for (let x = 0; x < paginationButtons.length; x++){
            paginationButtons[x].classList.remove("current-page");
        }
        btn.classList += " current-page";

        let getData = getPageData(pageNumber, this.pageLength);
        generateUserRow(getData);
    },
    addNewPage: function (btn) {
        var newUrl = url.replace("page=1", "page=" + `${counter}`);
        counter++;
        console.log(newUrl);
        fetch(newUrl)
            .then((resp) => resp.json())
            .then(function (data) {
                var nextUsers = users;
                nextUsers.push.apply(nextUsers, data.results);
                var elem = document.getElementsByClassName("pagination-btn");
                for (let i = elem.length - 1; i >= 0; i--) {
                    elem[i].parentNode.removeChild(elem[i]);
                }
                generateUserRow(nextUsers);
                pagination.render();
                // setSortActions();
            });
    }

};








