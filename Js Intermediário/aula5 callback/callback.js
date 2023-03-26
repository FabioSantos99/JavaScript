window.addEventListener('click', function (event) {

});

function shopping(budget, afterShoppingCallback) {
const spent = 100;

budget = budget - spent;

budget = afterShoppingCallback(budget);

return budget;
}

const leftover = shopping(1565, function(budget){
console.log('budget is', budget);
console.log('Watch Movie');
budget = budget - 230;
return budget;
})
console.log(leftover);

shopping(1000, function(budget){
return shopping(budget, function(budget){
    return shopping(budget, function(budget){ 
        //...
    })
})
})