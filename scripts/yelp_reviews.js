
document.addEventListener('DOMContentLoaded',(e)=>{
    const glideSelector = '.glide';
    const gele = document.querySelector(glideSelector);
    if (!gele){ console.log('glide element not found'); return}
    console.log('checking script');
    const getPerView = (screenW) =>{
        if (screenW > 1024){
            return 3;
        }else if (screenW > 768){
            return 2;
        }else {
            return 1;
        }
    }
    var glide = new Glide(glideSelector,{
        perView:getPerView(window.innerWidth),
    }).mount();
    window.addEventListener('resize', function(){
        glide.update({perView:getPerView(this.innerWidth)})
    })
})

    

    // wp_enqueue_script('glidejs','https://cdn.jsdelivr.net/npm/@glidejs/glide@latest/dist/glide.min.js');
    //     // wp_enqueue_script('yelpscript');
    // wp_enqueue_style('font_awesome','https://pro.fontawesome.com/releases/v5.10.0/css/all.css');
    // echo 'plugin inited';
    // if( !is_admin()){
    //     wp_enqueue_script('yelpscript');
    //     wp_enqueue_style('font_awesome','https://pro.fontawesome.com/releases/v5.10.0/css/all.css');
    //     // wp_enqueue_style('testplug-style/boostrap','https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"');
    // }