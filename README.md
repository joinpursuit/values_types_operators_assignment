# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` // Number
* `1 + 2 * 3 + 4` // expression - 11
* `800 / 80 / 8` // expression - 1.25
* `400 > 200` // boolean - false
* `1 !== 1` // expression - false
* `true || false` // condition - true
* `true && false`// condition - false
* `20 % 6` // expression - 3.3
* `'a' + 'b'`// string ab

2. What will the following return?
* `typeof 4`// number
*  `typeof 'hello'`// string
*  `typeof true`// boolean
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

``` js

|   A   |   B   | A || B |
| true  | true  | true   |
| false | true  | true   |
| true  | false | true   |
| false | false | false  |

```
4. Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A && B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

```

``` js

|   A   |   B   |   !A   |   !B   | !A && !B |
| true  | true  | false  | false  | false    |
| false | true  | true   | false  | false    |
| true  | false | false  | true   | false    |
| false | false | true   | true   | true     |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
  ```

  ```js
  2 + 3 * 2 + 1
      2 + 6 + 2
          8 + 2
              10
  ```

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
 ```js
 4 / 3 + 8 / 4
   1.3 + 8 / 4
       1.3 + 2
           3.3
 ```


 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 'ca' + 'ter' + 'pi' +'llar'
          'cater' + 'pillar'
               'caterpillar'

 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
 `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`
                                `true && true`
                                      `true'`
