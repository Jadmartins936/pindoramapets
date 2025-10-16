document.addEventListener('DOMContentLoaded', function () {
  const avaliacoes = [
  { "nome": "Carlos Alberto", "estrelas": 5, "texto": "Atendimento excepcional! A equipe foi muito cuidadosa e atenciosa com meu pet.", "imagem": "assets/imgs/avaliador3.jpg" },
  { "nome": "Neymar", "estrelas": 5, "texto": "Minha cachorra não poderia estar mais feliz com o serviço desta clínica. Profissionais qualificados e atenciosos.", "imagem": "assets/imgs/avaliador1.jpg" },
  { "nome": "Josseana da Silva", "estrelas": 5, "texto": "Excelente clínica! Desde o primeiro contato, fui atendido com profissionalismo e carinho.", "imagem": "assets/imgs/avaliador2.png" },
  { "nome": "João Henrique", "estrelas": 5, "texto": "Atendimento de primeira, cuidam muito bem dos animais e sempre explicam tudo com clareza.", "imagem": "assets/imgs/avaliador3.jpg" },
  { "nome": "Adanilton", "estrelas": 5, "texto": "A clínica é muito bem equipada, e os profissionais são incríveis, mas o tempo de espera poderia ser menor.", "imagem": "assets/imgs/avaliador1.jpg" },
  { "nome": "Luciana da Silva", "estrelas": 5, "texto": "Profissionais capacitados e atenciosos, meu gato recebeu o melhor cuidado. Recomendo muito!", "imagem": "assets/imgs/avaliador2.png" },
  { "nome": "Matheus Lando", "estrelas": 5, "texto": "A equipe é super dedicada e o ambiente é acolhedor, perfeito para quem se importa com o bem-estar do pet.", "imagem": "assets/imgs/avaliador3.jpg" },
  { "nome": "Luis", "estrelas": 5, "texto": "Atendimento excelente e muito atencioso! Meu pet recebeu todo o cuidado necessário e ficou ótimo.", "imagem": "assets/imgs/avaliador1.jpg" },
  { "nome": "Claudire da Silva", "estrelas": 4, "texto": "Fiquei satisfeita com o atendimento, mas achei os preços um pouco altos para alguns serviços.", "imagem": "assets/imgs/avaliador2.png" }
]

  let paginaAtual = 1;
  const totalAvaliacoes = avaliacoes.length;
  const totalPaginas = Math.ceil(totalAvaliacoes / 3);

  const tituloAvaliacoes = document.getElementById('avaliacoes-titulo');
  const listaAvaliacoes = document.getElementById('avaliacoes-lista');
  const paginaAtualContainer = document.getElementById('pagina-id');
  const btnProxima = document.getElementById('btn-paginacao-proxima');
  const btnAnterior = document.getElementById('btn-paginacao-anterior');

  function renderizarAvaliacoes() {
    listaAvaliacoes.innerHTML = '';
    const inicio = (paginaAtual - 1) * 3;
    const fim = inicio + 3;
    const avaliacoesPagina = avaliacoes.slice(inicio, fim);
    tituloAvaliacoes.textContent = totalAvaliacoes > 1 ? `Avaliações (${totalAvaliacoes})` : `Avaliação (${totalAvaliacoes})`;

    avaliacoesPagina.forEach(comentario => {
      const li = document.createElement('li');
      li.className = 'comentario';
      const estrelasHtml = '⭐'.repeat(comentario.estrelas);

      const comentarioCardHtml = `
                <li class="comentario-card">
                    <img src="${comentario.imagem}" alt="Foto de ${comentario.nome}" class="comentario-autor-imagem">
                    <div class="comentario-conteudo">
                        <div class="comentario-estrelas">${estrelasHtml}</div>
                        <h3 class="comentario-autor-nome">${comentario.nome}</h3>
                        <p class="comentario-texto">${comentario.texto}</p>
                    </div>
                </li>
            `;
      listaAvaliacoes.insertAdjacentHTML('beforeend', comentarioCardHtml);
    });
    paginaAtualContainer.textContent = paginaAtual;
    btnProxima.style.display = paginaAtual < totalPaginas ? 'flex' : 'none';
    btnAnterior.style.display = paginaAtual > 1 ? 'flex' : 'none';
  }

  renderizarAvaliacoes();

  btnProxima.addEventListener('click', function () {
    if (paginaAtual < totalPaginas) {
      paginaAtual++;
      renderizarAvaliacoes();
    }
  });

  btnAnterior.addEventListener('click', function () {
    if (paginaAtual > 1) {
      paginaAtual--;
      renderizarAvaliacoes();
    }
  });
});