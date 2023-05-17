window.alert("Admin required for reviewing CV");

let email = document.getElementById("emailFill");
let password = document.getElementById("passwordFill");
const userAdmin = /^neset123$/;
const userPassword = /^12341234\.$/;
 
function validate() {

  
 if (!userAdmin.test(email.value)) {
      document.getElementById("emailFill").style.border = "solid 3px red";
      document.getElementById("emailNote").innerHTML = "Invalid User!";
      document.getElementById("emailNote").style.color = "red";
      
      return false;
    } else if (!userPassword.test(password.value)) {
      document.getElementById("passwordFill").style.border = "solid 3px red";
      document.getElementById("passwordNote").innerHTML = "İnvalid Password!";
      document.getElementById("passwordNote").style.color = "red";
      
      return false;
    } else {
        document.getElementById("emailNote").innerHTML = "Success";
        document.getElementById("passwordFill").style.border = "solid 3px green";
      console.log("code is working");

      return true;
    }
  }
  const jsonUser = JSON.stringify(email);
  console.log(jsonUser)