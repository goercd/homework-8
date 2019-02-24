var promise = new Promise((resolve, reject) => {

setTimeout(() => {
reject(new Error("время вышло!"));
}, 1000);

});

promise
.then(
result => alert("Fulfilled: " + result),
error => alert("Rejected: " + error.message) // Rejected: время вышло!
);




var xhr = new XMLHttpRequest();

xhr.open('GET', 'phones.json', false);

xhr.send();

if (xhr.status != 200) {

alert( xhr.status + ': ' + xhr.statusText ); 
} else {

alert( xhr.responseText ); 
}
    