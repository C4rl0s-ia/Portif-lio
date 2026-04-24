function caixa_mensagem(skill, btnElement) {
    // 1. Remove a classe 'active' de TODOS os cartões para "deitar" os que não estão selecionados
    const allCards = document.querySelectorAll('.skill-card');
    allCards.forEach(card => card.classList.remove('active'));

    // 2. Adiciona a classe 'active' apenas no cartão que está dentro do botão clicado
    const selectedCard = btnElement.querySelector('.skill-card');
    if (selectedCard) {
        selectedCard.classList.add('active');
    }

    // 3. Pega as caixas de texto no HTML
    const areaDeTexto = document.getElementById("caixa-de-texto");
    const containerDetalhes = document.getElementById("container-detalhes");

    const conteudos = {
        backend: `
            <h4>Arquitetura Back-end & Java</h4>
            <p>Minha abordagem para o back-end foca em <strong>escalabilidade, segurança e código limpo</strong>. Utilizo o ecossistema Spring para criar soluções robustas que suportam o crescimento do negócio.</p>
            <ul>
                <li>Desenvolvimento de APIs RESTful seguindo as melhores práticas do mercado.</li>
                <li>Estruturação em Padrão MVC e MVP para separação clara de responsabilidades.</li>
                <li>Integração eficiente com bancos de dados relacionais utilizando Hibernate e Spring Data JPA.</li>
                <li>Forte aplicação de princípios de Orientação a Objetos e metodologias SOLID.</li>
            </ul>
        `,
        bi: `
            <h4>Business Intelligence & Análise de Dados</h4>
            <p>Transformo dados brutos em <strong>informações estratégicas</strong> para facilitar a tomada de decisão em todos os níveis da empresa.</p>
            <ul>
                <li>Criação de queries complexas, CTEs e otimização de consultas em SQL para alta performance.</li>
                <li>Desenvolvimento de Dashboards interativos e painéis gerenciais no Looker Studio.</li>
                <li>Análise de métricas de negócio (KPIs) e cruzamento inteligente de dados.</li>
                <li>Uso de Python (Pandas/Scikit-learn) para limpeza, manipulação e projeções energéticas/estatísticas.</li>
            </ul>
        `,
        saas: `
            <h4>Desenvolvimento SaaS & Soluções</h4>
            <p>Tenho foco total na criação de produtos completos que resolvem <strong>problemas reais do dia a dia</strong> das operações.</p>
            <ul>
                <li>Experiência na arquitetura e construção do EduManager, um sistema de gestão acadêmica (Mini-ERP).</li>
                <li>Estudos focados em roteirização logística e otimização para motoristas autônomos.</li>
                <li>Arquitetura de sistemas modulares para facilitar futuras manutenções e adição de features.</li>
                <li>Visão de produto: constante alinhamento entre a necessidade do cliente e a solução técnica viável.</li>
            </ul>
        `
    };

    let conteudo = conteudos[skill] || "";

    areaDeTexto.innerHTML = conteudo;
    containerDetalhes.classList.add('show');
    
    // 7. Rola a página suavemente um pouco para baixo para garantir que a pessoa veja a caixa
    setTimeout(() => {
        containerDetalhes.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 150);
}