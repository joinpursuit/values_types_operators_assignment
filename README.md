# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` number , 17 - that is the number presented;
* `1 + 2 * 3 + 4` number , 64 - that is the arithmetic result of this expression;
* `800 / 80 / 8` number , 1.25 - that is the arithmetic result of this expression;
* `400 > 200` boolean , true, because 400 is greater than 200;
* `1 !== 1` boolean , false, because it states that 1 does not equal to 1, which is not true, because 1 equals to 1
* `true || false` boolean , true - the || operator only returns false if both left-hand and right-hand sides are false. This is not the case here therefore it returns true.
* `true && false` boolean , false - the && operator will evaluate to true only if both left-hand and right-hand sides are true. It is not the case here therefore it returns false;
* `20 % 6` number, 2 - we can fit the value of `6` 3 times into the value of `20`, and we will have 18. The remainder is 2.
* `'a' + 'b'` string, `ab` - we've combined 2 strings

2. What will the following return?
* `typeof 4` number
*  `typeof 'hello'` string
*  `typeof true` boolean
* `2 === 1 || 3 === 4` false

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A & B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

```
|   A   |   B   | A || B |
| true  | true  | true   |
| false | true  | true   |
| true  | false | true   |
| false | false | false  |

4. Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A & B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

```
|   A   |   B   |   !A   |   !B   | !A && !B |
| true  | true  | false  | false  | false    |
| false | true  | true   | false  | false    |
| true  | false | false  | true   | false    |
| false | false | true   | true   | true     |

5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
  ```
`2 + 3 * 2 + 1` :
2 + 3 + 3 + 1   or  2 + 6 + 1
    5 + 3 + 1           8 + 1
        8 + 1               9
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

 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
2 * 4 === 8 && 'car' + 'pool' === 'carpool'
    8 === 8 && 'car' + 'pool' === 'carpool'
         8 === 8 && 'carpool' === 'carpool'
            true && 'carpool' === 'carpool'
                               true && true
                                       true
