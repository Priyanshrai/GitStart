//Get element by id

var headerTitle=document.getElementById('header-title');
headerTitle.textContent='Hello';
headerTitle.innerText='GoodBye';
console.log(headerTitle.textContent)
headerTitle.innerHTML = '<h3> 10245 </h3>';
var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';
var addItem=document.getElementsByClassName('title');
console.log(addItem[0])
addItem[0].style.fontWeight='bold';
addItem[0].style.color='green';

var item=document.getElementsByClassName('list-group-item');
item[2].style.backgroundColor='green';
for(i=0;i<item.length;i++){
    item[i].style.fontWeight='bold';
}