# Values, Types & Operators Exercises

## Problem One

What are the types of the following expressions and what do they evaluate to, and why?

* `17`
Type number
* `1 + 2 * 3 + 4`
Type number
Ans: 11

* `800 / 80 / 8`
Type number
Ans: 1.25

* `400 > 200`
Type boolean
Ans: True

* `1 !== 1`
Type boolean
Ans: false

* `true || false`
Type boolean
Ans: true

* `true && false`
Type boolean
Ans: false

* `20 % 6`
Type number
Ans: 2

* `'a' + 'b'`
Type string
Ans: 'ab'

## Problem Two

What will the following return?

* `typeof 4`
Ans: number
*  `typeof 'hello'`
Ans: string
*  `typeof true`
Ans: boolean
* `2 === 1 || 3 === 4`
Ans: False

## Problem Three

Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:



|   A   |   B   | A && B | 
|-------|-------|--------|
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false | 

Ans: 

|   A   |   B   | A || B | 
|-------|-------|--------|
| true  | true  | true  |
| false | true  | true |
| true  | false | true |
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

Ans:

|   A   |   B   |   !B   | !A && !B | 
|-------|-------|--------|--------|
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | false |
| false | false |  true  | true | 

## Problem Five

Create a truth table for the expression !(A || B).

Ans: 
|   A   |   B   |   !B   | !(A || B) | 
|-------|-------|--------|--------|
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | false |
| false | false |  true  | true | 

## Problem Six

Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation: 
  ```js
  1 + 2 + 3 + 4  
      3 + 3 + 4
          6 + 4
              10
  ```
  Ans: 2 + 3 * 2 + 1
        2 + 6 + 1
            8 + 1
                9
  
 ## Problem Seven
 
 Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

 Ans: 4 / 2 + 8 / 4
        2 + 8 / 4
            2 + 2
                4
 
 ## Problem Eight
 
 Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

 Ans: 'ca' + 'ter' + 'pi' + 'llar'
        'cater' + 'pi' + 'llar'
            'caterpi' + 'llar'
                'caterpillar'
 
 ## Problem Nine
 
 Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

 Ans: 2 * 4 === 8 && 'car' + 'pool' === 'carpool'
        8 === 8 && 'carpool' === 'carpool'
            True && True
                True
 
 ## Problem Ten
 
  Write a step-by-step evaluation for the following expression: `'1' + '2' + '3' - '1'`.

  Ans: '1' + '2' + '3' - '1'
            '12' + '3' - '1'
                '123' - '1'
                    '122'

  
