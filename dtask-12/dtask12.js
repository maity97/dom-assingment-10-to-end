var form=document.getElementById('addForm')
form.addEventListener("submit",store)
function store(e)
{     e.preventDefault();
    
    e.preventDefault();
    let user_details={
        Name :document.getElementById('name').value, 
        Email :document.getElementById('email').value, 
        PhNo :document.getElementById('phno').value 
    };
    let user_details_serialize=JSON.stringify(user_details);

localStorage.setItem(user_details.Email,user_details_serialize)
let ul=document.getElementById('item');
let li=document.createElement('li')
li.appendChild(document.createTextNode(user_details.Name));
li.appendChild(document.createTextNode('-')); 
li.appendChild(document.createTextNode(user_details.Email));
li.appendChild(document.createTextNode('-'));
li.appendChild(document.createTextNode(user_details.PhNo));
ul.appendChild(li)





}
     

     
     
     
     

