let urlcandidatos = " http://localhost:3000/candidatos"//endpoint (api) candidatos
const formulario = $("#cadastro");
const msg = $("#mensagem");
formulario.on("submit", function(event){
    
    event.preventDefault();


    let dados = {
        nome : $("#nome").val(),
        data : $("#data").val(),
        telefone : $("#telefone").val(),
        email : $("#email").val(),
        vaga : $("#vaga option:selected").text()
    };
    /* console.log(dados); */
    /* usando ajax via jquery */
    $.ajax({
        url : urlcandidatos,
        method : "POST",
        data : dados, 
        success : function(){
            /* alert("dados enviados com sucesso!!") */
            msg.text("dados enviados com sucesso");
            msg.css("color", "blue");
            formulario[0].reset();//limpar campos form
        },
        error : function(){
            alert("deu ruim");
            msg.text("deu ruim!!");
            msg.css("color","red");
        }
    });




});
