let urlVagas = "http://localhost:3000/vagas"; //endpoint

const selectVaga = document.querySelector("#vaga"); 

/* ajax */
fetch(urlVagas).then(resposta => resposta.json())
.then(dados => {
   selectVaga.innerHTML = "<option></option";

   for( let vaga of dados ) {
       let opcao = document.createElement("option");

       opcao.textContent = vaga.titulo;
       opcao.value = vaga.id;
       selectVaga.appendChild(opcao);
   }
    
});
