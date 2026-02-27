// document.getElementById('#btn').addEventListener('clack', function(event) {

// })

// .addEventListener('clack', function(event) {
// })
//callback function

function settleLife(name, isBCS, marriage, patri) {
    if(isBCS){
        marriage(patri);
    };
};
function bolokobul (patri){
    console.log('kobul', patri);
};
settleLife("TOMAL", true, bolokobul, 'nari');
// bolokobul('pori');