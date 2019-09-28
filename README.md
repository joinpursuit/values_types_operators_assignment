# Values, Types & Operators Exercises

## Problem One

What are the types of the following expressions and what do they evaluate to, and why?

* `17`
number 17
* `1 + 2 * 3 + 4`
number 11
* `800 / 80 / 8`
boolean 1.25
* `400 > 200`
boolean true
* `1 !== 1`
boolean false
* `true || false`
boolean true
* `true && false`
boolean 
* `20 % 6`
boolean 2
* `'a' + 'b'`
string

## Problem Two

What will the following return?

* `typeof 4`
number 
*  `typeof 'hello'`
string
*  `typeof true`
boolean
* `2 === 1 || 3 === 4`
boolean
## Problem Three

Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

|   A   |   B   | A || B | 
|-------|-------|--------|
| true  | true  | true  |
| false | true  | true|
| true  | false | true |
| false | false | true | 






## Problem Four

Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:



|   A   |   B   |   !B   | A && B | 
|-------|-------|--------|--------|
| true  | true  | false  | true   |
| false | true  | false  | true  |
| true  | false | true   | true  |
| false | false |  true  | false | 

## Problem Five

Create a truth table for the expression !(A || B).

|   A   |   B   |   !B   | A || B | 
|-------|-------|--------|--------|
| true  | true  | false  |  true  |
| false | true  | false  |  true |
| true  | false | true   |  false |
| false | false |  true  |  false| 

## Problem Six

Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation: 
  ```js
  1 + 2 + 3 + 4  
      3 + 3 + 4
          6 + 4
              10
  ```

  2 + 3 * 2 +1
    6 + 2 + 1
        8 + 1
            9

  
 ## Problem Seven
 
 Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
 -> 4 / 2 + 8 / 4
 ->  2 + 8 / 4
 ->  2 + 2
 ->  4
 
 ## Problem Eight
 
 Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 -> 'ca' + 'ter' + 'pi' + 'llar'
 ->          'cater + pi + llar'
 ->              'caterpi + llar'
 ->                "caterpillar"
 
 ## Problem Nine
 
 Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.


 
 ## Problem Ten
 
  Write a step-by-step evaluation for the following expression: `'1' + '2' + '3' - '1'`.
-> '1' +  '2' + '3' - '1'
-> '12 + '3' - '1'
-> '123' - '1'
-> '122'