var sortBy;
var sortSequence;
function item(){
    sorting('items',1);
    console.log(`calling Item api and adding a query ${sortBy} and ${sortSequence}`);
}

function users(){
    sorting('users',-1);
    console.log(`calling Users api and adding a query ${sortBy} and ${sortSequence}`);
}

function sorting(SO,SS){
     this.sortBy=SO;
     this.sortSequence=SS;
}

item();
users();