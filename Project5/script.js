var url = 'http://api.pipl.com/search/?first_name=searchName&last_name=searchLastName&key=7vao4ysqfoku40mlq3s8l2e8';

var list = document.getElementById("search-results-list");

function getSearchValues() {

    var container = document.getElementById("search-container");

    var firstname = container.elements["name"].value;
    var lastname = container.elements["lastname"].value;

    console.log("first name " + firstname);
    console.log("last name " + lastname);

    url = getSearchRequest(firstname, lastname);

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
                if (searchResult.names !== undefined){
                    dd1.innerHTML = `${searchResult.names[0].display}`;
                }
                if (searchResult.addresses !== undefined){
                    dd2.innerHTML = `${searchResult.addresses[0].display}`;
                }
                if (searchResult.dob !== undefined){
                    dd3.innerHTML = `${searchResult.dob.display}`;
                }
                if (searchResult.phones !== undefined){
                    dd4.innerHTML = `${searchResult.phones[0].display}`;
                }
                if (searchResult.gender !== undefined){
                    dd5.innerHTML = `${searchResult.gender.content}`;
                }
                append(dt, dd1);
                append(dt, dd2);
                append(dt, dd3);
                append(dt, dd4);
                append(dt, dd5);
                append(list, dt);
            })
        })
}

function getSearchRequest(name, lastname) {
    newUrl = url.replace('searchName', name);
    newUrl = newUrl.replace('searchLastName', lastname);
    return newUrl;
}

function createNode(element) {
    return document.createElement(element);
}

function  append(parent, el) {
    return parent.appendChild(el);
}