function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    // Seleciona o elemento HTML com o ID "resultados-pesquisa" e armazena na variável section.
    // Este elemento será usado para inserir os resultados da pesquisa.
    
let campoPesquisa = document.getElementById("campo-pesquisa").value;

if (campoPesquisa == "") {
section.innerHTML = "<p>Nenhuma linguagem encontrada<p>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase ();


    let resultados = "";
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    // A cada iteração do loop, novos elementos HTML serão concatenados a esta string.

    let titulo = "";
    let descricao = "";


    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()

        // Itera sobre cada objeto no array "dados".
        // A variável "dado" representará cada objeto em cada iteração.
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {

            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</h2> <p class="descricao-meta">${dado.descricao}</p> <a href=${dado.link} target="_blank">acesse a pagina da Wikpédia sobre Arte</a> </div>
            `;
            // Concatena uma nova div com as informações do objeto atual à string "resultados".
            // A template literal (``) permite a interpolação de variáveis usando ${}.


 
        }
        
    }
    
    section.innerHTML = resultados;
    // Atribui o conteúdo da string "resultados" ao elemento HTML selecionado.
    // Isso substitui o conteúdo existente dentro da seção de resultados.
}