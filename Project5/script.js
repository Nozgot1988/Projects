var bottom = document.getElementsByClassName('bottom-triangle');

var up = document.getElementsByClassName('up-triangle');

for (var i = 0; i < up.length; i++ ) {
    up[i].onclick = function () {
        sortTableAsc();
        for (var i =0; i < up.length; i++ ){
            if (up[i].tagName === "DIV"){
                bottom[i].classList.remove('red-bottom');
                up[i].classList.remove("red-up");
            }
        }
        this.classList.add("red-up");
    };
}

for (var y = 0; y < bottom.length; y++ ) {
    bottom[y].onclick = function () {
        sortTableDesc()
        for (var i = 0; i < bottom.length; i++ ){
            if (bottom[i].tagName === "DIV"){
                bottom[i].classList.remove("red-bottom");
                up[i].classList.remove('red-up');
            }
        }
        this.classList.add("red-bottom");
    };
}

function sortTableAsc() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("my-table");
    switching = true;

    while (switching){
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length-1); i++){
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch){
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function sortTableDesc() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("my-table");
    switching = true;

    while (switching){
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length-1); i++){
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            if(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()){
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch){
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}


