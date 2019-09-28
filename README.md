# Values, Types & Operators Exercises

## Problem One

What are the types of the following expressions and what do they evaluate to, and why?

* `17` 
number because its not a letter
* `1 + 2 * 3 + 4`
11 because of pemdas
* `800 / 80 / 8`
1.25 
* `400 > 200`
Boolean becauee True 
* `1 !== 1`
false
* `true || false`
True, because true is present it is true
* `true && false`
False because a true can not be false
* `20 % 6`
It a number, the answer is 2 be\cause that is the remainder
* `'a' + 'b'`
String, it will place ab together because of the add sign

## Problem Two

What will the following return?

* `typeof 4`
*  `typeof 'hello'`
*  `typeof true`
* `2 === 1 || 3 === 4`

## Problem Three

Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:



|   A   |   B   | A || B | 
|-------|-------|--------|
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false | 


## Problem Four

Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:



|   A   |   B   |   !B   | !A && !B| 
|-------|-------|--------|---------|
| true  | true  | false  |  false  |
| false | true  | false  |  false  |
| true  | false | true   |  false  |
| false | false |  true  |  true   | 

## Problem Five

Create a truth table for the expression !(A || B).

|   !A   |   !B   |  A || B | !A || B|
|-------|-------|---------|
| true  | true  | true    |  false
| false | true  | true    |  false
| true  | false | true    |  false 
| false | false | false   |  true

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
  ->2 + 6 + 1
   -> 8 + 1 
    ->9
    
 ## Problem Seven
 
 Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

 4 / 2 + 8 / 4
 -> 2 + 8 / 4
  -> 2 + 2
   -> 4
 ## Problem Eight
 
 Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

 'ca' + 'ter' + 'pi' + 'llar' 
 -> cater + 'pi' + 'llar'
 --> caterpi + 'llar'
 ---> caterpillar
 ## Problem Nine
 
 Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

 2 * 4 === * && 'car' + 'pool' ==== 'carpool'
 
 ## Problem Ten
 
  Write a step-by-step evaluation for the following expression: `'1' + '2' + '3' - '1'`.

  
