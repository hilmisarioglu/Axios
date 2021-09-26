// import axios from "axios";

// $= query selector e benziyor
// $(document).ready(function() {
//     setTimeout(fillFormInput,1000)
// })
window.onload = function () {
    setTimeout(fillFormInput,1000)
}

const fillFormInput = () => {
  let email = (document.getElementById("email").value = "eve.holt@reqres.in");
  let password = (document.getElementById("psw").value = "pistol");
  localStorage.setItem("email", email); // setItem ile local storage a attik
  localStorage.setItem("password", password); // setItem ile local storage a attik
};


const registerbtn = document.querySelector(".registerbtn");
console.log(registerbtn);
registerbtn.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log("Yusuf kral")
    apiRegister()
});
// -------------------------------------

// eski yöntem XMLHTTPREQUEST old method of fetch and axios

// const apiRegister = () => {

//     let email = document.getElementById("email");
//     let password = document.getElementById("psw");
//     const bodyData = {
//         email : email.value,
//         password : password.value
//     }
//     var xhr = new XMLHttpRequest(); // apiye bir köprü actik, istek önceci köprü acilir is bitince kapatilir, kaynak tüketimini azaltir.
//     xhr.open("POST", "https://reqres.in/api/register") // istek atilacak Method , URL.Bu ikisi araciligiyla yol acilir.
//     xhr.setRequestHeader("Content-Type","application/json") //veri gönderme tipini belirledik. Gidecek veri json formatinda
//     xhr.send(JSON.stringify(bodyData)); // Burada bodyData yi JSON a cevirdi ve gönderdi
//     // {
//     //     "email" : "eve.holt@reqres.in"
//     //     "password" : "pistol"
//     // }
//     // bu hale geldi
//     xhr.onload = function(){  // Islem döndügü zaman onload ile apiden gelen response u yakaliyorum.
//         console.log(xhr.responseText) // JSON yapida geldi
//         let data = JSON.parse(xhr.responseText)   // JSON i JS e cevirdi , array yapti yani
//         if(data.id !="0"){
//             console.log(data)   // dönen veri string oldugu icin string 0 yazdik
//             console.log(...data.token)
//             localStorage.setItem("token", data.token) // setItem ile local storage a attik
//         }
//     }
//     email.value="";
//     password.value="";
// }
// Not: JSON.stringify :JavaScripti JSON biçimine dönüştürmek için kullanılır.
// JSON.parse : JSON nesnelerini JavaScript’e dönüştürmek için kullanılır.

// ----------------------------------------------------------------

// fetch ile veri cekme

// async function apiRegister() {
//   let email = document.getElementById("email");
//   let password = document.getElementById("psw");
//   const bodyData = {
//     email: email.value,
//     password: password.value,
//   };

//   await fetch("https://reqres.in/api/register", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     }, // veri gönderme tipini belirledik. Gidecek veri json formatinda.Bu hep headers kisminda yapilir
//     body: JSON.stringify(bodyData), // Burada yukarida olusturdugumuz bodyData yi yani JS i JSON a cevirdi gönderdi
//   })
//     .then((response) => response.json()) // parse yarine bu kullanilir, JSON i JS e cevirir.
//     .then((data) => {
//       if (data.id != 0) {
//         console.log(data);
//         localStorage.setItem("token", data.token);
//         sessionStorage.setItem("token", data.token); // sekme kapaninca gider
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   email.value = "";
//   password.value = "";
// }

// apiRegister();
// let apiRegister = async () => {
//     let response = await fetch ("https://reqres.in/api/register");
//     let data = await response.json();
//     console.log(data)
//     return data
// }
// apiRegister();

//     // Birden fazla promise yapisi döndürmek zorunda kalirsak async await kelimelerini yaz. Gelen veriyi html icine gömmeye calisacam diyelim. Bu sebeple api islemlerinde asyncron yapilar kullanilir. await, bi bekle diyor yani ben bi geleyim bekle diyor.

// ----------------------------------------------------------------

// axios

const apiRegister = async ()=> {
    let email = document.getElementById("email").value;
    let password = document.getElementById("psw").value;
    const data = await axios({
        url : 'https://reqres.in/api/register',
        method: 'post',
        data: {
            email : email,
            password : password  //biz bu sekilde gönderecegiz, o istedigimiz JS formatinda bize geri döndürecek. Cevirmekle ugrasmicaz.
        }
    });
    if(data.data.id != "0" ){
        console.log(data.data.token);
        window.location.href = "./userList.html" //userList i actik
    }
}

// Not; axios ta bodyData tanimlamaya gerek yoktur. Ekstradan nesne göndermeme gerek kalmiyor. Ne stringfy yaptik ne de parse yaptik.

// ----------------------------------------------------------------

// userList sayfasina yönlendirdikten sonra GET methoduyla listeyi dolduracaz





