// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='signin']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        firstname: "required",
        lastname: "required",
      },
      // Specify validation error messages
      messages: {
        firstname: "Please enter your firstname",
        lastname: "Please enter your lastname",
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
        localStorage.setItem(firstname, JSON.stringify(firstname));
        openIndex();
      }
    });
    
  });
  
  $('#sign-in').submit(function(e){
    e.preventDefault();
    loginObj = {
      firstname: $('#firstname').val(),
      lastname: $('#lastname').val()
    };
    console.log(loginObj)
      localStorage.setItem("loginObj", JSON.stringify(loginObj));
  })

  function openIndex(){
    location.assign('./searchform.html');
  }