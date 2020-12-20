/*
This is the javascript function to validate contact form
This script checks all the values in fields of contact form and validate whether
the form has empty values or not. if any empty values found it throws alert with specific reason and alert sound 
it also check the format of email and length of message 
if all conditions match it will throw small alert sying successfull and sweet sound
*/
function validateForm(){
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var atposition=email.indexOf("@");
    var dotposition=email.lastIndexOf(".");
    
    if(name.trim() == "" || name.trim() == null){
        document.getElementById("alert").play();
        alert("Nama tidak boleh di kosongkan");
        return false;
    }
    else if(atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){
        document.getElementById("alert").play();
        alert("Tolong masukkan alamat email yang benar.\n Email harus seperti xyz@xyz.xyz");  
        return false;  
    }  
    else if(email.trim() == "" || email.trim() == null){
        document.getElementById("alert").play();
        alert("Email harus ada.");
        return false;
    }
    else if(subject.trim() == "" || subject.trim() == null){
        document.getElementById("alert").play();
        alert("Subjek wajib di isi");
        return false;
    }
    else if(phone.length > 10){
        document.getElementById("alert").play();
        alert("Nomor telepon tidak boleh kurang dari 10 angka");
        return false;
    }
    /*
    Checks either the input phone number is in numeric format or not.
    If phone number isn't in numeric format it will pop up alert with specific sound
    */
    else if(isNaN(phone)){
        document.getElementById("alert").play();
        alert("Nomor telepon harus berisikan angka");
        return false;
    }
    else if(message.trim() == "" || message.trim() == null){
        document.getElementById("alert").play();
        alert("pesan tidak boleh kosong");
        return false;
    }
    else if(message.length > 100){
        document.getElementById("alert").play();
        alert("Pesan tidak boleh lebih dari 100 karakter.");
        return false;
    }else{
        document.getElementById("success").play();
        alert( name + " , Pesan anda telah terkirim.");
        true;
    }
}