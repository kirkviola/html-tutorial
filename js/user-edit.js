let user = {
    id: 1,
    username: "kirk.viola",
    password: "aBcD",
    firstname: "Matthew",
    lastname: "Kirkendall",
    phone: "555-5555",
    email: "vla.com",
    isReviewer: true,
    isAdmin: true,
}

const loaded = () => {
    document.getElementById("xid").value = user.id;
    document.getElementById("xusername").value = user.username;
    document.getElementById("xpassword").value = user.password;
    document.getElementById("xpassword2").value = user.password;
    document.getElementById("xfname").value = user.firstname;
    document.getElementById("xlname").value = user.lastname;
    document.getElementById("xphone").value = user.phone;
    document.getElementById("xemail").value = user.email;
    document.getElementById("xreviewer").checked = user.isReviewer;
    document.getElementById("xadmin").checked = user.isAdmin;
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