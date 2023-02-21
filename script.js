function validateform() {
    var fname =
        document.forms.RegForm.fname.value;
    var lname =
        document.forms.RegForm.lname.value;
    var email =
        document.forms.RegForm.EMail.value;
    var password =
        document.forms.RegForm.Password.value;

    var regName = /\d+$/g;
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

    if (fname == "" || regName.test(fname)) {
        window.alert("Please enter your first name properly.");
        return false;
    }

    if (lname == "" || regName.test(lname)) {
        window.alert("Please enter your last name properly.");
        return false;
    }


    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        return false;
    }

    if (password == "") {
        alert("Please enter your password");
        return false;
    }

    if (password.length < 6) {
        alert("Password should be atleast 6 character long");
        return false;

    }
    store(fname, lname);

    return true;

}


function store(fname, lname) {
    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
}