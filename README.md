# Values, Types & Operators Exercises

## Problem One

What are the types of the following expressions and what do they evaluate to, and why?

* `17` //Number  = 17
* `1 + 2 * 3 + 4` //Number = 11
* `800 / 80 / 8` //Number = 8
* `400 > 200` // boolean = true
* `1 !== 1` // boolean = false
* `true || false` // boolean = true
* `true && false` // boolean = false
* `20 % 6` // number = 
* `'a' + 'b'` // String = 'ab'

## Problem Two

What will the following return?

* `typeof 4` // Number
*  `typeof 'hello'` // String
*  `typeof true` // boolean
* `2 === 1 || 3 === 4` // false

## Problem Three

Create a truth table for the expression A || B.
|   A   |   B   | A || B | 
|-------|-------|--------|
| true  | true  | true  |
| false | true  | false |
| true  | false | true  |
| false | false | false | 

For reference, here is a truth table for the expression A && B:

|   A   |   B   | A && B | 
|-------|-------|--------|
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false | 


## Problem Four

Create a truth table for the expression !A && !B.
|   A   |   B   |   !B   | !A && !B | 
|-------|-------|--------|--------|
| true  | true  | false  | True |
| false | true  | false  | True |
| true  | false | true   | False  |
| false | false |  true  | True | 

For reference, here is a truth table for the expression A && !B:

|   A   |   B   |   !B   | A && B | 
|-------|-------|--------|--------|
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false | 

## Problem Five

Create a truth table for the expression !(A || B).

|   A   |   B   |   !B   | !(A && B) | 
|-------|-------|--------|--------|
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false | 

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
  2 + 6 + 1
  8 + 1
  9
 ## Problem Seven
 
 Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
 // 
 4 / 2 + 8 / 4
 2 + 8 / 4
 2 + 2
 2
 ## Problem Eight
 
 Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 
 cater + pi + llar
 caterpi +llar
 caterpillar 

 ## Problem Nine
 
 Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
2 * 4 ==== 8 && ' car' + 'pool' === 'carpool'
 false 

 ## Problem Ten
 
  Write a step-by-step evaluation for the following expression: `'1' + '2' + '3' - '1'`.
1 +2 +3 -1
3 + 3 - 1
6 - 1
5
  
