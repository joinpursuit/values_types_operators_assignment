# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` 17  because it is a number
* `1 + 2 * 3 + 4` 11     because this is the answer when the numbers are added together
* `800 / 80 / 8` 1.25    because this is the answer when the numbers are all divided  
* `400 > 200`  true      because 400 is greater than 200
* `1 !== 1`false         because 1 is not equal to 1 is false
* `true || false`  true  because true or false is true
* `true && false`  false because true and false is false
* `20 % 6`   2           because 20 / 6 gives a remainder of 2
* `'a' + 'b'` ab         because  the string a plus the string b equals ab concatinated  

2. What will the following return?
* `typeof 4` number
*  `typeof 'hello'` string
*  `typeof true` boolean
* `2 === 1 || 3 === 4` false

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A && B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |



|   A   |   B   | A && B |
| true  | false | false  |
| true  | true  | true   |
| false | TRUE  | false  |
| false | false | true   |


```
4. Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A && B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

|   A   |   B   |   !B   | A && B |
| true  | false | false  | false |
| false | true  | false  | true  |
| false | false | true   | false |
| false | false | false  | true  |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
  ```
  2 + 3 * 2 + 1
      5 + 2 + 1
          7 + 1
              8

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

 4 / 2 + 8 / 4
     2 + 8 / 4
     2 + 2
         4

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

 ca' + 'ter' + 'pi' + 'llar
        cater + 'pi' + 'llar
                 caterpi + llar
                           caterpillar

 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

 2 * 4 === 8 && 'car' + 'pool' === 'carpool
     8 === 8 && 'car' + 'pool' === 'carpool
          8 === 8 && 'carpool' === 'carpool   
                            TRUE
