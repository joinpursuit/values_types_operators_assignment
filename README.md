# Values, Types & Operators Exercises

1. What are the types of the following expressions and what do they evaluate to, and why?
* `17` // type: number; evaluate: 17; why: 17 is a number ;
* `1 + 2 * 3 + 4` // type: number; evaluate: 11; why: we are using operators on numbers;
* `800 / 80 / 8` // type: number ; evaluate: 1.25 ; why: we are using operators on numbers;
* `400 > 200` // type: boolean ; evaluate: true; why: using comparison operators on integer values to return a boolean value;
* `1 !== 1` // type: boolean ; evaluate: false; why: using comparison operators on integer values to return a boolean value;
* `true || false` // type: boolean; evaluate: true ; why: Use logical operator OR to compare boolean values;
* `true && false` // type: boolean ; evaluate: false ; why: Use logical operator AND to compare boolean values ;
* `20 % 6` // type: number; evaluate: 2; why: modulo operator return a number ;
* `'a' + 'b'` // type: string; evaluate: ab ; why: concatenating string ;

2. What will the following return?
* `typeof 4` //number
*  `typeof 'hello'` //string
*  `typeof true` // boolean
* `2 === 1 || 3 === 4` // false

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

|   A   |   B   |   !B   | A & !B |
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false |
```

|   A   |   B   | A!    |   !B   | !A & !B |
| true  | true  | false | false  | false |
| false | true  | true  | false  | false |
| true  | false | false | true   | false |
| false | false | true  |  true  | true  |






5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation:
  ```js
  1 + 2 + 3 + 4
      3 + 3 + 4
          6 + 4
              10
```

  2 + 3 * 2 + 1
  6 + 2 + 1
  8 + 1
  9


 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
```

4 / 2 + 8 / 4
2 + 8 / 4
2 + 2
4

```

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

```
'ca' + 'ter' + 'pi' + 'llar'
'cater' + 'pi' + 'llar'
'caterpi' + 'llar'
'caterpillar'
```

 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
```

2 * 4 === 8 && 'car' + 'pool' === 'carpool'
8 === 8 && 'car' + 'pool' === 'carpool'
true && 'car' + 'pool' === 'carpool'
true && 'carpool' === 'carpool'
true && true
true

```
