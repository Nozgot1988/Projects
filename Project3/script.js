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

var users;

const table = document.getElementById("user-table");

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
                td5 = createNode('td');

            img.src=user.picture.thumbnail;

            td1.innerHTML=`${user.name.first} 
        ${user.name.last}`;

            div.innerHTML=`${user.email}`;

            td2.innerHTML=`${user.dob.date}`;

            td3.innerHTML=`${user.location.street}`;

            td4.innerHTML=`${user.phone}`;

            td5.innerHTML=`<button onclick="deleteAction(` + index + `, this)">Delete</button>`;

            append(td, img);
            append(td1, div);
            append(tr, td);
            append(tr,td1);
            append(tr,td2);
            append(tr,td3);
            append(tr,td4);
            append(tr,td5);
            append(table, tr);

        })
    })

