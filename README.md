# Values, Types & Operators Exercises


1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` // type: number, evaluation: number 17 , cause: it's the way we declare a number
* `1 + 2 * 3 + 4` // type: number, evaluation: number 11, it's an arithmetic operation, the multiplication has the priority so first it's 2*3 then the addition
* `800 / 80 / 8` // type: number, evaluation: number 1.25, it's an arithmetic operation, 800/80=10 then 10/8=1.25
* `400 > 200` // type: boolean, evaluation : true, cause: 400 is greater than 200 (true fact)
* `1 !== 1` // type : boolean, evaluation: false, cause: is 1 different than 1? no, false
* `true || false` // type: boolean, evaluation: true, cause: it's an OR statement and one true fact is enough to evaluate a true result
* `true && false` // // type: boolean, evaluation: false, cause: it's an AND statement and for it to be true, both facts must be true
* `20 % 6` // type: number, evaluation: 2, why: this is the remainder of dividing 20 by 6 (20=6*3+2)
* `'a' + 'b'` // type: string, evaluation: ab, why: it's possible to sum strings

2. What will the following return?
* `typeof 4` // number
*  `typeof 'hello'` // hello
*  `typeof true` // boolean
* `2 === 1 || 3 === 4` // false

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A && B |
| true  | true  | true   |
| false | true  | false  |
| true  | false | false  |
| false | false | false  |

```
|   A   |   B   | A || B |
| true  | true  | true   |
| false | true  | true   |
| true  | false | true   |
| false | false | false  |


4. Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A && !B | // it was typed A&&B and the results were for A&&!B
| true  | true  | false  | false   |
| false | true  | false  | false   |
| true  | false | true   | true    |
| false | false |  true  | false   |

```
|   A   |   B   |   !A   |   !B  | !A && !B |
| true  | true  | false  | false | false    |
| false | true  | true   | false | false    |
| true  | false | false  | true  | false    |
| false | false | true   | true  | true     |


5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
  ```
  `2 + 3 * 2 + 1`
   2 +   6   + 1
         8   + 1
               9


 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

 `4 / 2 + 8 / 4`
    2   + 8 / 4
    2   +   2
        4

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

 `'ca' + 'ter' + 'pi' + 'llar'`
    'cater'    + 'pi' + 'llar'
          'caterpi'   + 'llar'
                 'caterpillar'


 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

`2 * 4 === 8 && 'car' + 'pool' === 'carpool'`
   8   === 8 && 'car' + 'pool' === 'carpool'
     8 === 8 && 'car' + 'pool' === 'carpool'
      true   && 'car' + 'pool' === 'carpool'
        true &&      'carpool' === 'carpool'
        true &&                true
            true
