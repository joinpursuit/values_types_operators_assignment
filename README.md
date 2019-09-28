# Values, Types & Operators Exercises

## Problem One

What are the types of the following expressions and what do they evaluate to, and why?

* `17`
number

* `1 + 2 * 3 + 4`

11 because PEMDAS

* `800 / 80 / 8`
1.25

* `400 > 200`
true
* `1 !== 1`
false 
* `true || false`
true 

* `true && false`
false
* `20 % 6`
3
* `'a' + 'b'`
ab


## Problem Two

What will the following return?

* `typeof 4`
number

*  `typeof 'hello'`
string

*  `typeof true`
boolean
* `2 === 1 || 3 === 4`
true 


## Problem Three

Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:



|   A   |   B   | A && B | A || B
|-------|-------|--------|
| true  | true  | true  |    true
| false | true  | false |    true 
| true  | false | false |    true 
| false | false | false |    false 


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
| true  | true  | false  | false  |  
| false | true  | false  | false   |
| true  | false | true   |  false  |
| false | false |  true  |  true   | 





## Problem Five

Create a truth table for the expression !(A || B).

|   A   |   B   | A || B  !(A || B) | 
|-------|-------|--------|--------|
| true  | true  | true |   false  |  
| false | true  | true |   false  |
| true  | false | true |   false |
| false | false | false|  true   | 

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
     2 + 8 / 4
       2 + 2
           4
 
 ## Problem Eight
 
 Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

 'ca' + 'ter' + 'pi' + 'llar'
    cater + 'pi' + 'llar"
            cater + pillar
                 caterpillar 

 
 ## Problem Nine
 
 Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

'2 * 4 === 8 && 'car' + 'pool' === 'carpool'
    8 === 8 && 'car' + 'pool' === 'carpool'
        true && 'car' + 'pool' === 'carpool'
            true && carpool === 'carpool
                true && true
                    true
 ## Problem Ten
 
  Write a step-by-step evaluation for the following expression: `'1' + '2' + '3' - '1'`.
 '1' + '2' + '3' - '1'
    '12' + '3' - '1'
        '123' - '1'
            '122'










            
  
