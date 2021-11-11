let users = [
    {
        id: 1,
        username: "kirk.viola",
        password: "aBcD",
        firstname: "Matthew",
        lastname: "Kirkendall",
        phone: "555-5555",
        email: "vla.com",
        isReviewer: true,
        isAdmin: true,
    },
    {
        id: 4,
        username: "butter",
        password: "bro",
        firstname: "James",
        lastname: "Butterworth",
        phone: "111-1111",
        email: "wow.com",
        isReviewer: false,
        isAdmin: false,
    },
    {
        id: 5,
        username: "cadmus",
        password: "bad",
        firstname: "Terry",
        lastname: "Jones",
        phone: "222-2222",
        email: "python.org",
        isReviewer: false,
        isAdmin: false,
    },
    {
        id: 6,
        username: "todd",
        password: "tucker",
        firstname: "todd",
        lastname: "tucker",
        phone: "123-4567",
        email: "person@email.com",
        isReviewer: false,
        isAdmin: false,
    }
]
const loaded = () => {
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

const yesOrNo = (bool) => { // describing type is wise
        return bool ? "Ja" : "Nein";        
}