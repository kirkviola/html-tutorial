;
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
    document.getElementById("xfname").value = user.firstname;
    document.getElementById("xlname").value = user.lastname;
    document.getElementById("xphone").value = user.phone;
    document.getElementById("xemail").value = user.email;
    document.getElementById("xreviewer").value = yesOrNo(user.isReviewer);
    document.getElementById("xadmin").value = yesOrNo(user.isAdmin);
}

const yesOrNo = (bool) => { // describing type is wise
    return bool ? "Ja" : "Nein";        
} // Duplicated; will be replaced later
