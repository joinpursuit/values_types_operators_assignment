[![Pursuit Logo](https://avatars1.githubusercontent.com/u/5825944?s=200&v=4)](https://pursuit.org)

# Values, Types & Operators

Practice reading JS code and understanding what it does!

## Learning Objectives

- Understand different types in javascript
- Practice reading code & understanding boolean logic
- Learn the various operators in javascript and what they do

## Prerequisites

- Forking & cloning a repo from git
- Making a pull request

---

## Getting Started

1. Fork this repository
1. Clone the forked repository to your computer
1. `cd` to the cloned directory
1. `code .` to open the repo in VSCode
1. When you are done, commit and push your work to your forked copy
1. Make a pull request on github against the original repo

## Instructions

For problems 1 and 2, write your answer in a comment (comments start with `//`) immediately below the line of code.

Example:

```js
2 + 2
// number, 4
```

For problems 3-5, fill out the existing table or create a new one. See the [table syntax guide](https://www.markdownguide.org/extended-syntax#tables)

For problems 6-10, see the example in problem 6 and write your own answer below each question.



## Problem One

What are the types of the following expressions and what do they evaluate to?

```js
17
//number, 17

1 + 2 * 3 + 4
//number, 11

800 / 80 / 8
//number, 1

400 > 200
//Boolean, True

1 !== 1
//Boolean, False

true || false
//Boolean, True

true && false
//Boolean, False

20 % 6
//number, 2

"a" + "b"
//Strings, "ab"

```

## Problem Two

What will the following return?

```js
typeof 4
//number

typeof "hello"
//strings

typeof true
//Booleans

2 === 1 || 3 === 4
//False

```

## Problem Three

Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B. You can fill out the last column. Don't worry about keeping the spacing exact.

| A     | B     | A && B |  A ll B   |
| ----- | ----- | ------ | ---------- |
| true  | true  | true   | True |
| false | true  | false  | True |
| true  | false | false  | True |
| false | false | false  | False|

## Problem Four

Create a truth table for the expression !A && !B. 
//Bang A && Bang B

For reference, here is a truth table for the expression A && !B. You can fill out the last column. Don't worry about keeping the spacing exact.

| A     | B     | !B    | A && !B | !A && !B |
| ----- | ----- | ----- | ------- | -------- |
| true  | true  | false | false   | False    |
| false | true  | false | false   | False    |
| true  | false | true  | true    | False    |
| false | false | true  | false   | True     |

## Problem Five

Create a truth table for the expression !(A || B).
 A      | B     | !B    |!(A || B)| 
| ----- | ----- | ----- | ------- | 
| true  | true  | false | false   |
| false | true  | false | false   |
| true  | false | true  | false   | 
| false | false | true  | true    | 

## Problem Six

Write a step-by-step evaluation for the following expression ([remember order of operations](https://www.mathsisfun.com/operation-order-pemdas.html)): `2 + 3 * 2 + 1`.
For reference, here is a exp of a step-by-step evaluation:

```js
1 + 2 + 3 + 4
3 + 3 + 4
6 + 4
10

/*
 2 + 3 * 2 + 1
 2 + 6 + 1
 8 + 1
 9  
 number, 9  
 */
```

## Problem Seven

Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.

```js
/* 4 / 2 + 8 / 4
   2 + 8 / 4
   2 + 2
   4
   number, 4
*/
```
## Problem Eight

Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
```js
/* 'ca' + 'ter' + 'pi' + 'llar'
   'cater' + 'pi' + 'llar'
   'caterpi' + 'llar'
   'caterpillar'
   string 'caterpillar'
   Strings
   */
```

## Problem Nine

Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
```js
/* 2 * 4 === 8 && 'car' + 'pool' === 'carpool'
   8 === 8 && 'car' + 'pool' === 'carpool'
   True && 'car' + 'pool' === 'carpool'
   True && 'carpool' === 'carpool'
   True && True
   True
Booleans
*/
```

## Problem Ten

Write a step-by-step evaluation for the following expression: `'1' + '2' + '3' - '1'`.
```js
/* '1' + '2' + '3' - '1'
   '12'+ '3' - '1' 
   '123' - '1'
   '122'
String
*/
```
