function receivesAFunction(callback){
    return callback();
}

const named = () => {
    return
}
function returnsANamedFunction(){
    return named
}

function returnsAnAnonymousFunction(){
    return (function(){
    })
}