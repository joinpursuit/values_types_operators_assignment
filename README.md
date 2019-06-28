# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17`-Number-denotes value, can be used for counting, money, etc
* `1 + 2 * 3 + 4`-Arithmetic operators using addition and multiplication
* `800 / 80 / 8`-Arithmetic operators using division
* `400 > 200` Comparison operators-greater than , used to compare numbers-
* `1 !== 1`-Comparison operators-tests for inequality. Is this not the same as that?
* `true || false`-Logical operators-true OR false-results in a boolean value
* `true && false`-The AND operator-Answer is false. Tests if the statements on both sides have a truthy value
* `20 % 6`-Modulo or remainder operator, can determine if an number is even or odd
* `'a' + 'b'`-String---????

2. What will the following return?
* `typeof 4`-Number
*  `typeof 'hello'`-String
*  `typeof true`-Boolean
* `2 === 1 || 3 === 4`-False

3. Create a truth table for the expression A || B.
-True if A or B or both are true, false otherwise

A         B         A || B
true      true      true
true      false     true
false     true      true
false     false     false

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A && B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

```
4. Create a truth table for the expression !A && !B.-
!A=True if A is false, False if a is true AND
!B=True if B is false and false if B is true-----
&&-Returns a value of True if both its operands are True, and False otherwise, so focus on the !A and !B columns-???

A         B         !A          !B      !A && !B
true      true      false      false    false
false     true      true       false    false---???
true      false     false      true     false----???
false     false     true       true     true




For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A && B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`. PEMDAS
  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
  `3 * 2 +1 +2
       6 +1 + 2
         7  + 2
            9``

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`. PEMDAS

 4/2 + 8 /4
   2  + 2
      4

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

 ca + ter + pi + llar
 cater+ pi + llar
 caterpi +llar
 caterpillar



 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

 &&-Returns a value of True if both its operands are True, and False otherwise,

2 * 4 === 8 && 'car' +'pool'==='carpool'
    8 === 8 &&     carpool ===carpool
    True    &&    true
            True
