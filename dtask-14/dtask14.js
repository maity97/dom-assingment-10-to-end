//go to yhe form by id
let form=document.getElementById('addForm')
//if i submit what i wan to do
form.addEventListener('submit',storelocalstorage)
function storelocalstorage(e)
{
    e.preventDefault()
    //get value form input
  let  Name=document.getElementById('name').value;
  let  Email=document.getElementById('email').value;
  let PhNo=document.getElementById('phno').value;
  //create an object of user setail
let user_details={
    Name,
    Email,
    PhNo

};
//save to lovcal storage
localStorage.setItem(user_details.Email,JSON.stringify(user_details))
  //function to show user detail in the screen  
user_detailsonscreen(user_details);

}
 function user_detailsonscreen(user_details)
 {
    let parentelement=document.getElementById('item');//go to ul element
    let childelement=document.createElement('li');//create li element
    childelement.textContent=user_details.Name+"-"+user_details.Email+"-"+user_details.PhNo;
    parentelement.appendChild(childelement)//li element appended to ul element
    //create button 
    let btn=document.createElement('input');
    btn.type='button';
    btn.value='Delete'
   //button callback function
    btn.onclick =()=>
    {
        localStorage.removeItem(user_details.Email);
        parentelement.removeChild(childelement);
    }
    childelement.appendChild(btn)
    //create editbutton
    let editbtn=document.createElement('input')
     editbtn.type='button';
     editbtn.value='Edit';
     editbtn.onclick =()=>
    {   //how to go to the edit 
         document.getElementById('name').value=user_details.Name
    document.getElementById('email').value=user_details.Email
    document.getElementById('phno').value=user_details.PhNo
        localStorage.removeItem(user_details.Email);
        parentelement.removeChild(childelement);
    }
    childelement.appendChild(editbtn)

 }