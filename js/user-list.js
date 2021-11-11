let users = [];

const getAllUsers = () => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", "http://localhost:31326/api/users", true);
    xhr.onload = () => {
        users = xhr.response;
        loaded(users);
    }
    xhr.send();
}
const loaded = (users) => {
    let tbody = document.getElementById("data"); // stores the element to be modified
    tbody.innerHTML = ""; // clears tag for a refresh; prevents duplication
    for(let data of users){
        let tr = "<tr>";
        tr += `<td>${data.id}</td>`;
        tr += `<td>${data.username}</td>`;
        tr += `<td>${data.firstname} ${data.lastname}</td>`;
        tr += `<td>${data.phone}</td>`;
        tr += `<td>${data.email}</td>`;
        tr += `<td>${yesOrNo(data.isReviewer)}</td>`;
        tr += `<td>${yesOrNo(data.isAdmin)}</td>`;
        tr += `<td><a href="user-detail.html?id=${data.id}">Detail</a> | <a href="user-edit.html?id=${data.id}">Edit</a></td>`;
        tr += "</tr>";
        tbody.innerHTML += tr;
    }
}


