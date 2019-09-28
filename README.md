# Values, Types & Operators Exercises

## Problem One

What are the types of the following expressions and what do they evaluate to, and why?

* `17` // 17 is a number. It's the only number present.
* `1 + 2 * 3 + 4` // The expression is a number. It evaluates to 11 because 2 * 3 is 6 + 1 is 7 + 4 is 11.
* `800 / 80 / 8` // The expression is a number. It evaluates to 1.25 because 800 divided by 80 is 10 and 10 divided by 8 is 1.25.
* `400 > 200` // The expression a Boolean. The value of this expression is true because 400 is in fact greater than 200.
* `1 !== 1` // The expression is a Boolean. The valuse of this expression is false because !== means 'not equal' but 1 is equal to 1. 
* `true || false` // The expression is a Boolean. The value of this expression is true because the true is present with the or and it takes on that value.
* `true && false` // The expression is a Boolean. It is false because an expression cannot be true if it is false.
* `20 % 6` // The expression is a number and the answer is 2. % represent modulo which is a remainder.
* `'a' + 'b'` // 

## Problem Two

What will the following return?

* `typeof 4` // number
*  `typeof 'hello'` // string
*  `typeof true` // boolean
* `2 === 1 || 3 === 4` // false

## Problem Three

Create a truth table for the expression A || B.

|   A   |   B   | A || B | 

|-------|-------|--------|

| true  | true  | true  |

| false | true  | true  |

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

|   A   |   B   |  !A  |    !B   | !A && !B | 
|-------|-------|------|-------- |--------|
| true  | true  | false|  false  | false |
| false | true  | true |  false  | false |
| true  | false |false |  true   | false |
| false | false | true |  true   | true  | 

For reference, here is a truth table for the expression A && !B:



|   A   |   B   |   !B   | A && B | 
|-------|-------|--------|--------|
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false | 

## Problem Five

Create a truth table for the expression !(A || B).
|   A   |   B   | A || B | !(A || B)|

|-------|-------|--------|----------|

| true  | true  | true  | false  |

| false | true  | true  | false  |

| true  | false | true  | false  |

| false | false | false | true   |
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
  -> 2 + (3 * 2) +1
  -> 2 + 6 + 1
  -> 8 + 1
  -> 9
  
 ## Problem Seven
 
 Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
 4 / 2 + 8 / 4
 -> (4 / 2 ) + (8 /4)
 -> 2 + (8 / 4)
 -> 2 + 2
 -> 4
 
 ## Problem Eight
 
 Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 'ca' + 'ter' + 'pi' + 'llar'
 -> 'cater' + pi' + 'llar'
 -> 'caterpi' + 'llar'
 -> 'caterpillar'

 ## Problem Nine
 
 Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
 2 * 4 === 8 && 'car' + 'pool' === 'carpool'
 -> 8 === 8 && car' + 'pool' === 'carpool'
 -> true && car' + 'pool' === 'carpool'
 -> true && 'carpool' === 'carpool'
 -> true && true
 -> true 
 
 ## Problem Ten
 
  Write a step-by-step evaluation for the following expression: `'1' + '2' + '3' - '1'`.
  '1' + '2' + '3' - '1'
  -> '12' + '3' -  '1'
  -> '123' - '1'
  -> '122'

  
