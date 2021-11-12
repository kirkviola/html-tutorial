$().ready(() => {
    getProductByPk();
});


const loaded = (product) => {
    $("#xid").val(product.id);
    $("#xpartnbr").val(product.partNbr);
    $("#xname").val(product.name);
    $("#xprice").val(product.price);
    $("#xunit").val(product.unit);
}

const getProductByPk = () => {
    let id = getUrlId();
    $.getJSON(`http://localhost:31326/api/products/${id}`)
        .done(
            res => {
                console.log(res);
                loaded(res);
            }
        )
        .fail(
            err => console.error(err)
        );
}