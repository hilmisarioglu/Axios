window.onload = function () {
  setTimeout(getUserList, 500);
};

// fetch async await
// const getUserList = async() => {
//     await fetch ("https://reqres.in/api/users?page=1", {
//         method:"GET"
//     })
//     .then(response => response.json())
//     .then(response =>{
//         console.log(response)
//         if(response.data[0].id !="0"){
//             console.log(response.data[0].id)
//                 for (let i = 0; i < response.data.length; i++) {
//                     $("#tbodyUserList").append(`
//                         <tr>
//                             <td>
//                                 <img src="${response.data[i].avatar}"/>
//                             </td>

//                             <td>
//                                 ${response.data[i].id}
//                             </td>

//                             <td>
//                                 ${response.data[i].email}
//                             </td>

//                             <td>
//                                 ${response.data[i].first_name}
//                             </td>

//                             <td>
//                                 ${response.data[i].last_name}
//                             </td>
//                         </tr>

//                         `
//                     )
//                 }
//         }
//     })
//     .catch((error) => console.log(error))
// }
// --------------------------------------------------

// axios
// const getUserList = async () => {
//   const response  = await axios({ //responsu {} isine yazarsak responsetaki dataya ulasabiliriz. böyle bir yapi var.
//     url: "https://reqres.in/api/users?page=1",
//     method: "GET",
//   });
//   if (response.data.id != "0") {
//       console.log("if")
//     for (let i = 0; i < response.data.data.length; i++) {
//       $("#tbodyUserList").append(`
//                     <tr>
//                         <td>
//                             <img src="${response.data.data[i].avatar}"/>
//                         </td>
//                         <td>
//                             ${response.data.data[i].id}
//                         </td>
//                         <td>
//                             ${response.data.data[i].email}
//                         </td>
//                         <td>
//                             ${response.data.data[i].first_name}
//                         </td>
//                         <td>
//                             ${response.data.data[i].last_name}
//                         </td>
//                     </tr>

//                     `);
//     }
//   }
// };

// -------------------------------------------------
// ajax
// const getUserList = () => {
//   $.ajax({ // hem geti hem postu iceren bir method
//     type: "GET",
//     url: "https://reqres.in/api/users?page=1",
//     dataType: "json",
//     success: function (data) {
//       if (data != "") {
//         for (let i = 0; i < data.data.length; i++) {
//           $("#tbodyUserList").append(`
//                                         <tr>
//                                             <td>
//                                                 <img src="${data.data[i].avatar}"/>
//                                             </td>
//                                             <td>
//                                                 ${data.data[i].id}
//                                             </td>
//                                             <td>
//                                                 ${data.data[i].email}
//                                             </td>
//                                             <td>
//                                                 ${data.data[i].first_name}
//                                             </td>
//                                             <td>
//                                                 ${data.data[i].last_name}
//                                             </td>
//                                         </tr>   
                                        
//                                         `);
//         }
//       }
//       else{
//           console.log("ajax send no data")
//       }
//     },
//     // göndermeden önce ilk bir token gönderecek, bu bizim müsteriyi dogrulama prosesimiz.
//     beforeSend: function (request){ //request bize dönmeden ne yapilasi gerekiyorsa burada o tanimlani. mesela token alip dogrulama
//         request.setRequestHeader("token",localStorage.getItem("token"))
//         // document.getElementById("loading").style.display="block";
//         // console.log("getUserList ajax send request before");
//     },
//     complete: function(){
//         // console.log("getUserList ajax send request finished");
//         // document.getElementById("loading").style.display="none";
//     }, 
//     error: function(XMLHttpRequest,textStatus,errorThrown){
//         // postErrorLog("app-"+window.location.pathname,
//         // XMLHttpRequest.responseText, XMLHttpRequest.status, textStatus, errorThrown);

//         // erroru yakalamak önemli, postErrorLog diye bir js fonksiyonum var. Bu function apiye post atiyor.Apide bu postu alip db e gönderiyor.Benim errorLogTablegbi bir tablom var bu tabloma sunu ekliyorum. response text im su ve hata kodum su. Bu hatayi al apiye gönder api de alsin db e yazsin.Uygulamanin feedbackleri icin önemli. 
    
//         if (XMLHttpRequest.readyState ==4) {
//             // 400 mu döndürdü
//         }
//         else if (XMLHttpRequest.readyState ==0){

//         }
//         else {
//             // network problems
//         }
//     }
//   });
// };
// ------------------------------------------------

// Hazir tablo yapisi
// const getUserList  = () => {
//     $("#example").DataTable({
//         ajax: { 
//             url : "https://reqres.in/api/users?page=1",
//             dataSrc : 'data'
//         },
//         type:"GET",
//         dataType:"json",
//         contentType:"application/json; charset=utf-8",
//         columns: [{
//             data: 'id',
//         }, {
//             data:'email',    
//         },{ 
//             data:'first-name',    
//         },,{
//             data:'last-name',    
//         },
//         ]
//     })
// }
// -------------------------------

$(document).ready(function(){
    $("#example").DataTable({
                ajax: { 
                    url : "https://reqres.in/api/users?page=1",
                    dataSrc : 'data'
                },
                type:"GET",
                dataType:"json",
                contentType:"application/json; charset=utf-8",
                columns: [
                {
                    data: 'id',
                }, {
                    data:'email',    
                },{ 
                    data:'first_name',    
                },{
                    data:'last_name',    
                },
                ]
});
})
