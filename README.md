# Values, Types & Operators Exercises

## Problem One

What are the types of the following expressions and what do they evaluate to, and why?

* `17`
    * number = 17
* `1 + 2 * 3 + 4`
    * number = 11; The code follows 
    PEMDAS and evaluates the answer in that way.
* `800 / 80 / 8`
    * number = 1.25; The code follows PEMDAS and evaulates the problem from left to right
* `400 > 200`
    * boolean = true; It returns as true because 400 is greater than 200.
* `1 !== 1`
    * boolean = false; It is false because 1 is equal to 1
* `true || false`
    * boolean = true; It is true because it is either true or false
* `true && false`
    * boolean = false; Both values are not true so it is false
* `20 % 6`
    * number= 2; 2 is the remainder of 20 divided by 6
* `'a' + 'b'`
    * string = both values are stings and it will add the strings together

## Problem Two

What will the following return?

* `typeof 4`
    * number
*  `typeof 'hello'`
    * string
*  `typeof true`
    * boolean 
* `2 === 1 || 3 === 4`
    * boolean 
## Problem Three

Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:



|   A   |   B   | A && B | 
|-------|-------|--------|
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false | 

|   A   |   B   | A || B | 
|-------|-------|--------|
| true  | true  | true  |
| false | true  | true  |
| true  | false | true  | 
| false | false | false | 



## Problem Four

Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:



|   A   |   B   |   !B   | A && B | 
|-------|-------|--------|--------|
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false | 

|   A   |   B   |   !B   | !A && !B | 
|-------|-------|--------|--------|
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | false |
| false | false |  true  | true  | 

## Problem Five

Create a truth table for the expression !(A || B).

|   A   |   B   | !(A || B) | 
|-------|-------|--------|
| true  | true  | false  |
| false | true  | false  |
| true  | false | false  | 
| false | false | true   | 

## Problem Six

Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation: 
  ```js
  1 + 2 + 3 + 4  
      3 + 3 + 4
          6 + 4
              10
  2 + 3 * 2 + 1
     2 + 6 + 1
        8 + 1
            9


  
 ## Problem Seven
 
 Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
  4 / 2 + 8 / 4
    6 + 8 / 4
        6 + 2
            8
        
 
 ## Problem Eight
 
 Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
    "ca" + "ter" + "pi" + "llar"
        "cater" + "pi" + "llar"
            "caterpi" + "llar"
                "caterpillar"

 
 ## Problem Nine
 
 Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
    2 * 4 === 8 && "car" + "pool" === "carpool"
        8 === 8 && "car" + "pool" === "carpool"
            8 === 8 && "carpool" === "carpool"
                true


 
 ## Problem Ten
 
  Write a step-by-step evaluation for the following expression: `'1' + '2' + '3' - '1'`.
    "1" + "2" + "3" - "1"
        "12" + "3" - "1"
            "123" - "1"
                    "122"

