# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` // a number with the value of 17
* `1 + 2 * 3 + 4` // numbers and operators resulting in arithmetic that equals 11
* `800 / 80 / 8` // numbers and operators resulting in arithmetic that equals 1.25
* `400 > 200` // a boolean due to the comparison symbol/ greater than sign that is true
* `1 !== 1` // boolean because of the inequality symbol, false since they are equal
* `true || false` // uses logical operator OR to check if one of the statements is true; boolean true
* `true && false` // uses operator AND to check if both statements are true; boolean false
* `20 % 6` // uses modulo to find remainder of second number into first; 2
* `'a' + 'b'` // two strings put together with the + operator; ab

2. What will the following return?
* `typeof 4` // number
*  `typeof 'hello'` // string
*  `typeof true` // boolean
* `2 === 1 || 3 === 4` // false

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A && B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

// my answer:
|   A   |   B   | A ||  B|
| true  | true  | true  |
| false | true  | true  |
| true  | false | true  |
| false | false | false |
```
4. Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A && B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

// my answer:
|   A   |  B    |   !A   |  !B   |   !A && !B   |
| true  | true  | false  | false |    false     |
| false | true  | true   | false |    false     |
| true  | false | false  | true  |    false     |
| false | false |  true  | true  |    true      |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
  ```
  // my answer
  `2 + 3 * 2 + 1`
      2 + 6 + 1
          8 + 1
            9

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
 // my answer
  `4 / 2 + 8 / 4`
    2 + 8 / 4
      2 + 2
        4

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 // my answer
  'ca' + 'ter' + 'pi' + 'llar'
    'cater' + 'pi' + 'llar'
      'cater' + 'pillar'
        'caterpillar'

 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
// my answer
`2 * 4 === 8 && 'car' + 'pool' === 'carpool'`
  8 === 8 && 'car' + 'pool' === 'carpool'
    8 === 8 && 'carpool' === 'carpool'
      true && 'carpool' === 'carpool'
        true && true
          true
