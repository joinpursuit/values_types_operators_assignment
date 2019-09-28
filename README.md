# Values, Types & Operators Exercises

## Problem One

What are the types of the following expressions and what do they evaluate to, and why?

* `17`
number, 17 
* `1 + 2 * 3 + 4`
11, typeof nummber
* `800 / 80 / 8`
1.25 , number
* `400 > 200`
true, boolean
* `1 !== 1`
false, boolean
* `true || false`
true, if there one truth in || (or), it will be truth
* `true && false`
false, boolean
* `20 % 6`
2, number
* `'a' + 'b'`
ab, string

## Problem Two

What will the following return?

* `typeof 4`
number
*  `typeof 'hello'`
string
*  `typeof true`
boolean
* `2 === 1 || 3 === 4`
false , boolean

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

|   A   |   B   |   !B   | !A     | !A && !B |
|-------|-------|--------|--------|
| true  | true  | false  | false | False
| false | true  | false  | true  | false
| true  | false | true   | false | false
| false | false |  true  | true  | True

## Problem Five

Create a truth table for the expression !(A || B).

|   A   |   B   |   A || B   |   !(A || B)  |
| True  |  True |  True      |  False       |
| True  | False |  True      |  False       |
| False | True  |  True      |  False       |
| False | False | False      |  True        |


## Problem Six

Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation: 
  ```js
  1 + 2 + 3 + 4  
      3 + 3 + 4
          6 + 4
              10
  ```
  -> 2 + 6 + 1
  -> 8 + 1
  -> 9
  
 ## Problem Seven
 
 Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

 -> 2 + 2
 -> 4

 
 ## Problem Eight
 
 Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

 "cater" + "pi" + "llar"
 "Caterpi" + "llar"
 "Caterpillar"
 
 ## Problem Nine
 
 Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

 -> 8 === 8 && "car" + "pool" === "carpool"
 -> 8 === 8 && "carpool" === "carpool"

 
 ## Problem Ten
 
  Write a step-by-step evaluation for the following expression: `'1' + '2' + '3' - '1'`.

  ->  12 + 2
  -> 14

  
