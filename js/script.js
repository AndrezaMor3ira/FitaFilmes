/*-----------------Filme Destaque---------------*/
const LinkVideo = document.querySelector('.btn__filme-destaque');
const FilmeDoDia = document.querySelector('.filme-do-dia');
const TituloFilmeDestaque = document.querySelector('.titulo__filme-destaque');
const GeneroFilmeDestaque = document.querySelector('.genero-filme__filme-destaque');
const DataFilmeDestaque = document.querySelector('.data-filme__filme-destaque');
const SinopseFilmeDestaque = document.querySelector('.sinopse__filme-destaque');

/*-----------------Filmes em alta---------------*/
const filmesContainer = document.querySelector('.filmes');
const botaoAnterior = document.querySelector('.botao-anterior');
const botaoProximo = document.querySelector('.botao-proximo');

let passarPagina = 0;

/*-----------------Filmes de Ação---------------*/
const acaoContainer = document.querySelector('.filmes__Acao');
const acaoBtnAnterior = document.querySelector('.btnAnterior__Acao');
const acaoBtnProximo = document.querySelector('.btnProximo__Acao');

let acaoPagina = 0;

/*-----------------Filmes de Animação---------------*/
const animacaoContainer = document.querySelector('.filmes__Animacao');
const animacaoBtnAnterior = document.querySelector('.btnAnterior__Animacao');
const animacaoBtnProximo = document.querySelector('.btnProximo__Animacao');

let animacaoPagina = 0;

/*-----------------Filmes de Aventura---------------*/
const aventuraContainer = document.querySelector('.filmes__Aventura');
const aventuraBtnAnterior = document.querySelector('.btnAnterior__Aventura');
const aventuraBtnProximo = document.querySelector('.btnProximo__Aventura');

let aventuraPagina = 0;

/*-----------------Filmes de Comedia---------------*/
const comediaContainer = document.querySelector('.filmes__Comedia');
const comediaBtnAnterior = document.querySelector('.btnAnterior__Comedia');
const comediaBtnProximo = document.querySelector('.btnProximo__Comedia');

let comediaPagina = 0;

/*-----------------Filmes de Drama---------------*/
const dramaContainer = document.querySelector('.filmes__Drama');
const dramaBtnAnterior = document.querySelector('.btnAnterior__Drama');
const dramaBtnProximo = document.querySelector('.btnProximo__Drama');

let dramaPagina = 0;

/*-----------------Filmes de Fantasia---------------*/
const fantasiaContainer = document.querySelector('.filmes__Fantasia');
const fantasiaBtnAnterior = document.querySelector('.btnAnterior__Fantasia');
const fantasiaBtnProximo = document.querySelector('.btnProximo__Fantasia');

let fantasiaPagina = 0;

/*-----------------Filmes de Ficção---------------*/
const ficcaoContainer = document.querySelector('.filmes__Ficcao');
const ficcaoBtnAnterior = document.querySelector('.btnAnterior__Ficcao');
const ficcaoBtnProximo = document.querySelector('.btnProximo__Ficcao');

let ficcaoPagina = 0;

/*-----------------Filmes de Suspense---------------*/
const suspenseContainer = document.querySelector('.filmes__Suspense');
const suspenseBtnAnterior = document.querySelector('.btnAnterior__Suspense');
const suspenseBtnProximo = document.querySelector('.btnProximo__Suspense');

let suspensePagina = 0;

/*-----------------Filmes de Terror---------------*/
const terrorContainer = document.querySelector('.filmes__Terror');
const terrorBtnAnterior = document.querySelector('.btnAnterior__Terror');
const terrorBtnProximo = document.querySelector('.btnProximo__Terror');

let terrorPagina = 0;

/*-----------------Modal---------------*/
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const modalTitulo = document.querySelector('.modal__titulo');
const modalFechar = document.querySelector('.modal__fechar');
const modalImagem = document.querySelector('.modal__img');
const modalDescricao = document.querySelector('.modal__descricao');
const modalNota = document.querySelector('.modal__nota');
const modalGenero = document.querySelector('.modal__generos');

/*-----------------Tema---------------*/
const btnTema = document.querySelector('.header__botao-tema');
const logo = document.querySelector('.logo');
const lupa = document.querySelector('.icone-lupa__pesquisa');

