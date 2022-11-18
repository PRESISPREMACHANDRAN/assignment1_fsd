let form3Example1= document.getElementById("form3Example1");
 let error = document.getElementById("error");
   function validate() {
         let regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,4})(.[a-z]{2,4})?$/;
               if (regexp.test(form3Example1.value)) {
                         error.innerText = "Valid";
                        error.style.color = "green";
        return true;
    }
    else {
        error.innerHTML = "Invalid";
        error.style.color = "red";
        return false;
    }
}
