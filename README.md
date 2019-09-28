# Values, Types & Operators Exercises

## Problem One

What are the types of the following expressions and what do they evaluate to, and why?

* `17`
number
* `1 + 2 * 3 + 4`
number, 11
* `800 / 80 / 8`
number, 1.25
* `400 > 200`
number, true
* `1 !== 1`
string, False
* `true || false`
string, true
* `true && false`
string, false
* `20 % 6`
string, 2 
* `'a' + 'b'`
string, "ab"

## Problem Two

What will the following return?

* `typeof 4`
number
*  `typeof 'hello'`
string
*  `typeof true`
boolean
* `2 === 1 || 3 === 4`
string, false


## Problem Three

Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:



|   A   |   B   | A || B | 
|-------|-------|--------|
|true   | false | true  |
|false  | true  | true  |
|true   | false | true  |
|false  | false | false | 


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
| true  | true  | false  |  false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | true | 

## Problem Five

Create a truth table for the expression !(A || B).

|   A   |   B   | !(A || B) | 
|-------|-------|--------   |
| true  | true  | false  |
| false | true  | false |
| true  | false | false |
| false | false | true | 

## Problem Six

Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation: 
  ```js
  1 + 2 + 3 + 4  
      3 + 3 + 4
          6 + 4
              10
  ```
-> 2 + (3 * 2 ) = 2 + 6 = 8
-> 8 + 1 = 9
  
 ## Problem Seven
 
 Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

 -> (4/2) = 2
 -> 2 + (8/4) = 2 + 2
 -> 2 + 2 = 4

 
 ## Problem Eight
 
 Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 -> 'ca' + 'ter' = 'cater'
 -> 'cater' + 'pi' = 'caterpi'
 -> 'caterpi' + 'llar' = 'caterpillar'
 ## Problem Nine
 
 Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
 
-> 2 * 4 = 8
-> 8 === 8 && 'car' + 'pool' = 8 === 8 && 'carpool'
-> 8 === 8 && 'carpool' === 'carpool' = true

 ## Problem Ten
 
  Write a step-by-step evaluation for the following expression: `'1' + '2' + '3' - '1'`.

  -> '12' = '12'  
  -> '12' + '3' = '123'
  -> '123' - '1' = '123-1'
  -> '123-1'
