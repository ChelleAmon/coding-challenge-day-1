const obj = {
    'Apple': [11111, 22222, 33333],
    'Bread': [44444, 55555, 66666],
    'Chips': [77777, 88888, 99999]
  };
  const form = document.querySelector('form').elements['num'];
  
  const checkVal = ( val ) => {
    Object.keys( obj ).forEach( key => {
      if( obj[ key ].find( o => o == val ) ){
        
        console.log( `inside checkVal: ${ key }` );
        return key;
      }
    });
    return val
  }
  
  form.addEventListener('input', function(e){
    if( this.value.length === 5 ){
  
        console.log( 'outside checkVal: ' + checkVal(this.value) );

      
    }
  });
  
  
  
  
  