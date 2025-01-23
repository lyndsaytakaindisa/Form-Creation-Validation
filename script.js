//Wrap script to ensure the javascript runs after the document is loaded 
document.addEventListener('DOMContentLoaded',function(){ 
    //form selection
    const form = document.getElementById('registration-form');
    //feedback division selection
    const feedbackDiv =document.getElementById('form-feedback');
    //form submission event listener
     form.addEventListener('submit ',function(event){
        event.preventDefault(); //prevents form from submitting to the server
        //initializing validation variables
        let isValid =true;
        let messages =[];
        //retrival of user inputs
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        //.trim() method to remove any leading or trailing whitespaces 
        const username =usernameInput.value.trim();
        const email =emailInput.value.trim();
        const password =passwordInput.value.trim();

        //Validation of the username 
        if (username.value.length < 3) {
            isValid=false;
            messages.push("Username must be at least 3 characters long !")
          } 
        //Validation of the email address
        if (!email.includes('@')||!email.includes('.')) {
            isValid=false;
            messages.push("Email address is invalid");
        }
        //Validation of the password
        if (password.value.length < 8){
            isValid=false;
            messages.push("Please enter a valis password!")
          }

          //feedback display logic
          feedbackDiv.style.display="block";

          if (isValid == true){
            feedbackDiv.textContent('Registration Successful');
        }
        else{
            feedbackDiv.innerHTML=messages.join('<br>');
            feedbackDiv.style.color="#dc3545";
        }
    });

});
