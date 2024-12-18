/*HOMEWORK Part 1

Create OBJECT animal with 2 properties and 1 method:
name
kind
speak (method)
this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

Bonus: enter the values from prompt*/


let cat = {
    name: " ",
    kind: " ",
    speak: function (){
        console.log(`I am a ${cat.name} and i am ${cat.kind}`);
    }
    
}
cat.name = prompt ("Enter your Cats name here");
cat.kind = prompt ("what kind is your cat?"); 
cat.speak();