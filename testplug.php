<?php
 /**
   * Plugin Name: testplug
   * Plugin URI:  https://github.com/mkaz/qrcode-block
   * Description: A block to insert a QRCode
   * Version:     0.1.0
   * Author:      nima t
   * Text Domain: nima blocks
   * License:     GPL v2 or later
   * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
*/
$scriptsDIR  = plugins_url('scripts',__FILE__);
$stylesDIR = plugins_url('styles',__FILE__);

function fa_style_loader_filter($html,$handle){
    if ($handle == "font_awesome"){
        return str_replace("rel='stylesheet'",
            "rel='preload' as='style' crossorigin='anonymous' ", $html);
    }
    if ($handle ==="fa_brands"){
        return str_replace("rel='stylesheet'",
            "rel='preload' as='font' type='font/woff2' crossorigin='anonymous' ", $html);
    }
    return $html;
}
function reg_styles_yelpReviews(){
    global $stylesDIR;
    $core = "https://cdn.jsdelivr.net/npm/@glidejs/glide@latest/dist/css/glide.core.min.css"; 
    $theme = "https://cdn.jsdelivr.net/npm/@glidejs/glide@latest/dist/css/glide.theme.min.css";
    wp_register_style('glide_core',$core);
    wp_register_style('glide_theme',$theme);
    wp_register_style('yelpReviews_slider',$stylesDIR . '/yelp_reviews.css');
    wp_register_style('yelpReviews',false,['glide_core','glide_theme','yelpReviews_slider']);
}
add_action('init', function(){
    global $scriptsDIR;
    // add_filter('style_loader_tag','fa_style_loader_filter',10,2);
    $asset_file = include(plugin_dir_path(__FILE__).'build/index.asset.php');
    //scripts
    wp_register_script('testplug-block-script',
        plugins_url('build/index.js', __FILE__),
        $asset_file['dependencies'],
        $asset_file['version']
    );
    wp_register_script('glidejs',
        'https://cdn.jsdelivr.net/npm/@glidejs/glide@latest/dist/glide.min.js'
    );
    wp_register_script('yelpscript',
        $scriptsDIR . '/yelp_reviews.js'
    );
    //style
    //style.css should be registered first
    wp_register_style('testplug-block-style',
        plugins_url('style.css',__FILE__)
    );
    wp_register_style('testplug-block-editor',
        plugins_url('editor.css',__FILE__)
    );
    reg_styles_yelpReviews();
    //block registers
    register_block_type('testplug/yelp-reviews',[
        'editor_script' => 'testplug-block-script',
        'script' => 'glidejs', 
        'style' => 'yelpReviews',
    ]);
    register_block_type('testplug/hero',[
        'editor_script' => 'testplug-block-script',
        'style' => 'testplug-block-style',
    ]);
    register_block_type('testplug/simple-services',[
        'editor_script' => 'testplug-block-script',
    ]);
    register_block_type('testplug/services-layout',[
        'editor_script' => 'testplug-block-script',
    ]);
    if( !is_admin() ){
        wp_enqueue_script('yelpscript');
        // wp_enqueue_style('fa_brands','https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/webfonts/fa-brands-400.woff2');
        wp_enqueue_style('font_awesome',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css');
    }
},0);
?>