const temaEscolhido = localStorage.getItem('tema');

let currentTema = temaEscolhido ? temaEscolhido : 'escuro';

function displayDarkTheme() {
    currentTema = 'claro';
    btnTema.src = './assets/Sol.svg';
    logo.src = './assets/Logo_Preta.svg';
    lupa.src = './assets/Lupa_Preta.svg';
    botaoAnterior.src = './assets/SetaEsquerdaPreta.svg';
    botaoProximo.src = './assets/SetaDireitaPreta.svg';
    acaoBtnAnterior.src = './assets/SetaEsquerdaPreta.svg'
    acaoBtnProximo.src = './assets/SetaDireitaPreta.svg'
    dramaBtnAnterior.src = './assets/SetaEsquerdaPreta.svg'
    dramaBtnProximo.src = './assets/SetaDireitaPreta.svg'
    ficcaoBtnAnterior.src = './assets/SetaEsquerdaPreta.svg'
    ficcaoBtnProximo.src = './assets/SetaDireitaPreta.svg'
    terrorBtnAnterior.src = './assets/SetaEsquerdaPreta.svg'
    terrorBtnProximo.src = './assets/SetaDireitaPreta.svg'
    comediaBtnAnterior.src = './assets/SetaEsquerdaPreta.svg'
    comediaBtnProximo.src = './assets/SetaDireitaPreta.svg'
    animacaoBtnAnterior.src = './assets/SetaEsquerdaPreta.svg'
    animacaoBtnProximo.src = './assets/SetaDireitaPreta.svg'
    aventuraBtnAnterior.src = './assets/SetaEsquerdaPreta.svg'
    aventuraBtnProximo.src = './assets/SetaDireitaPreta.svg'
    fantasiaBtnAnterior.src = './assets/SetaEsquerdaPreta.svg'
    fantasiaBtnProximo.src = './assets/SetaDireitaPreta.svg'
    suspenseBtnAnterior.src = './assets/SetaEsquerdaPreta.svg'
    suspenseBtnProximo.src = './assets/SetaDireitaPreta.svg'

    body.style.setProperty('--header-titulo', 'black');
    body.style.setProperty('--background-body', "linear-gradient(to bottom, #1d3542 14.29%, #FFFFFF 18.06%)");
    body.style.setProperty('--background-header', "#395F74");
    body.style.setProperty('--categorias', "#000");
    body.style.setProperty('--cor-input', 'black');
    body.style.setProperty('--imagem', "linear-gradient(to top, transparent 0%, rgb(fff, fff, fff) 20%)");
}

function displayLightTheme() {
    currentTema = 'escuro';
    btnTema.src = './assets/Lua.svg';
    logo.src = './assets/Logo.svg';
    lupa.src = './assets/Lupa.svg';
    botaoAnterior.src = './assets/SetaEsquerdaBranca.svg';
    botaoProximo.src = './assets/SetaDireitaBranca.svg';
    acaoBtnAnterior.src = './assets/SetaEsquerdaBranca.svg'
    acaoBtnProximo.src = './assets/SetaDireitaBranca.svg'
    dramaBtnAnterior.src = './assets/SetaEsquerdaBranca.svg'
    dramaBtnProximo.src = './assets/SetaDireitaBranca.svg'
    ficcaoBtnAnterior.src = './assets/SetaEsquerdaBranca.svg'
    ficcaoBtnProximo.src = './assets/SetaDireitaBranca.svg'
    terrorBtnAnterior.src = './assets/SetaEsquerdaBranca.svg'
    terrorBtnProximo.src = './assets/SetaDireitaBranca.svg'
    comediaBtnAnterior.src = './assets/SetaEsquerdaBranca.svg'
    comediaBtnProximo.src = './assets/SetaDireitaBranca.svg'
    animacaoBtnAnterior.src = './assets/SetaEsquerdaBranca.svg'
    animacaoBtnProximo.src = './assets/SetaDireitaBranca.svg'
    aventuraBtnAnterior.src = './assets/SetaEsquerdaBranca.svg'
    aventuraBtnProximo.src = './assets/SetaDireitaBranca.svg'
    fantasiaBtnAnterior.src = './assets/SetaEsquerdaBranca.svg'
    fantasiaBtnProximo.src = './assets/SetaDireitaBranca.svg'
    suspenseBtnAnterior.src = './assets/SetaEsquerdaBranca.svg'
    suspenseBtnProximo.src = './assets/SetaDireitaBranca.svg'

    body.style.setProperty('--header-titulo', '#D9D9D9');
    body.style.setProperty('--categorias', "#fff");

    body.style.setProperty('--background-body', "linear-gradient(to bottom, #11191C 14.29%, #212D40 18.06%)");
    body.style.setProperty('--background-header', "#11151C");
    body.style.setProperty('--cor-principal-palavras', "#FFFFFF");
    body.style.setProperty('--cor-input', "#ffff");
    body.style.setProperty('--imagem', "linear-gradient(to top, transparent 0%, rgb(255, 255, 255) 20%)");
}

