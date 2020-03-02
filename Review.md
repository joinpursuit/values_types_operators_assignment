# Values, Types & Operators Exercises

## Problem One

What are the types of the following expressions and what do they evaluate to, and why?

* `17`
This is a number.
* `1 + 2 * 3 + 4`
This is an expression that returns a single number (11).
* `800 / 80 / 8`
This is an expression that returns a number (1.25).
* `400 > 200`
This is a boolean that returns true because > is a comparison operator.
* `1 !== 1`
This is a boolean that rerurns false because !== is a comparison operator.
* `true || false`
This is boolean a that returns true because || is a logical operator.
* `true && false`
This is a boolean that returns false because && is a logical operator.
* `20 % 6`
This is an expression that returns modulo 2 because % returns a remaining number.
* `'a' + 'b'`
This is a concatenation of strings that returns a string of "ab".

## Problem Two

What will the following return?

* `typeof 4`
This will return 'number'.
*  `typeof 'hello'`
This will return 'string'.
*  `typeof true`
This will return 'boolean'.
* `2 === 1 || 3 === 4`
This will return 'false'.

## Problem Three

Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

|   A   |   B   | A && B | 
|-------|-------|--------|
| true  | true  | true   |
| false | true  | false  |
| true  | false | false  |
| false | false | false  | 

|   A   |   B   | A && B | A || B | 
|-------|-------|--------|--------|
| true  | true  | true   | true   |
| false | true  | false  | true   |
| true  | false | false  | true   |
| false | false | false  | false  |

## Problem Four

Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

|   A   |   B   |   !B   | A && B | 
|-------|-------|--------|--------|
| true  | true  | false  | false  |
| false | true  | false  | false  |
| true  | false | true   | true   |
| false | false |  true  | false  | 

|   A   |   B   |   !B   | A && B | !A && !B | 
|-------|-------|--------|--------|--------|
| true  | true  | false  | false  | false  |
| false | true  | false  | false  | false  |
| true  | false | true   | true   | false  |
| false | false |  true  | false  | true   | 

## Problem Five

Create a truth table for the expression !(A || B).

|   A   |   B   | !(A || B) | 
|-------|-------|-----------|
| true  | true  |  false    |
| false | true  |  false    |
| true  | false |  false    |
| false | false |  true     |


## Problem Six

Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evluation: 
  ```jsa
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

    4 / 2 + 8 / 4
        2 + 8 / 4
            2 + 2
                4


 ## Problem Eight
 
 Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

    'ca' + 'ter' + 'pi' + 'llar'
        'cater' + 'pi' + 'llar'
            'caterpi' + 'llar'
                'caterpillar'

 
 ## Problem Nine
 
 Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
 
 ## Problem Ten
 
  Write a step-by-step evaluation for the following expression: `'1' + '2' + '3' - '1'`.


