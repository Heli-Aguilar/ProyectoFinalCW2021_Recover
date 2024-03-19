window.addEventListener("load", ()=>{

    let validEmail = new RegExp("^[\\w\\.\\-]{3,24}@(((g|hot)mail|outlook|live)\\.com|(comunidad|alumno\\.enp)\\.unam\\.mx)|.mx$");
    let notValidPw = new RegExp("^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$");

    let send = document.getElementById("a");
    let mail = document.getElementById("email");
    let pw = document.getElementById("pw");

    let validCorrect=0;
    
    send.addEventListener("click", ()=>{
            if(!(validEmail.test(mail.value))||(notValidPw.test(pw.value)))
            {
                alert("Alguno de los campos que introdujiste no es válido, por favor intenta de nuevo");
            }
            else 
            {
                let regist = new FormData(document.getElementById("form"));
                fetch("", {
                    method:"POST",
                    body: regist,
                }).then((response)=>{
                    console.log(response);
                    return response.text();
                }).then((resp)=>{
                    //Usuario no existenteif(resp=="")
                    // {
                    //     alert("¡Este usuario no existe!");
                    // }
                    //else
                    // {
                    //     window.location="../Index.html";
                    // }
                })
            }
    });
})
