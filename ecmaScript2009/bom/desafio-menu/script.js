(function(){
    let $menu = document.querySelector('.menu');

    window.addEventListener('scroll', setupNav);

    function setupNav(){
        let posYScroll = getYscroll();
        
        if(posYScroll > 100 && !hasClassFx()){
            document.body.classList.add('fx');
        }
        if(posYScroll <= 100 && hasClassFx()){
            document.body.classList.remove('fx');
        }
    }

    function getYscroll(){
        return window.pageYOffset;
    }

    function hasClassFx(){
        return !!document.querySelector('.fx');
    }
})();