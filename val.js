

function a(){
    var name = document.forms["RegForm"]["Name"];
    var email = document.forms["RegForm"]["Email"];
    var phone = document.forms["RegForm"]["Telephone"];
    var what = document.forms["RegForm"]["Subject"];
    var password = document.forms["RegForm"]["Password"];
    var address = document.forms["RegForm"]["Address"];
     if (name.value == ""){
         window.alert("Enter your name!");
         name.focus();
         return false;
     }
     else if (name.length < 5)
     {
         window.alert("Enter your name!");
         name.focus();
         return false;
     }
     if (address.value == ""){
         window.alert("Enter your address!");
         address.focus();
         return false;
     }
     if (email.value == ""){
         window.alert("Enter a valid E-mail address:");
         email.focus();
         return false;
     }
     if (phone.value == ""){
         window.alert("Enter your telephone no :");
         phone.focus();
         return false;
     }
     if (password.value == "");{
         window.alert("Enter your password");
         password.focus();
         return false;
     }
     if (what.selectedindex < 1){
         alert("Enter your favorite destination :");
         what.focus();
         return false;
     }
     return true
}