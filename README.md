# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` // Number, Evaluates to 17, because numbers have value in Js
* `1 + 2 * 3 + 4` // arithmetic expression, Evaluates to 11, because Js evaluates arithmetic expressions and returns a single number
* `800 / 80 / 8` // Arithmetic expression, evaluates to 1.25, because Js evaluates arithmetic expressions and returns a single number
* `400 > 200` // comparison expression using greater than operator, evaluates to true, because Js asks is 400 greater than 200 and returns one of the two boolean values
* `1 !== 1` // comparison expression using NOT equal to operator, evaluates to false, because Js asks if 1 is not the same as 1 and returns one of the two boolean values
* `true || false` // logical expression using OR operator, evaluate to true because Js checks if one of the two statements is true when using the || (OR) operator
* `true && false` // logical expression using AND operator, evaluates to false because Js uses the && (AND) operator to check if statements made on both sides of the operator have a truthy value
* `20 % 6` // Arithmetic expression using module operator, evaluates to 2, because Js gets the remainder of dividing the left number by the right and returns a single number
* `'a' + 'b'` // Arithmetic expression using addition, evaluates to ab, because Js will add both strings by putting them next to each other with no space

2. What will the following return?
* `typeof 4` // number
*  `typeof 'hello'` // string
*  `typeof true` // boolean
* `2 === 1 || 3 === 4` // false

3. Create a truth table for the expression A || B.

// my answer

| A    |  B   | A || B |
| true | true | true   |
| true | false| true   |
| false| true | true   |
|false | false| false  |



For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A && B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

```
4. Create a truth table for the expression !A && !B.

// my answer

|  A  |  B  |  !A  | !B  | !A  && !B |
| true|true |false |false| false     |
|false|true |true  |false| false     |
|true |false|false |true | false     |
|false|false|true  | true| true      |



For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A && B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4            
      3 + 3 + 4
          6 + 4
              10
  ```

//  my answer
2 + 3 * 2 + 1
    2 + 6 + 1
        8 + 1
            9


 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
// my answer
4 / 2 + 8 / 4
    2 + 8 / 4
        2 + 2
            4



 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
// my answer
'cat' + 'ter' + 'pi' + 'llar'
      'cater' + 'pi' + 'llar'
            'caterpi'+ 'llar'
                'caterpillar'

8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
// my answer
2 * 4 === 8 && 'car' + 'pool' === 'carpool'
    8 === 8 && 'car' + 'pool' === 'carpool'
       true && 'car' + 'pool' === 'carpool'
            true && 'carpool' === 'carpool'
                              true && true
                                      true
