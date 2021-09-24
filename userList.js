window.onload = function () {
    setTimeout(getUserList,2000)
    console.log("Hilmi")
}
const getUserList = async() => {
    await fetch ("https://reqres.in/api/users?page=1", {
        method:"GET"
    })
    .then(response => response.json())
    .then(response =>{
        console.log(response)
        if(response.data[0].id !="0"){
            console.log(response.data[0].id)
                for (let i = 0; i < response.data.length; i++) {
                    $("#tbodyUserList").append(`
                        <tr>
                            <td>
                                <img src="${response.data[i].avatar}"/>
                            </td>

                            <td>
                                ${response.data[i].id}
                            </td>

                            <td>
                                ${response.data[i].email}
                            </td>

                            <td>
                                ${response.data[i].first_name}
                            </td>

                            <td>
                                ${response.data[i].last_name}
                            </td>
                        </tr>   
                       
                        `
                    )
                }
        }
    })
    .catch((error) => console.log(error))
}