//----------------------------- REGISTRATION---------------------------

$("#registration").submit(function (e) {
    e.preventDefault();

    var email = $("#regEmail").val();
    var loz1 = $("#regPass").val();
    var loz2 = $("#regPass2").val();


    var sendData = {
        "Email": email,
        "Password": loz1,
        "ConfirmPassword": loz2
    };

    $.ajax({
        type: "POST",
        url: 'http://' + host + "/api/Account/Register",
        data: sendData

    }).done(function (data) {

        $("#regEmail").val('');
        $("#regPass").val('');
        $("#regPass2").val('');
        $("#loginDiv").css("display", "block");
        $("#regForm").css("display", "none");


        





    }).fail(function (data) {
        alert("Your registration failed! Try Again!");
    });
});
//-----------------------LOGIN------------------------

function logIn() {

    var email = $("#loginEmail").val();
    var loz = $("#loginPass").val();

    var sendData = {
        "grant_type": "password",
        "username": email,
        "password": loz
    };

    $.ajax({
        "type": "POST",
        "url": 'http://' + host + "/Token",
        "data": sendData

    }).done(function (data) {
        console.log(data);
        $("#info").empty().append("Logged in user: " + data.userName);

        token = data.access_token;
        console.log(token);
        $("#loginEmail").val('');
        $("#loginPass").val('');
        $("#loginDiv").css("display", "none");
        $("#regForm").css("display", "none");
        $("#logoutDiv").css("display", "block");
        $.getJSON(productsUrl, setProducts);
        

    }).fail(function (data) {
        alert("Your login attempt failed! Try Again!");
    });

};