# Values, Types & Operators Exercises

## Problem One

What are the types of the following expressions and what do they evaluate to, and why?

* `17`
`number, 17`
* `1 + 2 * 3 + 4`
`numbers and mathematical operators, 11`
* `800 / 80 / 8`
`numbers and mathematical operators, 1.25`
* `400 > 200`
`numbers and operator, true`
* `1 !== 1`
`nums and operator, false`
* `true || false`
`booleans and logical operator, true`
* `true && false`
`booleans and logical operator, false`
* `20 % 6`
`nums and mathematical modulo operator, 2`
* `'a' + 'b'`
`strings and concatenate, ab`

## Problem Two

What will the following return?

* `typeof 4`
`number`
*  `typeof 'hello'`
`string`
*  `typeof true`
`boolean`
* `2 === 1 || 3 === 4`
`false` 

## Problem Three

Create a truth table for the expression A || B.

|   A   |   B   |  A `||` B  | 
|-------|-------|----------|
| true  | true  |   true   |
| false | true  |   true   |
| true  | false |   true   |
| false | false |   false  | 

For reference, here is a truth table for the expression A && B:



|   A   |   B   | A && B | 
|-------|-------|--------|
| true  | true  | true   |
| false | true  | false  |
| true  | false | false  |
| false | false | false  | 


## Problem Four

Create a truth table for the expression !A && !B.

|   A   |   B   |  !A   |  !B   | A && !B | !A && !B |
|-------|-------|-------|-------|---------|----------|
| true  | true  | false | false |  false  |   false  |
| false | true  | true  | false |  false  |   false  |
| true  | false | false | true  |  true   |   false  |
| false | false | true  | true  |  false  |   true   |

For reference, here is a truth table for the expression A && !B:

|   A   |   B   |   !B   | A && !B | 
|-------|-------|--------|---------|
| true  | true  | false  |  false  |
| false | true  | false  |  false  |
| true  | false | true   |  true   |
| false | false |  true  |  false  | 

## Problem Five

Create a truth table for the expression !(A || B).

| A `||` B |  !(A `||` B) |
|--------|------------|
|  true  |    false   |
|  true  |    false   |
|  true  |    false   |
|  false |    true    |


## Problem Six

Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation: 
  ```js
  1 + 2 + 3 + 4  
      3 + 3 + 4
          6 + 4
              10
  ```
```js
1)      PEMDAS applies with mathematical operators
2)          2 + 3 * 2 + 1
3)            2 + 6 + 1
4)              8 + 1
5)                9
```

 ## Problem Seven
 
 Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
```js
 1)     4 / 2 + 8 / 4
 2)      2   + 8 / 4
 3)       2   +   2
 4)           4
```
 
 ## Problem Eight
 
 Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.

 ```js
1)      'ca' + 'ter' + 'pi' + 'llar'
2)        'cater' + 'pi' + 'llar'
3)           'caterpi' + 'llar'
4)            = 'caterpillar'
 ```
 ## Problem Nine
 
 Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
```js
1)      2 * 4 === 8 && 'car' + 'pool' === 'carpool'
2)      8 === 8 && 'car' + 'pool' === 'carpool'
3)      true && 'car' + 'pool' === 'carpool'
4)      true && 'carpool' === 'carpool'
5)      true && true
6)          true
```
 
 ## Problem Ten
 
  Write a step-by-step evaluation for the following expression: `'1' + '2' + '3' - '1'`.
 ```js
  1)      '1' + '2' + '3' - '1'
  2)       '1' + '2' + '2'
  3)          '12' + '2'
  4)            '122'
```

  
