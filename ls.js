
function sub()
{
    var a = document.getElementById("inp1").value
    console.log(a)

    var b = document.getElementById("inp2").value
    console.log(b)

    
    localStorage.setItem("Username", a)
    localStorage.setItem("Contact", b)
}


var c=localStorage.getItem("inp1");


