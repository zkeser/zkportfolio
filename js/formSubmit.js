function submitToAPI(e) {
  e.preventDefault();
  var URL = "https://wougvj83bd.execute-api.us-east-1.amazonaws.com/prod";

       var Namere = /[A-Za-z]{1}[A-Za-z]/;
       if (!Namere.test($("#name").val())) {
                    alert ("Name can not less than 2 char");
           return;
       }
       if ($("#email").val()=="") {
           alert ("Please enter your email!");
           return;
       }
       var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
       if (!reeamil.test($("#email").val())) {
           alert ("Please enter valid email address");
           return;
       }

  var name = $("#name").val();
  var email = $("#email").val();
  var subject = $("#subject").val();
  var data = {
     name : name,
     email : email,
     subject : subject
   };


  
  $.ajax({
    type: "POST",
    url : URL,
    dataType: "json",
    crossDomain: "true",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(data),

    
    success: function () {
      // clear form and show a success message
      alert("Successfull");
      document.getElementById("contact-form").reset();
  location.reload();
    },
    error: function () {
      // show an error message
      alert("UnSuccessfull");
    }});
}