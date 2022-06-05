let id = 0;

document.getElementById('add').addEventListener('click', () => {

    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-food').value;
    row.insertCell(1).innerHTML = document.getElementById('new-price').value;
    row.insertCell(2).innerHTML = document.getElementById('new-description').value;
    let actions = row.insertCell(3);
    actions.appendChild(createDeleteButton(id++));  //set the id for the delete button
    
    document.getElementById('new-food').value = '';
    document.getElementById('new-price').value = '';
    document.getElementById('new-description').value = '';
});

function createDeleteButton(id) {
    let btn = document.createElement('button');     //create a button
    btn.className = 'btn btn-primary';              //set the color
    btn.id = id;            
    btn.innerHTML = 'Delete';                       //text on the button
    btn.onclick = () => {
        let elementToDelete = document.getElementById(`item-${id}`);    //delete item #
        elementToDelete.parentNode.removeChild(elementToDelete);        //find the parent element, then remove the child from the parent node
    };
    return btn;
}