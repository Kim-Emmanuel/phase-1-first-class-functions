function receivesAFunction(callback) {
    return callback()
}
function returnsANameFunction() {
    return function() {
        
    }

}
function returnsAnAnonymousFunction(){
    return function(){
    }
 }