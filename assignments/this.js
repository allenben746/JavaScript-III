/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.
 this refers the the scope in which it is placed. Gives
 you flexibily and the ability to have shorter code/.
* 2. 

* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function addNums(num1, num2) {
    console.log(this);
    return num1 + num2;
  }
console.log("Principle 1 -->")
console.log(addNums(23,7));
// Principle 2

// code example for Implicit Binding
const myObj = {
    statment: "This is an example of Implicit Binding",
    giveStatment: function(name) {
      console.log(`${this.statment} & my name is ${name}!`);
    }
  };
  console.log("Principle 2 -->")
myObj.giveStatment("Ben");
// Principle 3

// code example for New Binding
function attackStatement(attacker, victim) {
    this.statement = " attacks ";
    this.attacker = attacker;
    this.victim = victim;
    this.speak = function() {
      console.log(this.attacker + this.statement + this.victim + ", ouch!");
    };
  }
  console.log("Principle 3 -->")
  const jerry = new attackStatement('Newman', "Alex");
  const newman = new attackStatement('Jerry', "Frannie");
  const millie = new attackStatement('Millie', 'Bob')
  
  jerry.speak();
  newman.speak();
  millie.speak();
// Principle 4

// code example for Explicit Binding
function attackStatementExplicit(attacker, victim) {
    this.statement = " attacks ";
    this.attacker = attacker;
    this.victim = victim;
    this.speak = function() {
      console.log(this.attacker + this.statement + this.victim + ", ouch!");
    };
  }
  console.log("Principle 4 -->")
 
  millie.speak.call(newman); jerry.speak.apply(millie);