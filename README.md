# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` - THIS IS A NUMBER CUZ INTERGER
* `1 + 2 * 3 + 4`  - <b>THIS IS A NUMBER CUZ THE OEPRATION PRODUCE A INTEGER </b>
* `800 / 80 / 8` - <b>THIS IS A NUMBER TOO </b>
* `400 > 200` - THIS IS A T/F STATEMENT - IS ASKING IS 400 GREATER THAN 200 - TRUE
* `1 !== 1` - THIS IS A T/F STATEMENT - FALSE = IS 1 NOT EQUAL TO 1 = Which it is so its false.
* `true || false` - TRUE OR FALSE = IS TRUE BECAUSE FIRST TRUE IS TRUE
* `true && false` - FALSE = TRUE AND FALSE CUZ FIRST IS TRUE AND THE SECOND ONE IS FALSE
* `20 % 6` - NUMBER
* `'a' + 'b'` - ab = STRING

2. What will the following return?
* `typeof 4` NUMBER
*  `typeof 'hello'` STRING
*  `typeof true` BOOLEAN
* `2 === 1 || 3 === 4` FALSE

3. Create a truth table for the expression A || B.


For reference, here is a truth table for the expression A && B:

 ``` js

|   A   |   B   | A || B | 
| true  | true  | true  |
| false | true  | TRUE |
| true  | false | TRUE |
| false | false | false | 


4. Create a truth table for the expression !A && !B.


|   A   |   B   |   !A   |   !B  |  !A && !B | 
| true  | true  | false  | false |    TRUE   |
| false | true  | true   | false |   FALSE   |
| true  | false | false  | true  |   FALSE   |   
| false | false |  true  | true  |    TRUE   |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  2 + 6 + 1
    9
  
 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
4 / 2 = 2
8 / 4 = 2
2 + 2 + 4
4

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 Ca
 Cater
 Caterpi
 Caterpillar

 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
  2 * 4 = 8 = 8 = TRUE
  AND
  CARPOOL = CARPOOL = TRUE
  TRUE = TRUE
  TRUE
