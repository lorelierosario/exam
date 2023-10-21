var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["subject"] = document.getElementById("subject").value;
    formData["day"] = document.getElementById("day").value;
    formData["time"] = document.getElementById("time").value;
    formData["room"] = document.getElementById("room").value;
    formData["instructor"] = document.getElementById("instructor").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("nameList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.subject;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.day;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.time;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.room;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.instructor;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onUpdate(this)">Update</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("subject").value = "";
    document.getElementById("day").value = "";
    document.getElementById("time").value = "";
    document.getElementById("room").value = "";
    document.getElementById("instructor").value = "";
    selectedRow = null;
}


function onUpdate(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("subject").value = selectedRow.cells[0].innerHTML;
    document.getElementById("day").value = selectedRow.cells[1].innerHTML;
    document.getElementById("time").value = selectedRow.cells[2].innerHTML;
    document.getElementById("room").value = selectedRow.cells[3].innerHTML;
    document.getElementById("instructor").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.subject;
    selectedRow.cells[1].innerHTML = formData.day;
    selectedRow.cells[2].innerHTML = formData.time;
    selectedRow.cells[3].innerHTML = formData.room;
    selectedRow.cells[4].innerHTML = formData.instructor;
}

function onDelete(td) {
    if (confirm('Are you sure you want to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("nameList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("subject").value == "") {
        isValid = false;
        document.getElementById("subjectValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("subjectValidationError").classList.contains("hide"))
            document.getElementById("subjectValidationError").classList.add("hide");
    }
    return isValid;
}
