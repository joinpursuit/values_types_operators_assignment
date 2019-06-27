# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` // Number expression, 17, it is just the value of the number.
* `1 + 2 * 3 + 4`// Number expression, 11, we are calculating the arithmetic operations and the value will return as a single number.
* `800 / 80 / 8`//Number expression, 1.25, we are calculating the arithmetic operations and the value will return as a single number.
* `400 > 200`? // Booleans expression, false, Boolean is a type that can only have one possible Values true or false, this case  400 is greater than 200.
* `1 !== 1` // booleans expression, false, Boolean is a type that can only have one possible Values true or false and it test for inequality, this case the question 1 is not equal to 1 so the answer is false.
* `true || false` // booleans expression, true, Boolean is a type of logical operator that can only have one possible Values true or false. so the logic behind this operation is (true or false) the answer will be true since one of them it is true.
* `true && false`  //booleans expression, false, Boolean is a type of logical operator that can only have one possible Values true or false. so the logic behind this operation is (true and false) the answer will be false since both of them are not true.
* `20 % 6` // Number expression, 2, it is just the value of the remainder operator and the answer will be a number.
* `'a' + 'b'` // string concatenation, ab, this operator can be use to join two strings together.

2. What will the following return?
* `typeof 4` // number
*  `typeof 'hello'`// string
*  `typeof true`// booleans
* `2 === 1 || 3 === 4`// false

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A && B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

```
|   A   |   B   | A || B |
|-------|-------|--------|
| true  | true  |  true  |
| false | true  |  true  |
| true  | false |  true  |
| false | false |  false |

4. Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A && B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

```
|   A   |   A!  |   B   |   !B   | !A && !B |
|-------|-------|-------|--------|----------|
| true  | false | true  | false  |   false  |
| false | true  | true  | false  |   false  |
| true  | false | false | true   |   false  |
| false | true  | false | true   |   true   |

5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
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
                  caterpillar

 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

 2 * 4 === 8 && 'car' + 'pool' === 'carpool'
 8 === 8 && carpool === carpool
                   true && true
                           true