function toggleTema() {
    if (currentTema == 'escuro') {
        displayDarkTheme();
    } else {
        displayLightTheme();
    }

    localStorage.setItem('theme', currentTema);
}

if (currentTema == 'escuro') {
    displayLightTheme();
} else {
    displayDarkTheme();
}

btnTema.addEventListener('click', function () {
    toggleTema();
})

/*-----------------Pesquisar---------------*/
const input = document.querySelector('.input');

input.addEventListener('keydown', function (event) {
    if (event.key != 'Enter') {
        return;
    }

    passarPagina = 0;

    if (input.value) {
        buscarFilmes(input.value);

    } else {
        CarregarFilmes();
    }

    input.value = '';
})


/*-----------------Filme Destaque---------------*/

function CarregarFilmeDestaque() {
    const basePromise = fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969?language=pt-BR');

    basePromise.then(function (response) {
        const bodyPromise = response.json();

        bodyPromise.then(function (body) {
            FilmeDoDia.style.background = `url('${body.backdrop_path}') no-repeat center / cover`;
            TituloFilmeDestaque.textContent = body.title;

            /*array de objetos*/
            GeneroFilmeDestaque.textContent = body.genres.map(function (genre) {
                return genre.name;
            }).join(', ');
            DataFilmeDestaque.textContent = (new Date(body.release_date)).toLocaleDateString('pt-BR', { year: 'numeric', month: "long", day: "numeric" })
            SinopseFilmeDestaque.textContent = body.overview;
        })
    });
}
const linkPromise = fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969/videos?language=pt-BR');

linkPromise.then(function (resposta) {
    const bodyPromise = resposta.json();

    bodyPromise.then(function (body) {
        LinkVideo.href = `https://www.youtube.com/watch?v=${body.results[0].key}`
    })
});

/*-----------------Carregar cinco filmes---------------*/

function CarregarFilmes() {
    const responsePromise = fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false');

    responsePromise.then(function (response) {
        const bodyPromise = response.json();

        bodyPromise.then(function (body) {
            atuaisFilmes = body.results;

            mostarFilmes();
        })
    });
}


function mostarFilmes() {
    filmesContainer.textContent = '';

    for (let i = passarPagina * 5; i < (passarPagina + 1) * 5; i++) {
        const filme = atuaisFilmes[i];

        const filmeContainer = document.createElement('div');
        filmeContainer.classList.add('filme');
        filmeContainer.style.backgroundImage = `url('${filme.poster_path}')`;

        filmeContainer.addEventListener('click', function () {
            loadMovie(filme.id);
        })

        const informacaoFilme = document.createElement('div');
        informacaoFilme.classList.add('informacao__filme');

        const tituloFilme = document.createElement('span');
        tituloFilme.classList.add('titulo__filme')
        tituloFilme.textContent = filme.title;

        const notaFilme = document.createElement('span');
        notaFilme.classList.add('nota__filme');

        notaFilme.append(filme.vote_average);
        informacaoFilme.append(tituloFilme, notaFilme);
        filmeContainer.append(informacaoFilme);

        filmesContainer.append(filmeContainer);
    }
}

botaoAnterior.addEventListener('click', function () {
    if (passarPagina == 0) {
        passarPagina = 3;
    } else {
        passarPagina--
    }
    mostarFilmes();
});

