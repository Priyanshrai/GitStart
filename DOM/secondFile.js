// TASK 7 AND TASK 8
var form=document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter=document.getElementById("filter");
//Form submit event
form.addEventListener('submit', addItem)

// Delete Event
itemList.addEventListener('click', removeItem);
//Filter Event
filter.addEventListener('keyup', filterItems);

//Add item
function addItem(e){
    e.preventDefault();
//Get Input Value  
var newItem = document.getElementById('item').value;
// create new li element
var li=document.createElement('li');
//Add Class
li.className='list-group-item';
//Add text node with input value
li.appendChild(document.createTextNode(newItem));


//Get Input Value  
var newItem1 = document.getElementById('item1').value;
//Add text node with input value
li.appendChild(document.createTextNode(" " + newItem1));


 //create del button element
 var deleteBtn=document.createElement('button');
 //Add Class To delete button
 deleteBtn.className="btn btn-danger btn-sm float-right delete";
 //append text node
 deleteBtn.appendChild(document.createTextNode('X'));
 //append btn to li
 li.appendChild(deleteBtn);
 //apned li to list
 itemList.appendChild(li);


  //create EDIT button element
  var deleteBtn=document.createElement('button');
  deleteBtn.className="btn btn-primary btn-sm float-right edit";
  //append text node
  deleteBtn.appendChild(document.createTextNode('Edit'));
  //append btn to li
  li.appendChild(deleteBtn);
  //apned li to list
  itemList.appendChild(li);

}

//Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are You Sure?")){
            var li = e.target.parentElement;
        
            itemList.removeChild(li);
        }
    }
}

//TASK 8
//Filter Items
function filterItems(e){
    //convert text to lowercase
    var text=e.target.value.toLowerCase();
    //Get Lis
    var items = itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        
             var itemName = item.firstChild.textContent;
             var itemName1 = item.childNodes[1].textContent;
             if(itemName.toLowerCase().indexOf(text) != -1 || itemName1.toLowerCase().indexOf(text) != -1){
                 item.style.display = 'block';
              } else {
                 item.style.display ='none';
                  }
              });
}

