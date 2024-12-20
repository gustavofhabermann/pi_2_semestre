function atualizar() {
    const id_atualizacao = document.getElementById('idcliente').value;
    const dados_atualizar = {
        id_cliente: id_atualizacao,
        action: "atualizar",
        nome : document.getElementById('atualizar_nome').value,
        email : document.getElementById('atualizar_email').value,
        telefone : document.getElementById('atualizar_telefone').value,
        rua : document.getElementById('atualizar_rua').value,
        numero : document.getElementById('atualizar_numero').value,
        bairro : document.getElementById('atualizar_bairro').value,
        cidade : document.getElementById('atualizar_cidade').value,
        estado : document.getElementById('atualizar_estado').value,
        cep : document.getElementById('atualizar_cep').value
    };
    
    console.log(dados_atualizar);
    // Fazendo a requisição com fetch
    fetch('../php/ctr_cadastro_clientes.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados_atualizar)
    })
    .then(response => response.json())
    .then(dados_retorno => {
        console.log(dados_retorno);

        if (dados_retorno.success) {
            alert("Atualização com sucesso.");
            location.reload();
        } else {
            alert("Atualização sem sucesso.");
        }
    })
    .catch(() => {
        alert('Erro na requisição. Tente novamente. Frontend no atualizar.');
    });
}


function mostrarFormAtualizar(id) {
    /*
    Função que mostra o formulário de atualização com os dados do cliente respectivo.
    */
   const formAtualizar = document.getElementById('formModalAtualizar');
   formAtualizar.style.display = 'block';
   document.getElementById('idcliente').value = id;
   
   const dados = {
       id: id,
       action: "preencher" // Enviando a ação como parte dos dados
    };

    fetch('../php/ctr_cadastro_clientes.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados) 
    })
    .then(response => response.json())
    .then(dados_retorno => {
        // console.log(dados_retorno);
        if (dados_retorno.success) {
            const cliente = dados_retorno.cliente[0];
            document.getElementById('atualizar_nome').value = cliente.nome;
            document.getElementById('atualizar_email').value = cliente.email;
            document.getElementById('atualizar_telefone').value = cliente.telefone;
            document.getElementById('atualizar_rua').value = cliente.rua;
            document.getElementById('atualizar_numero').value = cliente.numero;
            document.getElementById('atualizar_bairro').value = cliente.bairro;
            document.getElementById('atualizar_cidade').value = cliente.cidade;
            document.getElementById('atualizar_estado').value = cliente.estado;
            document.getElementById('atualizar_cep').value = cliente.cep;
        } else {
            alert(dados_retorno.message);
        }
    })
    .catch(() => {
        alert('Erro na requisição. Tente novamente. Erro no frontend');
    });
}

function cadastrar(){
    const dados_cadastro = {
        action: "cadastrar",
        nome : document.getElementById('nome').value,
        email : document.getElementById('email').value,
        telefone : document.getElementById('telefone').value,
        rua : document.getElementById('rua').value,
        numero : document.getElementById('numero').value,
        bairro : document.getElementById('bairro').value,
        cidade : document.getElementById('cidade').value,
        estado : document.getElementById('estado').value,
        cep : document.getElementById('cep').value
    };
    // 
    console.log(dados_cadastro);
    // Fazendo a requisição com fetch
    fetch('../php/ctr_cadastro_clientes.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados_cadastro)
    })
    .then(response => response.json())
    .then(dados_retorno => {
        console.log(dados_retorno);

        if (dados_retorno.success) {
            alert("Cadastro com sucesso.");
            location.reload();
        } else {
            alert("Cadastro sem sucesso.");
        }
    })
    .catch(() => {
        alert('Erro na requisição. Tente novamente. Frontend no Cadastro.');
    });
}