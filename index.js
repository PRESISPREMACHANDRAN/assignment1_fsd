// validation starts
let exampleInputEmail1=document.getElementById('exampleInputEmail1');
let exampleInputPassword1=document.getElementById('exampleInputPassword1');

function validate(){
    // if (exampleInputEmail1.value.trim() == ""){
    //     alert(' email field is empty');
    //     return false;
        
    // }
    let regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,4})(.[a-z]{2,4})?$/;
              if (regexp.test(exampleInputEmail1.value)) { 
                 error.innerText = "Valid";
                 error.style.color = "green";
                    return (exampleInputPassword1.value.trim() == ""){
                    alert('password field is empty');
                    return false;
                    }
                    // else if(exampleInputPassword1.value.length<8){
                    //     alert('password is too short');
                    //    exampleInputPassword1 .style.border="2px solid red";
                    //    return false
                    //     }
                    //     else if {
                    //         error.innerHTML = "Invalid";
                    //         error.style.color = "red";
                    //         return false;
                    //         }
                    //         else{
                    //             return true;
                       
                    //         }
                   }
            //  else if {
            // error.innerHTML = "Invalid";
            // error.style.color = "red";
            // return false;
            // }

    
            // else if(exampleInputPassword1.value.trim() == ""){
            // alert('password field is empty');
            // return false;
            // }
            // else if(exampleInputPassword1.value.length<8){
            //  alert('password is too short');
            // exampleInputPassword1 .style.border="2px solid red";
            // return false
            //  }
            else{
             return true;
    
    }
}
// validation ends
