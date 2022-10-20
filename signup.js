const firebaseConfig = {
    apiKey: "AIzaSyAiIwT9rM1o7549zhDwyleIo_LP0gg0d6s",
    authDomain: "edulife-usr-nm.firebaseapp.com",
    projectId: "edulife-usr-nm",
    storageBucket: "edulife-usr-nm.appspot.com",
    messagingSenderId: "922167118091",
    appId: "1:922167118091:web:ffead83e0e78a601f6fa0e",
    measurementId: "G-LSGC3XCZBD"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser() {
    var uid = document.getElementById("u_name").value;
    var psw = document.getElementById("pwd").value;
    localStorage.setItem("Username_is_great", uid);
    localStorage.setItem("Password", psw);


}
function Upload() {
    var uid1 = document.getElementById("u_name").value;
    alert("Membership");
    document.getElementById("UserID").innerHTML = uid1;
}
function coolme() {
    alert("done");
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var age = document.getElementById("age").value;
    var place = document.getElementById("place").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;
    var pnum = document.getElementById("phone").value;
    firebase.database().ref("/").child(first_name + " " + last_name).update(
        {
            customer_age: age,
            customer_residency: place,
            Email_id: email,
            customer_comment: comment,
            phone_number: pnum

        }
    );
    //document.getElementById("remove").innerHTML = "";
    document.getElementById("addDiv").innerHTML = "<div class='container'><h1 class='text-success'>Thank You!</h1><br><small class='text-success'>Your form is submitted successfully!</small><img src='https://cdn-images-1.medium.com/max/1600/1*Tt1d7z553M0-vKfo0N9Krw.gif' height='70' width='90'><br><small class='text-danger'>if you have not filled the form correctly, you can refresh the page and fill it again</small></div>";

}

//function submit_form() {

//if (first_name == null) {
//  document.getElementById("1st").innerHTML = "*Please fill out your first name";
//}
//if (first_name != null) {
//document.getElementById("1st").innerHTML =  "";
//}
//if (last_name == null) {
//document.getElementById("2st").innerHTML = "*Please fill out  your last name";
//}
//else {
//    ///document.getElementById("2st").innerHTML = "";
//}
//}
function validate() {
    var validate = true;
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var age = document.getElementById("age").value;
    var place = document.getElementById("place").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;
    var pnum = document.getElementById("phone").value;
    var uid = document.getElementById("uid").value;
    var psw = document.getElementById("psw").value;
    if (first_name == "") {
        validate = false;
    }
    if (last_name == "") {
        validate = false;
    }
    if (age == "") {
        validate = false;
    }
    if (place == "") {
        validate = false;
    }
    if (email == "") {
        validate = false;
    }
    if (comment == "") {
        validate = false;
    }
    if (pnum == "") {
        validate = false;
    }
    if (uid == "") {
        validate = false;
    }
    if (psw == "") {
        validate = false;
    }

    return validate;
}
function submit_form() {
    if (validate() == true) {
        var first_name = document.getElementById("first_name").value;
        var last_name = document.getElementById("last_name").value;
        var age = document.getElementById("age").value;
        var place = document.getElementById("place").value;
        var email = document.getElementById("email").value;
        var comment = document.getElementById("comment").value;
        var pnum = document.getElementById("validationCustom08").value;
        var uid = document.getElementById("uid").value;
        var psw = document.getElementById("psw").value;
        firebase.database().ref("/").child(first_name + last_name).update(
            {
                customer_age: age,
                customer_residency: place,
                Email_id: email,
                customer_comment: comment,
                phone_number: pnum,
                user_id: uid,
                password: psw


            }
        );
        //document.getElementById("remove").innerHTML = "";
        document.getElementById("addDiv").innerHTML = "<div class='container'><h1 class='text-success'>Thank You!</h1><br><small class='text-success'>Your form is submitted successfully!</small><img src='https://cdn-images-1.medium.com/max/1600/1*Tt1d7z553M0-vKfo0N9Krw.gif' height='70' width='90'><br><small class='text-danger'>if you have not filled the form correctly, you can refresh the page and fill it again</small></div>";
    }
}