function tablToTabl() {
    var table1 = document.getElementById("table1"),
        table2 = document.getElementById("table2"),
        checkboxes = document.getElementsByName("check-table1");

    for (var i = 0; i < checkboxes.length; i++){
        if (checkboxes[i].checked){
            var newRow = table2.insertRow(table2.length),
                cell1 = newRow.insertCell(0),
                cell2 = newRow.insertCell(1),
                cell3 = newRow.insertCell(2),
                cell4 = newRow.insertCell(3);

            cell1.innerHTML = table1.rows[i+1].cells[0].innerHTML;
            cell2.innerHTML = table1.rows[i+1].cells[1].innerHTML;
            cell3.innerHTML = table1.rows[i+1].cells[2].innerHTML;
            cell4.innerHTML = "<input type='checkbox' name='check-tab2'>";


        }
    }

}