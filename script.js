// Dados dos jogos
const games = [
    {
        title: 'Corrida Infinita',
        description: 'Corrida Infinita é um jogo de corrida arcade em estilo endless runner, onde o jogador controla um carro em uma pista infinita, desviando de obstáculos e coletando moedas.',
        video: 'jogos/corrida-infinita/corrida infinita.mp4',
        url: 'jogos/corrida-infinita/index.html'
    },
    {
        title: 'Mad Evolution: Idle Merge',
        description: 'Monstros, fusões e caos - o jogo idle de evolução mais insano! Combine monstros malucos, transforme-os em formas bizarras e explore mundos desconhecidos. Colete moedas sem parar, melhore tudo o que puder e construa seu império maluco de monstros..',
        video: 'jogos/Mad-Evolution-Idle-Merge/mile.mp4',
        url: 'jogos/Mad-Evolution-Idle-Merge/index.html'
    },
    { 
        title: 'Pop! Pow! Witch Pong!',
        description: 'Experimente uma mistura única de ação de quebrar tijolos e estratégia roguelike em Pop! estouro! Pong de bruxa!! Torne-se uma bruxa mágica e dispare bolas mágicas para liberar feitiços poderosos e limpar blocos em formato de monstros. Com cada vitória, você ganha experiência, sobe de nível e escolhe habilidades aleatórias para aprimorar seu personagem de infinitas maneiras!',
        video: 'jogos/Pop!-Pow!-Witch-Pong!/Pop! Pow!.mp4',
        url: 'jogos/Pop!-Pow!-Witch-Pong!/index.html'
    },
    {
        title: 'Mascote Virtual',
        description: 'Este é um jogo interativo onde você cuida de um mascote virtual carismático desenvolvido em JavaScript e HTML Canvas. O mascote possui três atributos principais: fome, felicidade e energia, que precisam ser gerenciados pelo jogador.',
        video: 'jogos/Mascote-Virtual/Mascote Virtual.mp4',
        url: 'jogos/Mascote-Virtual/index.html'
    },
    {
        title: 'Alien Defender',
        description: 'Alien Defender é um jogo de ação espacial onde o jogador controla nave alienígena defensora usando o mouse. O objetivo é proteger o espaço atirando contra planetas terra que descem pela tela.',
        video: 'jogos/Alien-Defender/Alien Defender.mp4',
        url: 'jogos/Alien-Defender/index.html'
    },
    {
        title: 'Happy Bird',
        description: 'Happy Bird é uma versão personalizada do famoso jogo Flappy Bird, onde o jogador controla um pássaro que deve navegar através de obstáculos (canos) sem colidir.',
        video: 'jogos/Happy-Bird/Happy Bird.mp4',
        url: 'jogos/Happy-Bird/index.html'
    },
    {
        title: 'Novo Truco Paulista',
        description: 'O Novo Truco Paulista é uma implementação digital do tradicional jogo de cartas Truco, muito popular no estado de São Paulo, Brasil. Este jogo apresenta:',
        video: 'jogos/Novo-Truco-Paulista/Novo Truco Paulista.mp4',
        url: 'jogos/Novo-Truco-Paulista/index.html'
    },
    {
        title: 'Random Cards: Tower Defense',
        description: 'Participe de um emocionante jogo de cartas, batalhas de monstros e defesa de torres chamado Random Cars Tower Defense, onde você faz tudo o que pode para defender as muralhas da sua cidade, impedindo a invasão dos seus inimigos.',
        video: 'jogos/Random-Cards-Tower-Defense/Random-Cards-Tower-Defense.mp4',
        url: 'jogos/Random-Cards-Tower-Defense/index.html'
    },
    {
        title: 'Ragdoll Archers',
        description: 'O Ragdoll Archer é um jogo de arco e flecha com personagens stickman e física realista de flechas e armaduras. As flechas ricocheteiam com sons ressonantes, enquanto as flechas exclusivas oferecem uma jogabilidade diversificada. Com danos variados a partes do corpo, um sistema de progressão de heróis, inimigos desafiadores e gráficos cativantes, experimente o emocionante mundo do arco e flecha. Testemunhe a física surpreendente em primeira mão - experimente!',
        video: 'jogos/Ragdoll-Archers/Ragdoll Archers.mp4',
        url: 'jogos/Ragdoll-Archers/index.html'
    },
    {
        title: 'Moto X3M 5: Pool Party',
        description: 'Moto X3M 5: Pool Party é o quinto título incrível da série Moto X3M. A jogabilidade é tão empolgante quanto no Moto X3M original: você controla uma motocicleta de motocross e deve percorrer uma série de níveis o mais rápido possível.',
        video: 'jogos/Moto-X3M-Pool-Party/Moto-X3M-Pool-Party.mp4',
        url: 'jogos/Moto-X3M-Pool-Party/index.html'
    },
    {
        title: 'Dança dos Grilos',
        description: 'Um jogo musical divertido onde você dança com grilos ao ritmo da música! Teste suas habilidades de ritmo e coordenação neste jogo envolvente.',
        video: 'jogos/Dança-dos-Grilos/Dança dos Grilos.mp4',
        url: 'jogos/Dança-dos-Grilos/index.html'
    },
    {
        title: 'Jogo da Cobrinha',
        description: '(Snake Game) Este é um jogo da cobrinha moderno e interativo implementado com HTML5 Canvas e JavaScript.',
        video: 'jogos/Jogo-da-Cobrinha/Jogo da Cobrinha.mp4',
        url: 'jogos/Jogo-da-Cobrinha/index.html'
    },
    
];

