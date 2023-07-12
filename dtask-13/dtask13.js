
 var form=document.getElementById('addForm')
form.addEventListener("submit",store)

function store(e)
{     

    e.preventDefault();
    var user_details={
        Name :document.getElementById('name').value, 
        Email :document.getElementById('email').value, 
        PhNo :document.getElementById('phno').value 
    };
    let user_details_serialize=JSON.stringify(user_details);

localStorage.setItem(user_details.Email,user_details_serialize)
let item=document.getElementById('item');
let li=document.createElement('li')
li.appendChild(document.createTextNode(user_details.Name));
li.appendChild(document.createTextNode('-')); 
li.appendChild(document.createTextNode(user_details.Email));
li.appendChild(document.createTextNode('-'));
li.appendChild(document.createTextNode(user_details.PhNo));
//create botton
var deletebtn=document.createElement('button');
deletebtn.className="btn btn-danger btn-sm float-right delete"
//name the button
deletebtn.appendChild(document.createTextNode('Delete'));
//append the button as a child of li
li.appendChild(deletebtn)
////append li as a child of ul
item.appendChild(li)
deletebtn.onclick = () =>


   {
    localStorage.removeItem(user_details.Email)
    item.removeChild(li)
    
   }
    
   }





     
