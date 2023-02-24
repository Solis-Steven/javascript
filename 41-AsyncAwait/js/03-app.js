


async function getCountries( code ) {
    let counter = 1;
    
    while( counter <= 25 ) {
        try {
            const response = await fetch( `https://jsonmock.hackerrank.com/api/countries?page=${ counter }` );
            const data = await response.json();
            
            data.data.forEach( country => {
                if( country.alpha2Code === code ) {
                    console.log( country.name );
                    return;
                }
            } )

        } catch( error ) {
            console.log( error );
        }
        
        counter++;
    }
}


getCountries("AF")