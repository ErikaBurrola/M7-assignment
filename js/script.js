// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

let form = document.querySelector('#addForm')
let countAddEmp = 0;
let countDelEmp = 0;

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let id= document.querySelector('#id').value
    let name= document.querySelector('#name').value
    let ext= document.querySelector('#extension').value
    let email= document.querySelector('#email').value
    let depa= document.querySelector('#department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    const tableBody = document.querySelector('.table-striped')
    const newRow = tableBody.insertRow();
    console.log('registro'+ newRow)
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId = newRow.insertCell(0)
    let cellName = newRow.insertCell(1)
    let cellExt = newRow.insertCell(2)
    let cellEmail = newRow.insertCell(3)
    let cellDeparment =newRow.insertCell(4)

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellId.appendChild(document.createTextNode(id));;
    cellName.appendChild(document.createTextNode(name));
    cellExt.appendChild(document.createTextNode(ext));
    cellEmail.appendChild(document.createTextNode(email));
    cellDeparment.appendChild(document.createTextNode(depa));
  

    // CREATE THE DELETE BUTTON
    let actionCell = newRow.insertCell(5);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.type = 'click'
    deleteButton.style.backgroundColor = 'red'
    actionCell.appendChild(deleteButton);
    deleteButton.addEventListener('click', function(e) {
        const row = e.target.closest('tr')
        const rowIndex = row.rowIndex
        tableBody.deleteRow(rowIndex); 
        countDelEmp++
        updateCountDisplay();
    })

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    let inputId = document.getElementById("id")
    inputId.focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    countAddEmp ++;
    updateCountDisplay();
    
})

function updateCountDisplay() {
    let div = document.querySelector('#count')
    div.innerHTML = ''; // Limpia el contenido anterior

    const addedText = document.createTextNode("Total Added Employees: " + countAddEmp);
    const deletedText = document.createTextNode("Total Deleted Employees: " + countDelEmp);

    div.appendChild(addedText);
    div.appendChild(document.createElement('br')); 
    div.appendChild(deletedText);

}

