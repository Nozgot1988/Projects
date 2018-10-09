var url = 'http://api.pipl.com/search/?first_name=searchName&last_name=searchLastName&key=mzte500zbax30eznhefbvggt';

var list = document.getElementById("search-results-list");

function getSearchValues() {

    container = document.getElementById("search-container");

    firstname = container.elements["name"].value;

    lastname = container.elements["lastname"].value;

    console.log("first name " + firstname + " last name " + lastname);

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