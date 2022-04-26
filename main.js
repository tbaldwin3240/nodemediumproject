// Part 1 Write a program that prompts the user for a domain name, looks up the IP address for the domain.and print it out

/* const dns = require('dns')
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Domain Name: ", function (url) {
    readline.close();
    dns.lookup(url, function (error, address) {
        if (error) {
            console.log(error.message);
            return;
        }
        console.log("IP Address: ", address);
    })
}); */

/* Part 2 Write a program that prompts the user to enter a file name, and reads in the contents of the file, 
convert the text to all caps, and prints it out.*/

/*const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('filename: ', function(filename) {
  readline.close();
  fs.readFile(filename, function(error, buffer) {
    if (error) {
      console.log(error.message);
      return;
    }
    const content = buffer.toString();
    const upperCased = content.toUpperCase();
    console.log(upperCased);
  });
});*/

const fs = require('fs');
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stout
});

readline.question("Input file:", function(inputFile){
    fs.readFile(inputFile, function (error,buffer) {
        if(error) {
            console.log(error.message);
            readline.close();
            return;
        }
        readline.question("Output file:" ,function(outputFile){
            fs.readline.close();
            const content = buffer.toString();
            const upperCased = content.toUpperCase();
            fs.writeFile(outputFile,upperCased, function (error){
                of (error) {
                    console.log(error.message);
                    return;
                }
                console.log("wrote to file", outputFile);
            });
        });
    });
});