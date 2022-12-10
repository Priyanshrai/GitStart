var form=document.getElementById("addForm");
var itemList = document.getElementById("items");

//Form submit event
form.addEventListener('submit', addItem)
// Delete Event
itemList.addEventListener('click', rempveItem);


//Add item
function addItem(e){
    e.preventDefault();
   

var newItem = document.getElementById('item').value;
// create new li element
var li=document.createElement('li');
//Add Class
li.className='list-group-item';
//Add text node with input value
li.appendChild(document.createTextNode(newItem));

//create del button element
var deleteBtn=document.createElement('button');
deleteBtn.className="btn btn-danger btn-sm float-right delete";
//append text node
deleteBtn.appendChild(document.createTextNode('X'));
//append btn to li
li.appendChild(deleteBtn);
//apned li to list
itemList.appendChild(li);
//create del button element
var deleteBtn=document.createElement('button');
deleteBtn.className="btn btn-primary btn-sm float-right edit";
//append text node
deleteBtn.appendChild(document.createTextNode('EDIT'));
//append btn to li
li.appendChild(deleteBtn);
//apned li to list
itemList.appendChild(li);

}

//Remove item
function rempveItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are You Sure?")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}




