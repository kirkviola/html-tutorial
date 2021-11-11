const save = () => {
    let user = {};
    user.id = +document.getElementById("xid").value; // Make sure numbers get stored as number
    user.username = document.getElementById("xusername").value;
    user.password = document.getElementById("xpassword").value;
    let password2 = document.getElementById("xpassword2").value;
    if(user.password !== password2){
        alert("Passwords do not match!");
        return;
    }
    user.firstname = document.getElementById("xfname").value;
    user.lastname = document.getElementById("xlname");
    user.phone = document.getElementById("xphone").value;
    user.email = document.getElementById("xemail").value;
    user.isReviewer = document.getElementById("xreviewer").checked;
    user.isAdmin = document.getElementById("xadmin").checked;
    console.log(user);

    window.location.href="user-list.html";
}

const checkpswd = () => {
    let pw1 = document.getElementById("xpassword").value;
    let pw2 = document.getElementById("xpassword2").value;
    if(pw1 !== pw2){
        alert("Passwords must match!");
        pw1 = "";
        pw2 = "";
    }
}