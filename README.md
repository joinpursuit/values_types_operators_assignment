# Values, Types & Operators Exercises

## Problem One

What are the types of the following expressions and what do they evaluate to, and why?

* `17`
number; 17; because it is a value
* `1 + 2 * 3 + 4`
number; 11; because it reads multiplication first then from left to right
->1 + 6 + 4
->7 + 4
->11
* `800 / 80 / 8`
number; 1.25; because it reads the expression from left to right
->10 / 8
->1.25
* `400 > 200`
boolean; true; because it is comparing the two values
* `1 !== 1`
boolean; false; because it compares the two values and shows that it is the same on both sides
* `true || false`
boolean; true; because of truthy/falsey, if any value on the typeof side is true, it will return true
* `true && false`
boolean; false; in order to be true, everything has to be true
* `20 % 6`
numbers; 2; it is an expression that has a value
* `'a' + 'b'`
string; 'ab'; you are adding two strings together because they are in quotations

## Problem Two

What will the following return?

* `typeof 4`
number
*  `typeof 'hello'`
string
*  `typeof true`
boolean
* `2 === 1 || 3 === 4`
false

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
| true  | true  | true   |
| false | true  | true   |
| true  | false | true   |
| false | false | false  |


## Problem Four

Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:



|   A   |   B   |   !B   | A && B | 
|-------|-------|--------|--------|
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false | 

|   A   |   B   |   !A  |  !B   | !A && !B | 
|-------|-------|-------|-------|----------|
| true  | true  | false | false |  false   |
| false | true  | true  | false |  false   |
| true  | false | false | true  |  false   |
| false | false | true  | true  |  true    |

## Problem Five

Create a truth table for the expression !(A || B).

|   A   |   B   | (A || B) | !(A || B) |
|-------|-------|----------|-----------|
| true  | true  |   true   |   false   |
| false | true  |   true   |   false   |
| true  | false |   true   |   false   |
| false | false |   false  |   true    |

## Problem Six

Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation: 
  ```js
  1 + 2 + 3 + 4  
      3 + 3 + 4
          6 + 4
              10
  ```
  2 + 3 * 2 + 1
  -> 2 + 6 + 1
  -> 2 + 7
  -> 9
  
 ## Problem Seven
 
 Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
 4 / 2 + 8 / 4
 -> 2 + 8 / 4
 -> 2 + 2
 -> 4
 
 ## Problem Eight
 
 Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 'ca' + 'ter' + 'pi' + 'llar'
 -> 'cater' + 'pi' + 'llar'
 -> 'caterpi' + 'llar'
 -> 'caterpillar'
 
 ## Problem Nine
 
 Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
 2 * 4 === 8 && 'car' + 'pool' === 'carpool'
 ->8 === 8 && 'car' + 'pool' === 'carpool'
 ->8 === 8 && 'carpool' === 'carpool'
 ->true
 
 ## Problem Ten
 
  Write a step-by-step evaluation for the following expression: `'1' + '2' + '3' - '1'`.
'1' + '2' + '3' - '1'
->'12' + '3' - '1'
->'123' - '1'
->122
  