botaoProximo.addEventListener('click', function () {
    if (passarPagina == 3) {
        passarPagina = 0;
    } else {
        passarPagina++;
    }
    mostarFilmes();
})

/*-----------------Pesquisar---------------*/

function buscarFilmes(buscar) {
    const responsePromise = fetch(`https://tmdb-proxy.cubos-academy.workers.dev/3/search/movie?language=pt-BR&include_adult=false&query=${buscar}`);

    responsePromise.then(function (resposta) {
        const bodyPromise = resposta.json();

        bodyPromise.then(function (body) {
            atuaisFilmes = body.results;

            mostarFilmes();
        })
    });
}



/*-----------------Filmes de Ação---------------*/

function CarregarFilmesAcao() {
    const respostaAcao = fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false&with_genres=28');

    respostaAcao.then(function (acao) {
        const bodyAcao = acao.json();

        bodyAcao.then(function (body) {
            atuaisfilmesAcao = body.results;

            mostarFilmesAcao();
        })
    });
}

function mostarFilmesAcao() {
    acaoContainer.textContent = '';

    for (let i = acaoPagina * 5; i < (acaoPagina + 1) * 5; i++) {
        const filmeAcao = atuaisfilmesAcao[i];

        const acaoFContainer = document.createElement('div');
        acaoFContainer.classList.add('filme');
        acaoFContainer.style.backgroundImage = `url('${filmeAcao.poster_path}')`;

        acaoFContainer.addEventListener('click', function () {
            loadMovie(filmeAcao.id);
        })

        const acaoInformacaoFilme = document.createElement('div');
        acaoInformacaoFilme.classList.add('informacao__filme');

        const acaoTituloFilme = document.createElement('span');
        acaoTituloFilme.classList.add('titulo__filme')
        acaoTituloFilme.textContent = filmeAcao.title;

        const acaoNotaFilme = document.createElement('span');
        acaoNotaFilme.classList.add('nota__filme');

        acaoNotaFilme.append(filmeAcao.vote_average);
        acaoInformacaoFilme.append(acaoTituloFilme, acaoNotaFilme);
        acaoFContainer.append(acaoInformacaoFilme);

        acaoContainer.append(acaoFContainer);
    }
}

acaoBtnAnterior.addEventListener('click', function () {
    if (acaoPagina == 0) {
        acaoPagina = 3;
    } else {
        acaoPagina--
    }
    mostarFilmesAcao();
});

acaoBtnProximo.addEventListener('click', function () {
    if (acaoPagina == 3) {
        acaoPagina = 0;
    } else {
        acaoPagina++;
    }
    mostarFilmesAcao();
})

/*-----------------Filmes de Animação---------------*/

function CarregarFilmesAnimacao() {
    const respostaAnimacao = fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false&with_genres=16');

    respostaAnimacao.then(function (animacao) {
        const bodyAnimacao = animacao.json();

        bodyAnimacao.then(function (body) {
            atuaisfilmesAnimacao = body.results;

            mostarFilmesAnimacao();
        })
    });
}

function mostarFilmesAnimacao() {
    animacaoContainer.textContent = '';

    for (let i = animacaoPagina * 5; i < (animacaoPagina + 1) * 5; i++) {
        const filmeAnimacao = atuaisfilmesAnimacao[i];

        const animacaoFContainer = document.createElement('div');
        animacaoFContainer.classList.add('filme');
        animacaoFContainer.style.backgroundImage = `url('${filmeAnimacao.poster_path}')`;

        animacaoFContainer.addEventListener('click', function () {
            loadMovie(filmeAnimacao.id);
        })

        const animacaoInformacaoFilme = document.createElement('div');
        animacaoInformacaoFilme.classList.add('informacao__filme');

        const animacaoTituloFilme = document.createElement('span');
        animacaoTituloFilme.classList.add('titulo__filme')
        animacaoTituloFilme.textContent = filmeAnimacao.title;

        const animacaoNotaFilme = document.createElement('span');
        animacaoNotaFilme.classList.add('nota__filme');

        animacaoNotaFilme.append(filmeAnimacao.vote_average);
        animacaoInformacaoFilme.append(animacaoTituloFilme, animacaoNotaFilme);
        animacaoFContainer.append(animacaoInformacaoFilme);

        animacaoContainer.append(animacaoFContainer);
    }
}

