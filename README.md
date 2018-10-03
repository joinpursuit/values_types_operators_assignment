# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` // This is a number, 17, it's a literal number.
* `1 + 2 * 3 + 4` // This is a number, 17, it evaluates to a number
* `800 / 80 / 8` // This is a number, 1.25, it becomes a float after division
* `400 > 200` // This is a boolean, true, 400 is greater than 200
* `'a' + 'b'` // This is a string, ab, concatination of the string

2. What will the following return?
* `typeof 4` //number
*  `typeof 'hello'` //string
*  `typeof true` //boolean
* `2 === 1 || 3 === 4` //boolean

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A & B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

//|   A   |   B   | A || B |
//| false | true  | true  |
//| true  | false | true  |
//| false | false | false |

```
4. Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A & B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

//|   A   |  !A   |   B   |   !B   | !A & !B |
//| true  | false | true  | false  | false |
//| false | true  | true  | false  | false |
//| true  | false | false | true   | false |
//| false | true  | false |  true  | true |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
  ```
  // 2 + 3 * 2 + 1
  // 2 + 6 + 1
  // 8 + 1
  // 9

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

 //4 / 2 + 8 / 4
 //2 + 8 / 4
 //2 + 2
 //4

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

 //'ca + 'ter + 'pi' + 'llar'
 //'cater' + 'pi'+ 'llar'
 //'caterpi'+'llar'
 //'caterpillar'
 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

 //2 * 4 === 8 && 'car' + 'pool' === 'carpool'
 //true  && 'car' + 'pool' === 'carpool'
 //true && true
 //true
