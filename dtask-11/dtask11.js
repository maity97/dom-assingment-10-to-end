var form=document.getElementById('addForm')
form.addEventListener("submit",store)
function store(e)
{
    e.preventDefault();
    let user_details={
        Name :document.getElementById('name').value, 
        Email :document.getElementById('email').value, 
        PhNo :document.getElementById('phno').value 
        
};
//convert object to string
let user_details_serialize=JSON.stringify(user_details);

localStorage.setItem("User_details",user_details_serialize)




//convert string to object
/*let user_details_deserialize=JSON.parse(localStorage.getItem("User_details"))
console.log(user_details_deserialize);*/
}