animacaoBtnAnterior.addEventListener('click', function () {
    if (animacaoPagina == 0) {
        animacaoPagina = 3;
    } else {
        animacaoPagina--
    }
    mostarFilmesAnimacao();
});

animacaoBtnProximo.addEventListener('click', function () {
    if (animacaoPagina == 3) {
        animacaoPagina = 0;
    } else {
        animacaoPagina++;
    }
    mostarFilmesAnimacao();
})

/*-----------------Filmes de Aventura---------------*/

function CarregarFilmesAventura() {
    const respostaAventura = fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false&with_genres=12');

    respostaAventura.then(function (aventura) {
        const bodyAventura = aventura.json();

        bodyAventura.then(function (body) {
            atuaisfilmesAventura = body.results;

            mostarFilmesAventura();
        })
    });
}

function mostarFilmesAventura() {
    aventuraContainer.textContent = '';

    for (let i = aventuraPagina * 5; i < (aventuraPagina + 1) * 5; i++) {
        const filmeAventura = atuaisfilmesAventura[i];

        const aventuraFContainer = document.createElement('div');
        aventuraFContainer.classList.add('filme');
        aventuraFContainer.style.backgroundImage = `url('${filmeAventura.poster_path}')`;

        aventuraFContainer.addEventListener('click', function () {
            loadMovie(filmeAventura.id);
        })

        const aventuraInformacaoFilme = document.createElement('div');
        aventuraInformacaoFilme.classList.add('informacao__filme');

        const aventuraTituloFilme = document.createElement('span');
        aventuraTituloFilme.classList.add('titulo__filme')
        aventuraTituloFilme.textContent = filmeAventura.title;

        const aventuraNotaFilme = document.createElement('span');
        aventuraNotaFilme.classList.add('nota__filme');

        aventuraNotaFilme.append(filmeAventura.vote_average);
        aventuraInformacaoFilme.append(aventuraTituloFilme, aventuraNotaFilme);
        aventuraFContainer.append(aventuraInformacaoFilme);

        aventuraContainer.append(aventuraFContainer);
    }
}

aventuraBtnAnterior.addEventListener('click', function () {
    if (aventuraPagina == 0) {
        aventuraPagina = 3;
    } else {
        aventuraPagina--
    }
    mostarFilmesAventura();
});

aventuraBtnProximo.addEventListener('click', function () {
    if (aventuraPagina == 3) {
        aventuraPagina = 0;
    } else {
        aventuraPagina++;
    }
    mostarFilmesAventura();
})

/*-----------------Filmes de Comedia---------------*/

function CarregarFilmesComedia() {
    const respostaComedia = fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false&with_genres=35');

    respostaComedia.then(function (comedia) {
        const bodyComedia = comedia.json();

        bodyComedia.then(function (body) {
            atuaisfilmesComedia = body.results;

            mostarFilmesComedia();
        })
    });
}

function mostarFilmesComedia() {
    comediaContainer.textContent = '';

    for (let i = comediaPagina * 5; i < (comediaPagina + 1) * 5; i++) {
        const filmeComedia = atuaisfilmesComedia[i];

        const comediaFContainer = document.createElement('div');
        comediaFContainer.classList.add('filme');
        comediaFContainer.style.backgroundImage = `url('${filmeComedia.poster_path}')`;

        comediaFContainer.addEventListener('click', function () {
            loadMovie(filmeComedia.id);
        })

        const comediaInformacaoFilme = document.createElement('div');
        comediaInformacaoFilme.classList.add('informacao__filme');

        const comediaTituloFilme = document.createElement('span');
        comediaTituloFilme.classList.add('titulo__filme')
        comediaTituloFilme.textContent = filmeComedia.title;

        const comediaNotaFilme = document.createElement('span');
        comediaNotaFilme.classList.add('nota__filme');

        comediaNotaFilme.append(filmeComedia.vote_average);
        comediaInformacaoFilme.append(comediaTituloFilme, comediaNotaFilme);
        comediaFContainer.append(comediaInformacaoFilme);

        comediaContainer.append(comediaFContainer);
    }
}

