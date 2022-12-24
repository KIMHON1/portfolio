var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');


function validateName(){
    var name = document.getElementById('name').value;
    if(name.length ==0){
        nameError.innerHTML = 'Name is required';
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = ' Type in Your Both Names';
        return false;
    }

    nameError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
}


function validateEmail(){
    var email = document.getElementById('email').value;
    if(email.length==0){
        emailError.innerHTML = 'Email is Required';
        return false;
    }

    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = 'Email Invalid';
        return false
    }


    emailError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
}


function validateMessage(){
    var message = document.getElementById('message').value;
    var required = 50;
    var left = required - message.length;
    if(left>0){
        messageError.innerHTML = left +'   '+ 'Message Character is Required';
        return false;
    }

    messageError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
}