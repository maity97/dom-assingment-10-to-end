var form=document.getElementById('addForm')
form.addEventListener("submit",store)
function store(e)
{
    e.preventDefault();
    var kname=document.getElementById('name').value 
    var kemail=document.getElementById('email').value 
    var kphno=document.getElementById('phno').value 

localStorage.setItem("Name",kname)
localStorage.setItem("Email",kemail)
localStorage.setItem("Ph No",kphno)
}