comediaBtnAnterior.addEventListener('click', function () {
    if (comediaPagina == 0) {
        comediaPagina = 3;
    } else {
        comediaPagina--
    }
    mostarFilmesComedia();
});

comediaBtnProximo.addEventListener('click', function () {
    if (comediaPagina == 3) {
        comediaPagina = 0;
    } else {
        comediaPagina++;
    }
    mostarFilmesComedia();

});
/*-----------------Filmes de Drama---------------*/

function CarregarFilmesDrama() {
    const respostaDrama = fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false&with_genres=18');

    respostaDrama.then(function (drama) {
        const bodyDrama = drama.json();

        bodyDrama.then(function (body) {
            atuaisfilmesDrama = body.results;

            mostarFilmesDrama();
        })
    });
}

function mostarFilmesDrama() {
    dramaContainer.textContent = '';

    for (let i = dramaPagina * 5; i < (dramaPagina + 1) * 5; i++) {
        const filmeDrama = atuaisfilmesDrama[i];

        const dramaFContainer = document.createElement('div');
        dramaFContainer.classList.add('filme');
        dramaFContainer.style.backgroundImage = `url('${filmeDrama.poster_path}')`;

        dramaFContainer.addEventListener('click', function () {
            loadMovie(filmeDrama.id);
        })

        const dramaInformacaoFilme = document.createElement('div');
        dramaInformacaoFilme.classList.add('informacao__filme');

        const dramaTituloFilme = document.createElement('span');
        dramaTituloFilme.classList.add('titulo__filme')
        dramaTituloFilme.textContent = filmeDrama.title;

        const dramaNotaFilme = document.createElement('span');
        dramaNotaFilme.classList.add('nota__filme');

        dramaNotaFilme.append(filmeDrama.vote_average);
        dramaInformacaoFilme.append(dramaTituloFilme, dramaNotaFilme);
        dramaFContainer.append(dramaInformacaoFilme);

        dramaContainer.append(dramaFContainer);
    }
}

dramaBtnAnterior.addEventListener('click', function () {
    if (dramaPagina == 0) {
        dramaPagina = 3;
    } else {
        dramaPagina--
    }
    mostarFilmesDrama();
});

dramaBtnProximo.addEventListener('click', function () {
    if (dramaPagina == 3) {
        dramaPagina = 0;
    } else {
        dramaPagina++;
    }
    mostarFilmesDrama();
});

/*-----------------Filmes de Fantasia---------------*/

function CarregarFilmesFantasia() {
    const respostaFantasia = fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false&with_genres=14');

    respostaFantasia.then(function (fantasia) {
        const bodyFantasia = fantasia.json();

        bodyFantasia.then(function (body) {
            atuaisfilmesFantasia = body.results;

            mostarFilmesFantasia();
        })
    });
}

function mostarFilmesFantasia() {
    fantasiaContainer.textContent = '';

    for (let i = fantasiaPagina * 5; i < (fantasiaPagina + 1) * 5; i++) {
        const filmeFantasia = atuaisfilmesFantasia[i];

        const fantasiaFContainer = document.createElement('div');
        fantasiaFContainer.classList.add('filme');
        fantasiaFContainer.style.backgroundImage = `url('${filmeFantasia.poster_path}')`;

        fantasiaFContainer.addEventListener('click', function () {
            loadMovie(filmeFantasia.id);
        })


        const fantasiaInformacaoFilme = document.createElement('div');
        fantasiaInformacaoFilme.classList.add('informacao__filme');

        const fantasiaTituloFilme = document.createElement('span');
        fantasiaTituloFilme.classList.add('titulo__filme')
        fantasiaTituloFilme.textContent = filmeFantasia.title;

        const fantasiaNotaFilme = document.createElement('span');
        fantasiaNotaFilme.classList.add('nota__filme');

        fantasiaNotaFilme.append(filmeFantasia.vote_average);
        fantasiaInformacaoFilme.append(fantasiaTituloFilme, fantasiaNotaFilme);
        fantasiaFContainer.append(fantasiaInformacaoFilme);

        fantasiaContainer.append(fantasiaFContainer);
    }
}

