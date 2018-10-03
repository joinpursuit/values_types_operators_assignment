# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17`// number = 17
(bc it is a number)
* `1 + 2 * 3 + 4` // number = 1 + 6 + 4 = 6 + 5 = 11
(bc of BODMAS)
* `800 / 80 / 8` // number = 800/80 / 8  =  10 /8 = 1.25
(bc of arithmetic rules)
* `400 > 200` // boolean = true
(because 400 IS > 200)
* `1 !== 1` // boolean = false
(bc 1 === 1 IS true, so !== must be false)
* `true || false` // boolean = true
(bc OR statements check the 1st one first and stops)
* `true && false` // boolean = false
(bc AND statements checks each one and prints the last one if true and prints "False" if there is anything false)
* `20 % 6` // number = 2
(bc 20/6 = 3 Remainder 2 and the modulo result is the REMAINDER )
* `'a' + 'b'` // string = "ab"
(bc it prints the concatenation (+) of the strings)

2. What will the following return?
* `typeof 4` // number
*  `typeof 'hello'` // string
*  `typeof true` // boolean
* `2 === 1 || 3 === 4` // boolean (--> false || false --> false)

3. Create a truth table for the expression A || B.
``` js

| A     | B     | A||B  |
| true  | true  | true  |
| false | true  | true  |
| true  | false | true  |
| false | false | false |

```
For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A & B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

```
4. Create a truth table for the expression !A && !B.
``` js

|   A   |   B   |  !A   |   !B   | !A & !B |
| true  | true  | false | false  | false   |
| false | true  | true  | false  | false   |
| true  | false | false | true   | false   |
| false | false | true  | true   | true    |

```
For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A & B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.

```js

"RE: Brackets of Division and Multiplication before Addition and Subtraction (BODMAS)"

2 + 3 * 2 + 1     
2 +   6   + 1
      8   + 1
            9

```
  For reference, here is a exp of a step-by-step evaluation:
  ```js

  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
  ```

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

```js

4 / 2 + 8 / 4
    2   +   2
            4

```

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

```js

'ca' + 'ter' + 'pi' + 'llar'
     'cater' + 'pi' + 'llar'
          'caterpi' + 'llar'
               'caterpillar'

```

 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

 ```js

2 * 4 === 8 && 'car' + 'pool' === 'carpool'
    8 === 8 &&      'carpool' === 'carpool'
       true &&      true
            true

 ```
