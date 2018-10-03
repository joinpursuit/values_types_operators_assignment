# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` // "17" is a number and it evaluates to 17 because it is a number type.
* `1 + 2 * 3 + 4` // This is an arithmetic operator. It evaluates to 11 because it's a math problem.
* `800 / 80 / 8` // This is an arithmetic operator. It evaluates to 1.25 because it is a math problem.
* `400 > 200` // This is a boolean. It evaluates to true because the first value is greater than the second one.
* `1 !== 1` // This is a boolean. It evaluates to False because both values are equal.
* `true || false` // This is a logical operator. It evaluates to True because the first statement is true.
* `true && false` // This is a logical operator. It evaluates to False because both statements do not amount to a truthy value.
* `20 % 6` // This is the remainder operator known as modulo. This evaluates to 2 because it's a math problem.
* `'a' + 'b'` // This is a string operator. This evaluates to ab because the two strings were concatenated.

2. What will the following return?
* `typeof 4` // number
*  `typeof 'hello'` // string
*  `typeof true` //boolean
* `2 === 1 || 3 === 4`// false

3. Create a truth table for the expression A || B.

``` js
|   A   |   B   | A || B |
| true  | true  | true   |
| false | true  | true   |
| true  | false | true   |
| false | false | false  |
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

```js

|   A   |   !A  |   B   |   !B  | !A && !B |
| true  | false | true  | false | false    |
| false | true  | false | true  | true     |
| false | true  | true  | false | false    |
| true  | false | false | true  | false    |

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
2 + 3 * 2 + 1
    2 + 6 + 1
        8 + 1
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
         2 + 2
             4
```

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

 ```js
 'ca' + 'ter' + 'pi' + 'llar'
      'cater' + 'pi' + 'llar'
           'caterpi' + 'llar'
                'caterpillar'
````
 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.

 ```js
 2 * 4 === 8 && 'car' + 'pool' === 'carpool'
 8 === 8 && 'carpool' === 'carpool'
 true && true
 true
 ```
