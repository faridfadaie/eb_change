(function(){
    var bt_test = window.location.href.indexOf('bt_test=') != -1? window.location.href.split('bt_test=')[1].split('&')[0] : null;
    if ((bt_test != 'bazaar') && (bt_test != 'discover')) {return}
    var bt_css = {'.header' : {
            display : 'none'
            },
        
        'nav#menu' : {
            width: '100%',
            position : 'inherit',
            height : 'auto'
            },
        'nav#menu .nav-content ul.left-menu li.last' : {
            'margin-bottom': '0px'
            },
        
        '.profile-container' : {
            display:'none'
            },
        
        'nav#menu .nav-content':{
            'padding-bottom':'0px'
            },
        
        '#page':{
            'padding-left' : '10px',
            'padding-top' : '0px'
            },
        
        'li':{
            float:'left'
            },
        
        '#current-track':{
            display:'none'
            },
        
        '#page.page-shown-home > section, #page.page-shown-favorites > section, #page.page-shown-history > section, #page.page-shown-genres > section, #page.page-shown-mixes > section, #page.page-shown-static > section':{
            'margin-top':'10px'
            },
        
        '#footer':{
            display:'none'
            },
        
        '.btn-fb':{
            display:'none'
            },
        
        '.btn-twitter':{
            display:'none'
            },
        
        '.btn-like':{
            display:'none'
            },
        
        '#header-auth':{
            display:'none'
            }
        }
    
    for (var i in bt_css){
        $(i).css(bt_css[i]);
        }
    })()

