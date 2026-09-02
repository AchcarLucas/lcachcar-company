const GA_ID = 'G-WXNBBTR0ZG';
const ANALYTICS_CONSENT_KEY = 'analytics-consent';

function loadGoogleAnalytics() {
  if (window.googleAnalyticsLoaded) {
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });

  window.googleAnalyticsLoaded = true;
}

function saveAnalyticsConsent(choice) {
  localStorage.setItem(ANALYTICS_CONSENT_KEY, choice);
  const banner = document.getElementById('cookie-banner');
  if (banner) {
    banner.hidden = true;
  }

  if (choice === 'accepted') {
    loadGoogleAnalytics();
  }
}

function initAnalyticsConsent() {
  const consent = localStorage.getItem(ANALYTICS_CONSENT_KEY);
  const banner = document.getElementById('cookie-banner');

  if (!banner) {
    return;
  }

  if (consent === 'accepted') {
    loadGoogleAnalytics();
    banner.hidden = true;
    return;
  }

  if (consent === 'rejected') {
    banner.hidden = true;
    return;
  }

  banner.hidden = false;
  document.getElementById('accept-analytics')?.addEventListener('click', () => saveAnalyticsConsent('accepted'));
  document.getElementById('reject-analytics')?.addEventListener('click', () => saveAnalyticsConsent('rejected'));
}

