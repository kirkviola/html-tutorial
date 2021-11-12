$().ready(() => {
        console.log("jQuery is ready!");
        getAllProducts();
        $("#refresh").on("click", () => {
            getAllProducts();
        });
    }); // function () {} works the same

const getAllProducts = () => {
    $.getJSON("http://localhost:31326/api/products")
        .done(
            res => { // A name for "response"
                display(res); // Use data here because this is where it was read
            }
        )
        .fail(
            err => console.error(err) // Passing failed object to console        
        );
}

const display = (products) => {
    let tbody = $("#data"); // Access to the tbody of the table in question
    tbody.empty();
    for(let product of products){
        let tr = $("<tr></tr>");
        let tdId = $(`<td>${product.id}</td>`);
        tr.append(tdId);
        tr.append($(`<td>${product.partNbr}</td>`));
        tr.append($(`<td>${product.name}</td>`));
        tr.append($(`<td>$${product.price.toFixed(2)}</td>`));
        tr.append($(`<td>${product.unit}</td>`));
        let tdAction = $("<td></td>");
        tdAction.append($(`<a href="product-detail.html?id=${product.id}">Detail |  </a>`));
        tdAction.append($(`<a href="product-detail.html?id=${product.id}">Edit</a>`));
        tr.append(tdAction);
        tbody.append(tr);
    }
}