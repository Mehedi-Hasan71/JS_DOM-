
//add a list by using javaScripts
let Items = ['Home','About','Settings','Contact'];

let ListMenu=document.querySelector("#mehedi");

let fragment = new DocumentFragment();

Items.map((mehedi)=>{
   let List=document.createElement('li');
   List.innerHTML=mehedi;
   fragment.appendChild(List)
})
ListMenu.appendChild(fragment);

//write a line before or after
const h3=document.querySelector('h3');
const p=document.createElement('p');
p.innerText="Mehedi this way you learn continiously java scripts";
h3.after(p);
//write a word or letter leftside or rightside in a word
const btn=document.querySelector("button");
btn.firstChild.after('🧡');

//before after any line set up
let list=document.querySelector("#list");
list.insertAdjacentHTML("beforeend","<li>Java Scripts</li>");
list.insertAdjacentHTML("afterbegin","<li>HTML</li>");
list.insertAdjacentHTML("beforebegin","<h3>YOu must Be learn this three stpes</h3>");
list.insertAdjacentHTML("afterend","<h4>complete for basic web devlopment</h4>");


//clone code 
let hasan=document.querySelector("#hasan");
let cloneMenu=hasan.cloneNode(true);
cloneMenu.id="menu-mobile";
document.body.appendChild(cloneMenu);

















