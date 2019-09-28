# Values, Types & Operators Exercises

## Problem One

What are the types of the following expressions and what do they evaluate to, and why?

* `17`
number 17 because its a number

* `1 + 2 * 3 + 4`
numbers
-> 1+6+4
-> 7+4
-> 11 
it returns a value of 11

* `800 / 80 / 8`
numbers because they're all numbers
-> 10/8
-> 1.25

* `400 > 200`
the type of expressions are boolean expressions
-> true
because 400 is greater than 200

* `1 !== 1`
the type of expression is a boolean expression
-> false
this evaluated to false because 1 is equal to 1

* `true || false`
the type of expression is a boolean expression
-> true 
it is true because true is a truthy

* `true && false`
this expression is a boolean expression
->false
it is false because both sides are not truthy
* `20 % 6`
this type is a number
-> 2
because its a number

* `'a' + 'b'`
this expression type is a string
->'ab'
because it has quotations 

## Problem Two

What will the following return?

* `typeof 4`
number
*  `typeof 'hello'`
string
*  `typeof true`
boolean
* `2 === 1 || 3 === 4`
-> false 

## Problem Three

Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:



|   A   |   B   | A || B | 
|-------|-------|--------|
| true  | true  | true   |
| false | true  | true   |
| true  | false | true   |
| false | false | false  | 


## Problem Four

Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:



|  A    |   B   |   !B   | A && B | 
|-------|-------|--------|--------|
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false | |


|  A    | !A    |   B   |   !B   | !A && !B| 
|-------|-------|-------|--------|-------- |
| true  | false |true   | false  | true    |
| false | true  |true   | false  | false   |
| true  | false |false  | true   | false   |
| false | true  |false  | true   | true    |





## Problem Five

Create a truth table for the expression !(A || B).


|  A    |   B   | A || B |!(A || B)| 
|-------|-------|--------|-------- |
| true  | true  | true   | false   |
| false | true  | false  | true    |
| true  | false | true   | false   |
| false | false | false  | true    |




## Problem Six

Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation: 
  ```js
  1 + 2 + 3 + 4  
      3 + 3 + 4
          6 + 4
              10
-> 2+6+1
-> 8+1
-> 9
-

  ```
  
 ## Problem Seven
 
 Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
 -> 2+2
 -> 4
 
 ## Problem Eight
 
 Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 -> "cater" + "pillar"
 -> "caterpilar"
 
 ## Problem Nine
 
 Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
 
 -> 8 === 8 && 'car' + 'pool' === 'carpool'`
 -> 8 === 8 && 'carpool' === 'carpool'
 -> true && true
 -> true
 ## Problem Ten
 
  Write a step-by-step evaluation for the following expression: `'1' + '2' + '3' 
  - '1'`.

  -> 3+3-1
  -> 6-1
  -> 5

  
