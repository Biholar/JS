$(document).ready(function() {
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "fa-eye-slash" );
            $('#show_hide_password i').removeClass( "fa-eye" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "fa-eye-slash" );
            $('#show_hide_password i').addClass( "fa-eye" );
        }
    });
});


function initial(){
    this.storage  = window.localStorage
    this.mail = '' 
    this.password = ''

    if(this.storage.getItem('Remember') === 'yes'){
        document.getElementById('inputEmail').value = this.storage.getItem('mail')
        document.getElementById('inputPassword').value = this.storage.getItem('password')
        Remember.checked = true
    }

    this.validate = function(){
        let alertMessage = ''
        if (!this.mail || !this.password){
            alertMessage = '<h1>Fill all fields </h1>'
            this.showAlert(alertMessage)
            return false
        }
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(this.mail)) {
        alert = '<h1>Please provide a valid email address</h1>'
        this.showAlert(alertMessage);
        return false;
        }
        if (this.storage.getItem('mail')!== this.mail){
            alert += '<h1>This mail not registered</h1>'
            this.showAlert(alertMessage);
            return false;
        }
        if(this.storage.getItem('pass')!== this.password){
            alert += '<h1>Pass Incorrect</h1>'
            this.showAlert(alertMessage);
            return false;
        }
        return true
    }


    this.login = function(){
        this.mail = document.getElementById('inputEmail').value
        this.password = document.getElementById('inputPassword').value

        if (this.validate()){
            if(Remember.checked) this.storage.setItem('Remember', 'yes')
            else this.storage.setItem('Remember', 'no')
            location.href='./userProfile.html'
            alert(location)
        }
    }

    this.setMailAndPass = function (mail, password){
        if (mail) this.storage.setItem('mail', mail)
        if (password) this.storage.setItem('pass', password)
        this.storage.setItem('Remember', 'yes')
    }


}

login =  new initial()