// Configurações da paginação
const ITEMS_PER_PAGE = 6;
let currentPage = parseInt(localStorage.getItem('lastPage')) || 1;

// Função para criar os cards dos jogos com paginação
function createGameCards() {
    const gamesContainer = document.getElementById('gamesContainer');
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedGames = games.slice(startIndex, endIndex);
    
    // Remove a paginação existente se houver
    const existingPagination = document.querySelector('.pagination');
    if (existingPagination) {
        existingPagination.remove();
    }
    
    gamesContainer.innerHTML = '';
    
    paginatedGames.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        
        const mediaElement = `<video src="${game.video}" class="game-image" autoplay loop muted playsinline></video>`;
        
        card.innerHTML = `
            ${mediaElement}
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <p class="game-description">${game.description}</p>
                <a href="${game.url}" class="play-button" onclick="localStorage.setItem('lastPage', currentPage)">Jogar Agora</a>
            </div>
        `;

        // Adiciona efeito de hover com som
        card.querySelector('.play-button').addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px)';
        });

        card.querySelector('.play-button').addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(-10px)';
        });

        gamesContainer.appendChild(card);
    });

    createPagination();
}

// Função para criar a paginação
function createPagination() {
    const totalPages = Math.ceil(games.length / ITEMS_PER_PAGE);
    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'pagination';
    
    // Botão Anterior
    const prevButton = document.createElement('button');
    prevButton.className = 'pagination-button prev';
    prevButton.innerHTML = '&larr;';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            createGameCards();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    // Números das páginas
    const pageNumbers = document.createElement('div');
    pageNumbers.className = 'page-numbers';
    
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = `page-number ${currentPage === i ? 'active' : ''}`;
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            createGameCards();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        pageNumbers.appendChild(pageButton);
    }
    
    // Botão Próximo
    const nextButton = document.createElement('button');
    nextButton.className = 'pagination-button next';
    nextButton.innerHTML = '&rarr;';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            createGameCards();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    paginationContainer.appendChild(prevButton);
    paginationContainer.appendChild(pageNumbers);
    paginationContainer.appendChild(nextButton);
    
    const gamesContainer = document.getElementById('gamesContainer');
    gamesContainer.parentNode.insertBefore(paginationContainer, gamesContainer.nextSibling);
}


// Função para criar e mostrar o modal
function showModal(title, content) {
    // Cria o overlay do modal se não existir
    let modalOverlay = document.querySelector('.modal-overlay');
    if (!modalOverlay) {
        modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay';
        document.body.appendChild(modalOverlay);
    }

    // Cria o conteúdo do modal
    modalOverlay.innerHTML = `
        <div class="modal">
            <button class="modal-close">&times;</button>
            <h3 class="modal-title">${title}</h3>
            <div class="modal-content">${content}</div>
        </div>
    `;

    // Mostra o modal com animação
    requestAnimationFrame(() => {
        modalOverlay.style.display = 'flex';
        const modal = modalOverlay.querySelector('.modal');
        requestAnimationFrame(() => {
            modal.classList.add('active');
        });
    });

    // Adiciona evento para fechar o modal
    const closeButton = modalOverlay.querySelector('.modal-close');
    closeButton.addEventListener('click', () => {
        const modal = modalOverlay.querySelector('.modal');
        modal.classList.remove('active');
        setTimeout(() => {
            modalOverlay.style.display = 'none';
        }, 300);
    });

    // Fecha o modal ao clicar fora dele
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            const modal = modalOverlay.querySelector('.modal');
            modal.classList.remove('active');
            setTimeout(() => {
                modalOverlay.style.display = 'none';
            }, 300);
        }
    });
}

// Inicializa a página
document.addEventListener('DOMContentLoaded', () => {
    createGameCards();

    // Adiciona animação de fade-in aos elementos
    const elements = document.querySelectorAll('.game-card, .faq-item');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    // Adiciona eventos de clique para as perguntas frequentes
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.querySelector('h3').textContent;
            const content = item.querySelector('p').textContent;
            showModal(title, content);
        });

        // Adiciona cursor pointer e hover effect
        item.style.cursor = 'pointer';
    });
});