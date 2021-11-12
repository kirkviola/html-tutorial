let vendors = [];

const getAllVendors = () => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", "http://localhost:31326/api/vendors", true);
    xhr.onload = () => {
        vendors = xhr.response;
        loaded(vendors);
    }
    xhr.send();
}
const loaded = (vendors) => {
    let tbody = document.getElementById("data");
    tbody.innerHTML = "";
    for(let vendor of vendors){
        let tr = "<tr>";
        tr += `<td>${vendor.id}</td>`;
        tr += `<td>${vendor.code}</td>`;
        tr += `<td>${vendor.name}</td>`;
        tr += `<td>${vendor.address}</td>`;
        tr += `<td>${vendor.city}</td>`;
        tr += `<td>${vendor.state}</td>`;
        tr += `<td>${vendor.zip}</td>`;
        tr += `<td>${vendor.phone}</td>`;
        tr += `<td>${vendor.email}</td>`;
        tr += `<td><a href="vendor-detail.html?id=${vendor.id}">Detail</a> | <a href="vendor-edit.html?id=${vendor.id}">Edit</a></td>`;
        tr += "</tr>";
        tbody.innerHTML += tr;
    }
}