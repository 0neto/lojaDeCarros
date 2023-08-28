$(document).ready(function() { //Inicia o comando jQuery e cria uma função
    //Carrousel
    $('#carrosel-imagem').slick({ //Foi selecionada a ID carrosel-imagem e foi inicializado o carrosel com .slick
        autoplay: true, //função de automatização do carrosel
    }); 
    //Menu Hamburguer
    $('.menu-hamburger').click(function(){ //Seleciona a classe menu-hamburger, com o evento click
        $('nav').slideToggle(); //Seleciona o nav e adiciona o evento slide up e down com o Slide toggle
    })
    //Mascara
    $('#telefone').mask('(00) 00000-0000', { //Adiciona a mascara proviniente do jQuery Mask
        placeholder: '(__) _____-____'
    });
    //Validação
    $('form').validate({ //Adiciona a validação
        rules: { //Regras da Validação
            nome: {
                required: true //Torna o campo obrigatorio
            },
            email: {
                required: true, //Torna o campo obrigatorio
                email: true //Torna esse campo especifico para email 
            },
            telefone: {
                required: true //Torna o campo obrigatorio
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        //Validações do Submit
        submitHandler: function(form) { //Funcção para capturar o evento Submit
            console.log(form)
        },
        invalidHandler: function(evento, validador) { //Intercepta o click do submit
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) { //Emite um alerta se os campos forem invalidos
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
    //Efeito dos botões Tenho interesse 
    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = ($(this).parent().find('h3').text());

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})