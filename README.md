# Values, Types & Operators Exercises

## Problem One

What are the types of the following expressions and what do they evaluate to, and why?

* `17`
    number 17 
* `1 + 2 * 3 + 4`
    number 11 , order of operations
* `800 / 80 / 8`
    1.25 number 
* `400 > 200`
    true boolean evaluates boolean expression 400 is greater than 200
* `1 !== 1`
    false boolean evaluates boolean expression 1 is not 1 false
* `true || false`
    true boolean evaluates boolean expression true or false is true
* `true && false`
    false boolean evaluates boolean expression true and false is false
* `20 % 6`
    2 number 20 divded by 6 is 18 remainder 6 
* `'a' + 'b'`
    b string concatenate 

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
| true  | true  | true  |
| false | true  | true  | 
| true  | false | true  |
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

|   A   |   B   | !A && !B | 
|-------|-------|--------|
| true  | true  | false  |
| false | true  | false |
| true  | false | false |
| false | false | true |

## Problem Five

Create a truth table for the expression !(A || B).

|   A   |   B   |   !(A || B) |
|-------|-------|-----------|
| true  | true  | false     | 
| false | true  | false     | 
| true  | false | false      | 
| false | false | true      | 


## Problem Six

Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation: 
  ```js
  1 + 2 + 3 + 4  
      3 + 3 + 4
          6 + 4
              10
  ```
  
 ## Problem Seven
 
 Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.


   ```js
  4 / 2 + 8 / 4  
      2 + 8 / 4
          2+2 
              4
  ```
 
 ## Problem Eight
 
 Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
  ```js
  'ca' + 'ter' + 'pi' + 'llar'
      'cater' + 'pi' + 'llar'
          'caterpi' + 'llar'
                'caterpillar'
  ```

 
 ## Problem Nine
 
 Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

```js
 2 * 4 === 8 && 'car' + 'pool' === 'carpool'
        8=== 8 && 'car' + 'pool' === 'carpool'
            true && 'car' + 'pool' === 'carpool'
                true && 'carpool' === 'carpool'
                    true &&  true
                        true
    

 ```


 ## Problem Ten
 
  Write a step-by-step evaluation for the following expression: `'1' + '2' + '3' - '1'`.

```js
  '1' + '2' + '3' - '1'
     '1' + '2' + '2'
        '12' + '2'
         '122'
    
   ```
