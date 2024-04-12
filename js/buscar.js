async function buscar(){
    console.log("passei por aki");

    const resposta = await fetch("https://66186ce89a41b1b3dfbd0e22.mockapi.io/agendas")

    const respotaDadosAgenda = await resposta.json();

    console.log("resposta: ", respotaDadosAgenda)

    const cards = document.getElementById("cards_games")

    cards.innerHTML = respotaDadosAgenda.map((itemAgenda)=> {
        return "TESTE "
    });

}


console.log("antes de buscar")
buscar();
console.log("depois de buscar")