function validation(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;
    var country = document.getElementById('country').value;
    var msg = document.getElementById('msg');
    var cmt = document.getElementById('cmt').value;
    console.log(cmt);

    var language = document.getElementsByName('lan');
    // var confirmGender ;
    // console.log(gender.length);
 
            for (i = 0; i < language.length; i++) {
                if (language[i].checked)
                    console.log(language[i].value);
            }
    // var gender = document.getElementsByName('gender').value;
    // console.log(gender.length);

    // 
    var gender = document.getElementsByName('gender');
    var confirmGender ;
    // console.log(gender.length);
 
            for (i = 0; i < gender.length; i++) {
                if (gender[i].checked)
                    confirmGender=gender[i].value;
            }
    // console.log(confirmGender);
    // console.log(email,password);
    if(email!="" && password!="" && country!="" && confirmGender!=undefined){
        document.getElementById('email').style.border='2px solid green';
        document.getElementById('pass').style.border='2px solid green';
        msg.style.color='green';
        msg.innerHTML = 'success!...';
        
    } else{
        document.getElementById('email').style.border='2px solid red';
        document.getElementById('pass').style.border='2px solid red';
        msg.innerHTML = 'enter all the fileds';
        
    }
}

function DynamicImage(){
    var country = document.getElementById('country').value;
    var img = document.getElementById('img');
    // 
    if(country=="IN"){
        img.style.display='block';
        img.src = './assets/img/india.png';
    }
    else if(country=='USA'){
        img.style.display='block';
        img.src = './assets/img/usa.png';
    }
    else if(country=='RUSSIA'){
        img.style.display='block';
        img.src = './assets/img/russia.png';
    }
     else{
        img.style.display='none';
    }
}