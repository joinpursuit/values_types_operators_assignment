# Values, Types & Operators Exercises

## Problem One

What are the types of the following expressions and what do they evaluate to, and why?

* `17` 
17, number
* `1 + 2 * 3 + 4`
11 , number, arithmatic equation
* `800 / 80 / 8`
1.25 number
* `400 > 200`
 true, boolean, greater than
* `1 !== 1`
false, boolean, tests for inequality 
* `true || false`
true, logical operator, or runs the left side first, if true all is true
* `true && false`
False, and operator requires all elements to be true, boolean
* `20 % 6`
2, arithmatic equation, number
* `'a' + 'b'`
string, a + b

## Problem Two

What will the following return?

* `typeof 4`
Number
*  `typeof 'hello'`
String
*  `typeof true`
boolean
* `2 === 1 || 3 === 4`
False

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
|_______|_______|________|
|  true |  true |  true  |
|  false|  true |  true  |
|  true |  false|  true  |
|  false|  false|  false |




## Problem Four

Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:



|   A   |   B   |   !B   | A && B | 
|-------|-------|--------|--------|
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false | 

|   A   |   B   |   !B   |   !A   | !A && !B |
|-------|-------|--------|--------|----------|
| true  | true  | false  | false  | false |
| false | true  | false  | true   | false |
| true  | false | true   | false  | false |
| false | false |  true  | true   | true  |


## Problem Five

Create a truth table for the expression !(A || B).

|   A   |   B   | A || B | !( A || B) |
|_______|_______|________|____________|
|  true |  true |  true  |  false  |
|  false|  true |  true  |  false  |
|  true |  false|  true  |  false  |
|  false|  false|  false |  true   |


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

 4 / 2 + 8 / 4
         2 + 2
             4
 
 ## Problem Eight
 
 Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

'ca' + 'ter' + 'pi' + 'llar'
          'cater' + 'pillar'
               'caterpillar'
 
 ## Problem Nine
 
 Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

 2 * 4 === 8 && 'car' + 'pool' === 'carpool'
     8 === 8 && 'car' + 'pool' === 'carpool'
          8 === 8 && 'carpool' === 'carpool' 

 ## Problem Ten
 
  Write a step-by-step evaluation for the following expression: `'1' + '2' + '3' - '1'`.

'1' + '2' + '3' - '1'
            12  +  2
                  14
  
