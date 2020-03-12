$(document).ready(() => {
    $('#name-error-message').hide()
    $('#email-error-message').hide()
    $('#mobile-error-message').hide()
    $('#work-experience-error-message').hide()

    let nameError = false;
    let emailError = false;
    let mobileError = false;
    let workExperienceError = false;

    $('#name').focusout(() => {
        name_check();
    })

    $('#email').focusout(() => {
        email_check();
    })

    $('#mobile').focusout(() => {
        mobile_check();
    })

    $('#work-experience').focusout(() => {
        workExperienceCheck();
    })

    function name_check() {
        var empty = $('#name').val().length

        if(empty === 0) {
            $('#name-error-message').html('Name field is blank')
            $('#name-error-message').show()
            nameError = true;
        }
        else {
            $('#name-error-message').hide();
        }
    }

    function email_check() {
        let check = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i)

        if(check.test($('#email').val())) {
            $('#email-error-message').hide()
        }
        else {
            $('#email-error-message').html('Invalid email address')
            $('#email-error-message').show()
            emailError = true
        }
    }

    function mobile_check() {
        let check = Number($('#mobile').val())

        if(String(check).length !== 10 || typeof(check) !== 'number') {
            $('#mobile-error-message').html('Mobile number should be of 10 digits');
            $('#mobile-error-message').show();
            mobileError = true
        }
        else {
            $('#mobile-error-message').hide();
        }
    }

    function workExperienceCheck() {
        let check = $('#work-experience').val()
        console.log(check, (Number(check)))

        if(String(check).length === 0 ) {
            $('#work-experience-error-message').html('Enter work experience in years')
            $('#work-experience-error-message').show()
            workExperienceError =true
        }
        else {
            $('#work-experience-error-message').hide()
        }
    }

    $('#form-submit').click(function() {
        nameError = false;
        emailError = false;
        mobileError = false;
        workExperienceError = false;

        name_check();
        mobile_check();
        email_check();
        workExperienceCheck();

        if( nameError === true || emailError === true || mobileError === true || workExperienceError === true) {
            console.log('working')
            return false
        } else {
            return true
        }
    })
})