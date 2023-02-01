const sendMessage =document.getElementById("sendMessage");
sendMessage.addEventListener("click", function(){
    const inputName = document.getElementById("inputName");
    const inputEmail = document.getElementById("inputEmail");
    const inputSubject = document.getElementById("inputSubject");
    const inputMessage = document.getElementById("inputMessage");
    const successForm = document.getElementById("success-form");
    const fillForm = document.getElementById("fill-form");

    const nameValue = inputName.value;
    const emailValue = inputEmail.value;
    const subjectValue = inputSubject.value;
    const messageValue = inputMessage.value;

    const templateParams = {
        nameValue: nameValue,
        emailValue: emailValue,
        messageValue:messageValue,
        subjectValue:subjectValue,
    };

    if (nameValue && emailValue && messageValue && subjectValue) {
        console.log(nameValue, emailValue, subjectValue, messageValue);
        inputName.value= "";
        inputEmail.value= "";
        inputSubject.value="";
        inputMessage.value="";
        fillForm.innerHTML ="";
        successForm.innerHTML= `<p class="fill-class">Form Submitted successFully!</p>`;
        emailjs.send("service_oyvnt58", "template_c4dbvlg", templateParams, "uZCRM7GasQEg72HQn");
    }else{
        fillForm.innerHTML=`<p>Please fill The Form Correctly!</p>`;
        successForm.innerHTML ="";
    }
    
})

window.onload=function(){
    const preloderArea = document.getElementById("preloder-area");
    preloderArea.className ="preload-class";

    setTimeout(function(){
        preloderArea.style.display ="none";
    },500);
}