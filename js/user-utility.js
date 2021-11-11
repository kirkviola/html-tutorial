// http://localhost:31326/user-detail.html?id=1
const getUrlId = () => {
    let url = window.location.href;
    console.log(url);
    let parts = url.split("?");
    console.log(parts);
    let kvpair = parts[1].split("=");
    console.log(kvpair);
    return +kvpair[1];

}

const yesOrNo = (bool) => { // describing type is wise
    return bool ? "Yes" : "No";        
}