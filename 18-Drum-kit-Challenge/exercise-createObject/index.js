
//declaration of objects
//constructor function 
function CallBoy (name, age, experience, languages){
    this.name= name;
    this.age = age;
    this.experience = experience;
    this.languages = languages;

    this.moveSuitCase = function (){
        alert("May I take your suitcase ?");
        pickUpSuitcase ();
        moveBy();
    }

}

function pickUpSuitcase(){
    alert("Suitcase picked")
}

function moveBy(){
    alert("Mocing")
}

var callboy1 = new CallBoy("Amit" , 25 , 10 , ["Hindi", "English"]);
var callboy2 = new CallBoy("Sumit" , 35 , 12 , ["Hindi", "English", "Punjabi"]);

console.log(callboy1.name + " is callboy 1")

