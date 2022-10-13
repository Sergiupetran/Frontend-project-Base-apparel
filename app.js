

  function validation(){
 	var form = document.getElementById("form");
 	var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;	
    if(email.match(pattern)){
    	form.classList.add("valid");
      form.classList.remove("invalid");
      text.innerHTML = "Thank you!";
      text.style.color = "#00ff00";
    }else{
    	form.classList.remove("valid");
		  form.classList.add("invalid");
       text.innerHTML = "Please enter a valid email adress!";
       text.style.color = "#ff0000";
       return false
		}if(email == ""){
      form.classList.remove("valid");
      form.classList.remove("invalid");
      text.innerHTML = "";
      text.style.color = "#00ff00";
      return false
    }
  }
console.log(validation());