var name = 'Peter';
function greet() {
    var greeting = 'Hello';
    {
        let lang = 'English';
        console.log(`${lang}: ${greeting} ${name}`);
    }
}
greet();



