# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` // Number, evaluates to 17.
* `1 + 2 * 3 + 4` // Number, evaluates to 11 because it follows order of operations, therefore, multiplies first then adds.
* `800 / 80 / 8` // Number, evaluates to 1.25. Just performing the operation asked to.
* `400 > 200` // Number, evaluates to 2. Just dividing the numbers and giving solution.
* `1 !== 1` // Boolean, false. This is saying that 1 is not equal to 1, therefore, it is false because 1 does equal 1.
* `true || false` // Boolean expression, evaluates to true because when using || (OR) that means that just one side has to be true in order to be true.
* `true && false` // Boolean expression, evaluates to false, because AND needs both sides to be true in order to be true.
* `20 % 6` // Number, evaluates to 2, because % (modulo) is a remainder operator.
* `'a' + 'b'` // String, evaluates to ab because it combines both strings together.

2. What will the following return?
* `typeof 4`// Number
*  `typeof 'hello'`// String
*  `typeof true` // Boolean
* `2 === 1 || 3 === 4` // False

3. Create a truth table for the expression A || B.

|   A   |   B   | A || B |
| true  | true  | true   |
| false | true  | true   |
| true  | false | true   |
| false | false | false  |

```
4. Create a truth table for the expression !A && !B.

//
|  A    |   !A    |    B  |   !B   | !A && !B |
| true  | false   | true  | false  | true     |
| false | true    | false | true   | true     |
| true  | false   | false | true   | false    |
| false | true    | true  | false  | false    |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  //
  2 + 3 * 2 + 1
      2 + 6 + 1
          8 + 1
              9

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
//
4 / 2 + 8 / 4
    2 + 8 / 4
        2 + 2
            4

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
//
'ca' + 'ter' + 'pi' + 'llar'
'cater' + 'pi' + 'llar'
'caterpi' + 'llar'
'caterpillar'

 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
 //
 8 === 8 && 'carpool' === 'carpool'
 true && true
 true
