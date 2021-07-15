let urlcandidatos = "http://localhost:3000/candidatos";


const botao = $("#carregar");
const lista = $("#lista");

botao.on("click", function(){
    $.ajax({
        url: urlcandidatos,
        datatype: "json",
        method: "GET",/* obter os dados */
        success: function(resposta){
                //loop $.each
            $.each(resposta, function(indice, item){
               lista.append(
                   `<li class= "list-group-item">
                       ${item.nome} - ${item.vaga}
                   </li>`
               );
            });

        },
        error: function(){
            console.log("erro ao carregar oa dados");
        }
    });
});