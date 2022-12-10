// //Get element by id

// var headerTitle=document.getElementById('header-title');
// headerTitle.textContent='Hello';
// headerTitle.innerText='GoodBye';
// console.log(headerTitle.textContent)
// headerTitle.innerHTML = '<h3> 10245 </h3>';
// var header=document.getElementById('main-header');
// header.style.borderBottom='solid 3px #000';
// var addItem=document.getElementsByClassName('title');
// console.log(addItem[0])
// addItem[0].style.fontWeight='bold';
// addItem[0].style.color='green';

// var item=document.getElementsByClassName('list-group-item');
// item[3].style.backgroundColor='green';
// console.log(item[3])
// var li=document.getElementsByTagName('li');
// li[4].style.fontWeight='bold';

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor='green';

// var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = "hidden";

// var li = document.querySelectorAll('li');
// li[1].style.color='green';
// var odd=document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
// }

//ParentNode
// var itemList=document.querySelector('#items');
// console.log(itemList.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);

// //ParentElement
// console.log(itemList.parentElement);

// // //Child Nodes
// console.log(itemList.childNodes);
// // //children
// console.log(itemList.children);
// // //FirstChild
// console.log(itemList.firstChild);
// //FirstElement Child
// console.log(itemList.firstElementChild)
// //lastelemnt child
// console.log(itemList.lastElementChild)
// //NextSibling
// console.log(itemList.nextSibling)
// //NextElementSibling
// console.log(itemList.nextElementSibling);
// //PreviousSibling
// console.log(itemList.previousSibling)
// //PreviousElementSibling
// console.log(itemList.previousElementSibling)

// create element
// var newDiv=document.createElement('li');
// newDiv.className='list-group-item';


// var menu=document.getElementById("main").getElementsByTagName('ul')[0];
// menu.appendChild(newDiv);
// newDiv.innerHTML='Hello World';
// menu.insertBefore(newDiv, menu.getElementsByTagName("li")[0])

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




