let dbData = [
    {name: "Abe", color: "black", number: 13},
    {name: "Betty", color: "red", number: 8},
    {name: "Chris", color: "orange", number: 42}
]

const loaded = () => {
    let tbody = document.getElementById("tbody");
    for(let data of dbData){
        let tr = "<tr>";
        tr += `<td>${data.name}</td>`;
        tr += `<td>${data.color}</td>`;
        tr += `<td>${data.number}</td>`;
        tr += "</tr>";
        tbody.innerHTML += tr;
    }
}

const add = () => {
    let operanda = +document.getElementById("opa").value;
    let operandb = +document.getElementById("opb").value;
    let ans = operanda + operandb;
    document.getElementById("ans").value = ans;
    document.getElementById("lbl").innerHTML="<b>Addition</b>";
    document.getElementById("ans").style.color="black";
}

const sub = () => {
    let operanda = +document.getElementById("opa").value;
    let operandb = +document.getElementById("opb").value;
    let ans = operanda - operandb;
    document.getElementById("ans").value = ans;
    document.getElementById("ans").style.color="red";
}
const mult = () => {
    let operanda = +document.getElementById("opa").value;
    let operandb = +document.getElementById("opb").value;
    let ans = operanda * operandb;
    document.getElementById("ans").value = ans;
    document.getElementById("ans").style.color = "green";
}
const div = () => {
    let operanda = +document.getElementById("opa").value;
    let operandb = +document.getElementById("opb").value;
    let ans;
    if(operandb == 0){
        ans = "Cannot divide by zero." 
    }
    else{
        ans = operanda / operandb;
    }

    document.getElementById("ans").value = ans;
    document.getElementById("ans").style.color="blue";
}
