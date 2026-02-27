let data;
data = 0;
data = '';
data = '0';
data = ' ';
data = false;
data = true;
data = null;
data = undefined;
data = {};
data = [];
if(data){
    console.log('truthy');
} else {
    console.log('Falsy');
}

// let price = 22;
let price = false;
if(!price) {
    console.log('falsy');
}

let value = 0;
if(!!value) {
    console.log("Truthy")
}