fantasiaBtnAnterior.addEventListener('click', function () {
    if (fantasiaPagina == 0) {
        fantasiaPagina = 3;
    } else {
        fantasiaPagina--
    }
    mostarFilmesFantasia();
});

fantasiaBtnProximo.addEventListener('click', function () {
    if (fantasiaPagina == 3) {
        fantasiaPagina = 0;
    } else {
        fantasiaPagina++;
    }
    mostarFilmesFantasia();
});

/*-----------------Filmes de Ficção científica---------------*/

function CarregarFilmesFiccao() {
    const respostaFiccao = fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false&with_genres=878');

    respostaFiccao.then(function (ficcao) {
        const bodyFiccao = ficcao.json();

        bodyFiccao.then(function (body) {
            atuaisfilmesFiccao = body.results;

            mostarFilmesFiccao();
        })
    });
}

function mostarFilmesFiccao() {
    ficcaoContainer.textContent = '';

    for (let i = ficcaoPagina * 5; i < (ficcaoPagina + 1) * 5; i++) {
        const filmeFiccao = atuaisfilmesFiccao[i];

        const ficcaoFContainer = document.createElement('div');
        ficcaoFContainer.classList.add('filme');
        ficcaoFContainer.style.backgroundImage = `url('${filmeFiccao.poster_path}')`;

        ficcaoFContainer.addEventListener('click', function () {
            loadMovie(filmeFiccao.id);
        })


        const ficcaoInformacaoFilme = document.createElement('div');
        ficcaoInformacaoFilme.classList.add('informacao__filme');

        const ficcaoTituloFilme = document.createElement('span');
        ficcaoTituloFilme.classList.add('titulo__filme')
        ficcaoTituloFilme.textContent = filmeFiccao.title;

        const ficcaoNotaFilme = document.createElement('span');
        ficcaoNotaFilme.classList.add('nota__filme');

        ficcaoNotaFilme.append(filmeFiccao.vote_average);
        ficcaoInformacaoFilme.append(ficcaoTituloFilme, ficcaoNotaFilme);
        ficcaoFContainer.append(ficcaoInformacaoFilme);

        ficcaoContainer.append(ficcaoFContainer);
    }
}

ficcaoBtnAnterior.addEventListener('click', function () {
    if (ficcaoPagina == 0) {
        ficcaoPagina = 3;
    } else {
        ficcaoPagina--
    }
    mostarFilmesFiccao();
});

ficcaoBtnProximo.addEventListener('click', function () {
    if (ficcaoPagina == 3) {
        ficcaoPagina = 0;
    } else {
        ficcaoPagina++;
    }
    mostarFilmesFiccao();
});

/*-----------------Filmes de Suspense---------------*/

function CarregarFilmesSuspense() {
    const respostaSuspense = fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false&with_genres=53');

    respostaSuspense.then(function (suspense) {
        const bodySuspense = suspense.json();

        bodySuspense.then(function (body) {
            atuaisfilmesSuspense = body.results;

            mostarFilmesSuspense();
        })
    });
}

function mostarFilmesSuspense() {
    suspenseContainer.textContent = '';

    for (let i = suspensePagina * 5; i < (suspensePagina + 1) * 5; i++) {
        const filmeSuspense = atuaisfilmesSuspense[i];

        const suspenseFContainer = document.createElement('div');
        suspenseFContainer.classList.add('filme');
        suspenseFContainer.style.backgroundImage = `url('${filmeSuspense.poster_path}')`;

        suspenseFContainer.addEventListener('click', function () {
            loadMovie(filmeSuspense.id);
        })

        const suspenseInformacaoFilme = document.createElement('div');
        suspenseInformacaoFilme.classList.add('informacao__filme');

        const suspenseTituloFilme = document.createElement('span');
        suspenseTituloFilme.classList.add('titulo__filme')
        suspenseTituloFilme.textContent = filmeSuspense.title;

        const suspenseNotaFilme = document.createElement('span');
        suspenseNotaFilme.classList.add('nota__filme');

        suspenseNotaFilme.append(filmeSuspense.vote_average);
        suspenseInformacaoFilme.append(suspenseTituloFilme, suspenseNotaFilme);
        suspenseFContainer.append(suspenseInformacaoFilme);

        suspenseContainer.append(suspenseFContainer);
    }
}