const translations = {
  en: {
    'page.title': 'Lucas Campos Achcar | Software Developer',
    'language.switcher': 'Language switcher',
    'hero.name': 'Lucas Campos Achcar',
    'hero.lead': 'My journey has been shaped by software development projects and studies, always trying to understand how the different layers of a solution connect. I have been exploring C++, Python, and other technologies through projects in computer graphics, numerical analysis, and embedded systems, including games, educational tools, signal analysis, and monitoring systems. These projects are a practical way to learn, from implementing shaders and algorithms to developing firmware, hardware, and complete applications.',
    'hero.github': 'GitHub',
    'hero.linkedin': 'LinkedIn',
    'skills.python': 'Python',
    'skills.cpp': 'C/C++',
    'skills.opengl': 'OpenGL',
    'skills.arduino': 'Arduino',
    'skills.esp32': 'ESP32 / Arduino',
    'skills.electronics': 'Electronics',
    'skills.crypto': 'Cryptography',
    'skills.systems': 'Systems',
    'skills.algorithms': 'Algorithms',
    'profile.title': 'Professional profile',
    'profile.text': 'Practical profile with public projects in software, computer graphics, electronics, and systems fundamentals.',
    'about.title': 'Summary',
    'about.text': 'My work combines implementation and technical investigation: I develop Python tools, C++ applications and libraries, OpenGL/GLSL experiments, and ESP32 embedded solutions. I am especially interested in rendering, simulation, protocols, electronics, and algorithms.',
    'skills.title': 'Skills',
    'skills.dev': 'Languages and tools',
    'skills.interests': 'Areas of interest',
    'skills.javascript': 'JavaScript',
    'skills.haskell': 'Haskell',
    'skills.graphics': 'Graphics',
    'skills.simulation': 'Simulation',
    'skills.games': 'Games',
    'skills.embedded': 'Embedded systems',
    'projects.title': 'GitHub - Featured Projects',
    'projects.retrogear': '2D Python engine inspired by Top Gear (1985), organized with modular code, environment-based settings, pixel-art assets, and rasterization optimizations.',
    'projects.blackjack': 'Python Blackjack rules core, decoupled from graphics libraries and structured with object-oriented components to test dealer, states, and decisions before migrating to Godot.',
    'projects.qperiod': 'Educational chemistry quiz built with Unity 2021, featuring periodic-table questions, a locally stored ranking, and executable versions for Windows, Linux, and WebGL.',
    'projects.dft': 'Educational Python project for understanding how the Discrete Fourier Transform works through experiments with composite waves, WAV signals, and frequency, magnitude, and phase visualizations.',
    'projects.render3d': 'Experimental Python renderer created to study linear algebra applied to computer graphics, exploring points, matrices, and perspective transformations to build 3D scenes.',
    'projects.learnmodernopengl': 'C++ and GLSL example collection covering the modern rendering pipeline: shaders, materials, skybox, geometry shaders, instancing, shadows, HDR, deferred rendering, and SSAO.',
    'projects.linearalgebra': 'Educational Python tool using Pygame and NumPy to explore vectors, matrices, and linear transformations through interactive 3D visualization with user-controlled rotation.',
    'projects.tag_game': 'Game development',
    'projects.tag_engine': 'Engine',
    'projects.tag_unity': 'Unity',
    'projects.tag_python': 'Python',
    'projects.tag_games': 'Games',
    'projects.tag_signals': 'Signals',
    'projects.tag_graphics': 'Computer graphics',
    'projects.tag_algebra': 'Algebra',
    'projects.tag_math': 'Math',
    'projects.tag_electronics': 'Electronics',
    'projects.tag_embedded': 'Embedded',
    'projects.tag_opengl': 'OpenGL',
    'projects.flow': 'Embedded system for monitoring and controlling the inflow and outflow of people or objects, using infrared sensors, an ESP32 to process events, and SQLite technology to store the data.',
    'projects.view_repo': 'View repository →',
    'apps.title': 'Apps on the Play Store',
    'apps.text': 'This section will be updated soon with apps published on the Google Play Store.',
    'apps.status': 'Coming soon',
    'apps.item': 'Atomic Boom',
    'other.title': 'GitHub - Other Projects',
    'other.text': 'Complementary projects that reinforce my foundation in programming, physics, mathematics, and experimentation.',
    'other.crypto': 'Exploration of asymmetric cryptography and mathematical concepts applied to security.',
    'other.algebra': 'Tool for teaching and visualizing linear algebra concepts.',
    'other.montecarlo': 'Python application that uses Monte Carlo to estimate how many World Cup sticker packs are needed to complete the album, based on simulated probabilities.',
    'other.haskell': 'Project in Haskell for organizing and trading World Cup stickers.',
    'other.simulation_methods': 'Study project focused on computer simulation methods and numerical modeling.',
    'other.disassembler': 'C++ disassembler that reads HEX files compiled for the ATmega328P and decodes 16-bit and 32-bit AVR opcodes into readable assembly.',
    'other.bitcoin': 'Python implementation for studying Bitcoin block mining, transactions, hashing, and RPC communication in regtest.',
    'other.flow': 'Electronics and control project focused on automation and embedded systems.',
    'contact.title': 'Contact',
    'contact.text': 'If you would like to talk about projects, technology, games, or engineering, I am open to a conversation.',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn'
  },
  pt: {
    'page.title': 'Lucas Campos Achcar | Desenvolvedor de Software',
    'language.switcher': 'Seletor de idioma',
    'hero.name': 'Lucas Campos Achcar',
    'hero.lead': 'Minha trajetória tem sido construída por meio de projetos e estudos em desenvolvimento de software, sempre tentando entender como diferentes camadas de uma solução se conectam. Tenho explorado C++, Python e outras tecnologias em projetos de computação gráfica, análise numérica e sistemas embarcados, passando por jogos, ferramentas educacionais, análise de sinais e monitoramento. Esses projetos são uma forma de aprender na prática, explorando desde a implementação de shaders e algoritmos até o desenvolvimento de firmware, hardware e aplicações completas.',
    'hero.github': 'GitHub',
    'hero.linkedin': 'LinkedIn',
    'skills.python': 'Python',
    'skills.cpp': 'C/C++',
    'skills.opengl': 'OpenGL',
    'skills.arduino': 'Arduino',
    'skills.esp32': 'ESP32 / Arduino',
    'skills.electronics': 'Eletrônica',
    'skills.crypto': 'Criptografia',
    'skills.systems': 'Sistemas',
    'skills.algorithms': 'Algoritmos',
    'profile.title': 'Resumo profissional',
    'profile.text': 'Perfil prático, com projetos públicos em software, computação gráfica, eletrônica e fundamentos de sistemas.',
    'about.title': 'Resumo',
    'about.text': 'Meu trabalho combina implementação e investigação técnica: desenvolvo ferramentas em Python, aplicações e bibliotecas em C++, experiências com OpenGL/GLSL e soluções embarcadas com ESP32. Tenho interesse especial em renderização, simulação, protocolos, eletrônica e algoritmos.',
    'skills.title': 'Competências',
    'skills.dev': 'Desenvolvimento',
    'skills.interests': 'Áreas de interesse',
    'skills.javascript': 'JavaScript',
    'skills.haskell': 'Haskell',
    'skills.graphics': 'Gráficos',
    'skills.simulation': 'Simulação',
    'skills.games': 'Jogos',
    'skills.embedded': 'Sistemas embarcados',
    'projects.title': 'GitHub - Projetos em Destaque',
    'projects.retrogear': 'Engine 2D em Python inspirada no Top Gear de 1985, organizada em módulos de código, configurações por ambiente, assets de pixel art e otimizações de rasterização.',
    'projects.blackjack': 'Núcleo de regras de Blackjack em Python, desacoplado de bibliotecas gráficas e estruturado com orientação a objetos para testar dealer, estados e decisões antes da migração para Godot.',
    'projects.qperiod': 'Quiz educacional de química desenvolvido em Unity 2021, com perguntas sobre a tabela periódica, ranking armazenado localmente e versões executáveis para Windows, Linux e WebGL.',
    'projects.dft': 'Projeto didático em Python para entender o funcionamento da Transformada Discreta de Fourier, experimentando com ondas compostas, sinais WAV e visualizações de frequência, magnitude e fase.',
    'projects.render3d': 'Renderizador experimental em Python criado para estudar álgebra linear aplicada à computação gráfica, explorando pontos, matrizes e transformações de perspectiva na construção de cenas 3D.',
    'projects.learnmodernopengl': 'Coleção de exemplos em C++ e GLSL que percorre o pipeline de renderização moderno: shaders, materiais, skybox, geometry shader, instancing, sombras, HDR, deferred rendering e SSAO.',
    'projects.linearalgebra': 'Ferramenta educacional em Python com Pygame e NumPy para explorar vetores, matrizes e transformações lineares em uma visualização 3D interativa com rotação controlada pelo usuário.',
    'projects.tag_game': 'Desenvolvimento de jogos',
    'projects.tag_engine': 'Engine',
    'projects.tag_unity': 'Unity',
    'projects.tag_python': 'Python',
    'projects.tag_games': 'Jogos',
    'projects.tag_signals': 'Sinais',
    'projects.tag_graphics': 'Computação gráfica',
    'projects.tag_algebra': 'Álgebra',
    'projects.tag_math': 'Matemática',
    'projects.tag_electronics': 'Eletrônica',
    'projects.tag_embedded': 'Embarcado',
    'projects.tag_opengl': 'OpenGL',
    'projects.flow': 'Sistema embarcado para controle e monitoramento da entrada e saída de pessoas ou objetos, usando sensores infravermelhos, ESP32 para processar eventos e a tecnologia SQLite para armazenar os dados.',
    'projects.view_repo': 'Ver repositório →',
    'apps.title': 'Aplicativos na Play Store',
    'apps.text': 'Esta seção será atualizada em breve com aplicativos publicados na Google Play Store.',
    'apps.status': 'Em breve',
    'apps.item': 'Atomic Boom',
    'other.title': 'GitHub - Outros Projetos',
    'other.text': 'Projetos complementares que reforçam minha base em programação, física, matemática e experimentação.',
    'other.crypto': 'Exploração de criptografia assimétrica e conceitos matemáticos aplicados à segurança.',
    'other.algebra': 'Ferramenta para ensino e visualização de conceitos de álgebra linear.',
    'other.montecarlo': 'Aplicação em Python que usa Monte Carlo para estimar quantos pacotes de figurinhas da Copa do Mundo são necessários para completar o álbum, com base em probabilidades simuladas.',
    'other.haskell': 'Projeto em Haskell para organização e troca de figurinhas da Copa do Mundo.',
    'other.simulation_methods': 'Projeto de estudo focado em métodos de simulação computacional e modelagem numérica.',
    'other.disassembler': 'Disassembler em C++ que lê arquivos HEX compilados para o ATmega328P e decodifica opcodes AVR de 16 e 32 bits em assembly legível.',
    'other.bitcoin': 'Implementação em Python para estudar mineração de blocos, transações, hashing e comunicação RPC do Bitcoin em regtest.',
    'other.flow': 'Projeto de eletrônica e controle focado em automação e sistemas embarcados.',
    'contact.title': 'Contato',
    'contact.text': 'Se quiser conversar sobre projetos, tecnologia, jogos ou engenharia, estou aberto a conversar.',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn'
  }
};

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.querySelector('.lang-switcher')?.setAttribute('aria-label', dict['language.switcher']);
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    localStorage.setItem('portfolio-lang', lang);
    applyLanguage(lang);
  });
});

const savedLang = localStorage.getItem('portfolio-lang');
applyLanguage(savedLang === 'pt' ? 'pt' : 'en');
initAnalyticsConsent();
