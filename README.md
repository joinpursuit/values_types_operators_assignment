# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` // number expression, evaluates to the number 17, because doesn't have open and closed quotation marks, operators, or conditions.
* `1 + 2 * 3 + 4` // number expression, evaluates to (11), because of the order of operations since we are using Operators
* `800 / 80 / 8` // number expression, evaluates to (1.25), because the operator is division so (800 / 80) equals (10) and (10 / 8) equals (1.25).
* `400 > 200` // Boolean expression using comparison operation, evaluates to true, because 400 is greater than 200.
* `1 !== 1` // Boolean expression, evaluates to false, because 1 is equal to 1
* `true || false` // Boolean expression, evaluates to true, because one of the two statement is true
* `true && false` // Boolean expression, evaluates false because both statements have to be true for the expression to be true.
* `20 % 6` // number expression, evaluates to 2, because 2 is the remainder of (20/6).
* `'a' + 'b'` string operator expression, evaluates to (ab), because it is the expression to combine (a and b)

2. What will the following return?
* `typeof 4` // number
*  `typeof 'hello'` // string
*  `typeof true` // Boolean
* `2 === 1 || 3 === 4` false

3. Create a truth table for the expression A || B.
|  A   |   B    | A || B |
|------|--------|--------|
| true | true   | true   |
|false | true   | true   |
|true  | false  | true   |
|false | false  | false  |

For reference, here is a truth table for the expression A && B:

``` js

|   A   |   B   | A && B |
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false |

``` js
4. Create a truth table for the expression !A && !B.
|  A    |  !A   |  B    | !B    |  A && B|
|-------|------ |-------|-------|--------|
| true  | false |  true | false | false  |
|false  | true  | true  | false | false  |
|true   | false | false | true  | false  |
|false  | true  | false | true  | true   |
  
 ``` js

For reference, here is a truth table for the expression A && !B:

``` js

|   A   |   B   |   !B   | A && B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |

```
5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
2 + 3 * 2 + 1
    2 + 6 + 1
        8 + 1
            9


  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
  ```

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
     2 * 4 === 8 && 'car' + 'pool' === 'carpool'.
           2 * 4 === 8 // true
           'car' + 'pool' === 'carpool' // true
    since both expressions are true the && (and) statement is true as well.