suspenseBtnAnterior.addEventListener('click', function () {
    if (suspensePagina == 0) {
        suspensePagina = 3;
    } else {
        suspensePagina--
    }
    mostarFilmesSuspense();
});

suspenseBtnProximo.addEventListener('click', function () {
    if (suspensePagina == 3) {
        suspensePagina = 0;
    } else {
        suspensePagina++;
    }
    mostarFilmesSuspense();
});
/*-----------------Filmes de Terror---------------*/

function CarregarFilmesTerror() {
    const respostaTerror = fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false&with_genres=27');

    respostaTerror.then(function (terror) {
        const bodyTerror = terror.json();

        bodyTerror.then(function (body) {
            atuaisfilmesTerror = body.results;

            mostarFilmesTerror();
        })
    });
}

function mostarFilmesTerror() {
    terrorContainer.textContent = '';

    for (let i = terrorPagina * 5; i < (terrorPagina + 1) * 5; i++) {
        const filmeTerror = atuaisfilmesTerror[i];

        const terrorFContainer = document.createElement('div');
        terrorFContainer.classList.add('filme');
        terrorFContainer.style.backgroundImage = `url('${filmeTerror.poster_path}')`;

        terrorFContainer.addEventListener('click', function () {
            loadMovie(filmeTerror.id);
        })

        const terrorInformacaoFilme = document.createElement('div');
        terrorInformacaoFilme.classList.add('informacao__filme');

        const terrorTituloFilme = document.createElement('span');
        terrorTituloFilme.classList.add('titulo__filme')
        terrorTituloFilme.textContent = filmeTerror.title;

        const terrorNotaFilme = document.createElement('span');
        terrorNotaFilme.classList.add('nota__filme');


        terrorNotaFilme.append(filmeTerror.vote_average);
        terrorInformacaoFilme.append(terrorTituloFilme, terrorNotaFilme);
        terrorFContainer.append(terrorInformacaoFilme);

        terrorContainer.append(terrorFContainer);
    }
}

terrorBtnAnterior.addEventListener('click', function () {
    if (terrorPagina == 0) {
        terrorPagina = 3;
    } else {
        terrorPagina--
    }
    mostarFilmesTerror();
});

terrorBtnProximo.addEventListener('click', function () {
    if (terrorPagina == 3) {
        terrorPagina = 0;
    } else {
        terrorPagina++;
    }
    mostarFilmesTerror();
});

/*-----------------Modal---------------*/
modal.addEventListener('click', fecharModal);

modalFechar.addEventListener('click', fecharModal);

function fecharModal() {
    modal.classList.add('hidden');
    body.style.overflow = 'auto';
}

function loadMovie(id) {
    modal.classList.remove("hidden");
    body.style.overflow = 'hidden';

    const responsePromise = fetch(`https://tmdb-proxy.cubos-academy.workers.dev/3/movie/${id}?language=pt-BR`);

    responsePromise.then(function (resposta) {
        const bodyPromise = resposta.json();

        bodyPromise.then(function (body) {
            modalTitulo.textContent = body.title;
            modalImagem.src = body.backdrop_path;
            modalImagem.alt = body.title;
            modalDescricao.textContent = body.overview;
            modalNota.textContent = body.vote_average;

            modalGenero.textContent = '';

            body.genres.forEach(function (genero) {
                const modalGene = document.createElement('span');
                modalGene.textContent = genero.name;
                modalGene.classList.add('modal__genero');

                modalGenero.append(modalGene);
            })
        })
    })
}



CarregarFilmeDestaque();
CarregarFilmes();

CarregarFilmesAcao();
CarregarFilmesAnimacao();
CarregarFilmesAventura();
CarregarFilmesComedia();
CarregarFilmesDrama();
CarregarFilmesFantasia();
CarregarFilmesFiccao();
CarregarFilmesSuspense();
CarregarFilmesTerror();


/*Ordenando por genero*/
function IdGeneros() {
    const generoId = {
        "Ação": 28,
        "Animação": 16,
        "Aventura": 12,
        "Comédia": 35,
        "Drama": 18,
        "Fantasia": 14,
        "Ficção Cientifica": 878,
        "Suspense": 53,
        "Terror": 27
    }
}

