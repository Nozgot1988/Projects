function createNode(element) {
    return document.createElement(element);
}

function  append(parent, el) {
    return parent.appendChild(el);
}

const table = document.getElementById("authors");

const url = 'https://randomuser.me/api/?results=10';

fetch(url)
.then((resp) => resp.json())
.then(function (data) {
    let authors = data.results;

    return authors.map(function (author) {

        let tr = createNode('tr'),
            td = createNode('td'),
            td1 = createNode('td1');

        td.innerHTML=`${author.name.first} 
        ${author.name.last}`;

        td1.innerHTML=`${author.email}`;

        append(tr, td);
        append(tr,td1)
        append(table, tr);

    })
})
