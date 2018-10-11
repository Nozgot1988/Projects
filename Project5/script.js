var url = 'http://api.pipl.com/search/?first_name=searchName&key=8u2vt6exnkkmltwvukxl1969';

var list = document.getElementById("search-results-list");

function getSearchValues() {

    var container = document.getElementById("search-container");

    var firstname = container.elements["name"].value;

    console.log("first name " + firstname);

    url = getSearchRequest(firstname);

    console.log(url);

    fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function(data) {
            console.log(data);
            let searchResults = data.possible_persons;
            searchResults.map(function (searchResult) {
                console.log(searchResult);
                let dt = createNode('dt'),
                    dd1 = createNode('dd'),
                    dd2 = createNode('dd'),
                    dd3 = createNode('dd'),
                    dd4 = createNode('dd'),
                    dd5 = createNode('dd');
                dd1.innerHTML = `${searchResult.names[0].display}`;
                dd2.innerHTML = `${searchResult.addresses[0].display}`;
                dd3.innerHTML = `${searchResult.dob.display}`;
                dd4.innerHTML = `${searchResult.phones[0].display}`;
                dd5.innerHTML = `${searchResult.gender.content}`;
                append(dt, dd1);
                append(dt, dd2);
                append(dt, dd3);
                append(dt, dd4);
                append(dt, dd5);
                append(list, dt);
            })
        })
}

function getSearchRequest(name) {
    newUrl = url.replace('searchName', name);
    return newUrl;
}

function createNode(element) {
    return document.createElement(element);
}

function  append(parent, el) {
    return parent.appendChild(el);
}