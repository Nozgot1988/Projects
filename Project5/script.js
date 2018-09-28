// var bottom = document.getElementsByClassName('bottom-triangle');
//
// var up = document.getElementsByClassName('up-triangle');
//
// var index;
//
// for (var i = 0; i < up.length; i++ ) {
//     up[i].onclick = function () {
//         for (var i =0; i < up.length; i++ ){
//             if (up[i].tagName === "DIV"){
//                 bottom[i].classList.remove('red-bottom');
//                 up[i].classList.remove("red-up");
//             }
//         }
//         this.classList.add("red-up");
//         for (var i =0; i < up.length; i++){
//             if (up[i].classList.contains('red-up')){
//                index = i;
//             }
//         }
//         sortTableAsc(index);
//     };
// }
//
// for (var y = 0; y < bottom.length; y++ ) {
//     bottom[y].onclick = function () {
//         for (var i = 0; i < bottom.length; i++ ){
//             if (bottom[i].tagName === "DIV"){
//                 bottom[i].classList.remove("red-bottom");
//                 up[i].classList.remove('red-up');
//             }
//         }
//         this.classList.add("red-bottom");
//         for (var i =0; i < up.length; i++){
//             if (up[i].classList.contains('red-bottom')){
//                 index = i;
//             }
//         }
//         sortTableDesc(index);
//     };
// }
//
// function sortTableAsc(n) {
//     var table, rows, switching, i, x, y, shouldSwitch;
//     table = document.getElementById("my-table");
//     switching = true;
//
//     while (switching){
//         switching = false;
//         rows = table.rows;
//         for (i = 1; i < (rows.length-1); i++){
//             shouldSwitch = false;
//             x = rows[i].getElementsByTagName("TD")[n];
//             y = rows[i + 1].getElementsByTagName("TD")[n];
//             console.log(typeof x.innerHTML);
//             if (typeof x.innerHTML === "string") {
//                 if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
//                     shouldSwitch = true;
//                     break;
//                 }
//             }
//             if (typeof x.innerHTML === "number") {
//                 if(Number (x.innerHTML) > Number(y.innerHTML)){
//                     shouldSwitch = true;
//                     break;
//                 }
//             }
//         }
//         if (shouldSwitch){
//             rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//             switching = true;
//         }
//     }
// }
//
// function sortTableDesc(n) {
//     var table, rows, switching, i, x, y, shouldSwitch;
//     table = document.getElementById("my-table");
//     switching = true;
//
//     while (switching){
//         switching = false;
//         rows = table.rows;
//         for (i = 1; i < (rows.length-1); i++){
//             shouldSwitch = false;
//             x = rows[i].getElementsByTagName("TD")[n];
//             y = rows[i + 1].getElementsByTagName("TD")[n];
//             if(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()){
//                 shouldSwitch = true;
//                 break;
//             }
//         }
//         if (shouldSwitch){
//             rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//             switching = true;
//         }
//     }
// }


