
let user = {}


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

const getUserByPk = () => {
    let id = getUrlId();
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", `http://localhost:31326/api/users/${id}`, true);
    xhr.onload = () =>{
        user = xhr.response;
        loaded();
    }
    xhr.send();
}

const remove = () => {
    console.log("Delete user ...");

}
