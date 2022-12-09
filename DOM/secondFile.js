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

Create Element
Create a Div
var newDiv=document.createElement('div');
//Add class
newDiv.className='Hello';
//Add id
newDiv.id='Hello1';
//Add attribute
newDiv.setAttribute('title' , 'Hello Div');

//Create a text Node
var newDivText=document.createTextNode('Hello');
//Add Text to Div
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
console.log(container)
// var h1=document.querySelector('header h1');
// newDiv.style.fontSize='30px';
// container.insertBefore(newDiv,h1);
parentNode=document.getElementById('items');
parentNode.innerhtml = '<li>Hello World</li>' + parentNode.innerhtml