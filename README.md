# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17`  Number. Evaluates to: 17 because there are no Operators to alter the value of the entered number.
* `1 + 2 * 3 + 4`  Numbers and Operators to perform mathematical arithmetic. Evaluates to: 11 because JS obeys the orders of operation, multiplying 2 and 3 before adding 1 and 4.
* `800 / 80 / 8`  Numbers and Operators performing division. Evaluates to: 1.25 because decimals work normally in JS.
* `400 > 200`  A Comparison between two Numbers asking if one is Greater Than the other. Evaluates to: True because 400 is greater than 200.
* `1 !== 1`  A Comparison between two Numbers asking if the first is not equal to the second. Evaluates to: False because one is equal to itself.
* `true || false`  Using the Comparison Operator OR, this asks if something can be True OR False. Since something can either be true or false, this evaluates to: True.
* `true && false`  Using the Comparison Operator AND, this asks if something can be true and false at the same time. Since something can not be both true and false, this evaluates to: False.
* `20 % 6`  An Operator asking the Modulo of two entered Numbers. This evaluates to: 2 because 20 % 6 has a remainder of 2.
* `'a' + 'b'`  This is an Operator concatenating two Strings. It evaluates to: 'ab' because a and b are enclosed in quotes which denotes them as Strings and not undefined items.

2. What will the following return?
* `typeof 4`   number
*  `typeof 'hello'`  string
*  `typeof true`    boolean
* `2 === 1 || 3 === 4`   false

3. Create a truth table for the expression A || B.

|   A   |   B   | A || B | \n
| true  | true  | true  | \n
| false | true  | true  | \n
| true  | false | true  | \n
| false | false | false | \n



For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A && B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

```
4. Create a truth table for the expression !A && !B.

|   A   |   B    | !A && !B |
| false |  false | true     |
| false |  true  | false    |
| true  |  false | false    |
| true  |  true  | false    |


For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A && B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10

2 + 3 * 2 + 1
    2 + 6 + 1
        8 + 1
            9


  ```  

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

 4 / 2 + 8 / 4
     2 + 8 / 4
         2 + 2
             4

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

'ca' + 'ter' + 'pi' + 'llar'
     'cater' + 'pi' + 'llar'
          'caterpi' + 'llar'
               'caterpillar'

 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

 2 * 4 === 8 && 'car' + 'pool' === 'carpool'
     8 === 8 && 'car' + 'pool' === 'carpool'
        true && 'car' + 'pool' === 'carpool'
             true && 'carpool' === 'carpool'
                               true === true
                                        true
