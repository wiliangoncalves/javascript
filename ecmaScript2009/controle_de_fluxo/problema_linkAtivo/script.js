(function(){
    window.addEventListener('scroll', destacaMenu);
    let $menu = document.querySelector('.nav');
    let $links = $menu.querySelectorAll('li a');

    function destacaMenu(){
        let posicoes = [];

        for(i = 0; i < $links.length; i++){
            posicoes[i] = pegaYPosicaoScroll($links[i]);
        }

        console.log(posicoes);

        let linkAtual = pegaUltimoLinkVisivel(posicoes);

        let linkActived = $menu.querySelector('.actived');
        if(linkActived){
            linkActived.classList.remove('actived');
        }

        linkAtual.classList.add('actived');

        function pegaUltimoLinkVisivel(posicoes){
            let quantidade = posicoes.length;

            while(quantidade){
                quantidade--;
                if(posicoes[quantidade] < innerHeight / 2){
                    return $links[quantidade];
                }
            }
            return $links[0];
        }
    }

    function pegaYPosicaoScroll(link){
        let alvo = document.querySelector(link.getAttribute('href'));
        let posicaoYTela = alvo.getBoundingClientRect().top;

        return posicaoYTela;
    }

    destacaMenu();
})();