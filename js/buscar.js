async function buscar(){
    console.log("passei por aki");

    const resposta = await fetch("https://66186ce89a41b1b3dfbd0e22.mockapi.io/agendas")

    const respotaDadosAgenda = await resposta.json();

    console.log("resposta: ", respotaDadosAgenda)

    const cards = document.getElementById("cards_games")

    cards.innerHTML = respotaDadosAgenda.map((itemAgenda)=> {
        return `
        <div class="cardItem">
        <div class="dataGame"> 
            <img src="../imagens/calendar-solid.svg" alt=""> ${itemAgenda.dataJogo} 
        </div>
        <img class="img-background" src="${itemAgenda.urlImagem}" alt="">
        <div class="descricao">
            <p> <strong>${itemAgenda.nome}</strong> </p>
            <p>${itemAgenda.descricao}</p>
            <p><strong>Gamers: </strong></p>

            <div class="gamers">${  
                    itemAgenda.gamers.map((gamerItem => {
                        return `<div class="gamerItem">${gamerItem}</div>`
                    })).join('')
                }
            </div>

          
        </div>  
        <div class="assistir">
                <a class="assistirItem"> <img src="../imagens/youtube.svg" alt=""> Assistir </a>
        </div>
    </div>
    `
    
    }).join('');

}


console.log("antes de buscar")
buscar();
console.log("depois de buscar")