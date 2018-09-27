var x = document.getElementsByClassName('up-triangle-name');

for(var i = 0; i < x.length; i++){
    x[i].addEventListener("click", function (){
        for(var i = 0; i < x.length; i++){
            if(x[i].style.borderBottom === ""){
                x[i].style.borderBottom = "10pt solid red"
            } else {
                x[i].style.color = ""
            }
        }
    });
}

var x1 = document.getElementsByClassName('up-triangle-last-name');

for(var i = 0; i < x1.length; i++){
    x1[i].addEventListener("click", function (){
        for(var i = 0; i < x1.length; i++){
            if(x[i].style.borderBottom === ""){
                x[i].style.borderBottom = "10pt solid red"
            } else {
                x[i].style.color = ""
            }
        }
    });
}

var x2 = document.getElementsByClassName('up-triangle-address');

for(var i = 0; i < x.length; i++){
    x[i].addEventListener("click", function (){
        for(var i = 0; i < x.length; i++){
            if(x[i].style.borderBottom === ""){
                x[i].style.borderBottom = "10pt solid red"
            } else {
                x[i].style.color = ""
            }
        }
    });
}
var x3 = document.getElementsByClassName('up-triangle-email');

for(var i = 0; i < x.length; i++){
    x[i].addEventListener("click", function (){
        for(var i = 0; i < x.length; i++){
            if(x[i].style.borderBottom === ""){
                x[i].style.borderBottom = "10pt solid red"
            } else {
                x[i].style.color = ""
            }
        }
    });
}
// var x = document.querySelectorAll('div');
//
// for(var i = 0; i < x.length; i++){
//     x[i].addEventListener("click", function (){
//         for(var i = 0; i < x.length; i++) {
//             if (x[i] !== this) {
//                 x[i].style.color = "";
//             }
//         }
//         if (this.style.color === "red") {
//             this.style.color = "";
//         } else {
//             this.style.color = "red"
//         }
//     });
// }