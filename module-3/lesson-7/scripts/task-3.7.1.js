const buttons = document.querySelectorAll('button.selection');

const allImages = document.querySelectorAll('main .image-selections .images');

function toggleActiveClass( active ) {

    buttons.forEach( function( button ){

        button.classList.remove ('active');
    
    });

    active.classlist.add( 'active' );

    }

 
    function toggleImages( dataClass ) {

    if( dataClass === 'all') {

        allImages .forEach( function( image ){

     image.style.display = 'flex'
        
    });

    } else { 

        allImages.forEach(function( image ) {

     if( image.dataset.class === dataClass ) {

            image.style.display = 'flex' ;

    } else { 
            
        image.style.display ="none";
        
    }

    });

    }
    
}// End of toggleImages function

 
 buttons.forEach( function( button ) {
   
    button.addEventListener( 'click', function() {
    
        toggleActiveClass( button );
    toggleimages( button.dataset.class );
    
})

    });