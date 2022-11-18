// validation starts
let exampleInputEmail1=document.getElementById('exampleInputEmail1');
let exampleInputPassword1=document.getElementById('exampleInputPassword1');

function validate(){
    if (exampleInputEmail1.value.trim() == ""){
        alert(' email field is empty');
        return false;
    }
    else if(exampleInputPassword1.value.trim() == ""){
        alert('password field is empty');
        return false;
    }
    else if(exampleInputPassword1.value.length<8){
        alert('password is too short');
        exampleInputPassword1 .style.border="2px solid red";
        return false
    }
    else{
        return true;
    
    }
}
// validation ends