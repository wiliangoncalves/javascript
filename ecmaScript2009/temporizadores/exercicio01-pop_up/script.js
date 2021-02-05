(function(){
    let $banner = document.querySelector('.banner');
    let $bannerBtn = document.querySelector('.banner-close');

    $bannerBtn.addEventListener('click', escondeBanner);

    let intervaloEsconde = null;

    function mostraBanner(){
        $banner.style.display = 'block';

        intervaloEsconde = setTimeout(escondeBanner, 10000);
    }

    function escondeBanner(){
        $bannerBtn.removeEventListener('click', escondeBanner);
        $banner.parentNode.removeChild($banner);

        clearTimeout(intervaloEsconde);
    }

    setTimeout(mostraBanner, 5000);
})();