# Values, Types & Operators Exercises

## Problem One

What are the types of the following expressions and what do they evaluate to, and why?

* `17`
```
number
it is an integer
```
* `1 + 2 * 3 + 4`
```
11
javascript follows PEMDAS (2 * 3 = 6, 6 + 1 = 7, 7 + 4 = 11)
```
* `800 / 80 / 8`
```
1.25
Same as above (800 / 80 = 10, 10 / 8 = 1.25)
```
* `400 > 200`
```
true
> is checking the truth of the above statement. 400 is greater than 200 so the statement returns true
```
* `1 !== 1`
```
False
!== checks the equality of the above statement. 1 === 1, so the statement returns false (because it's checking if it is not equal)
```
* `true || false`
```
True
If one true is within an || (OR) statement it returns true
```
* `true && false`
```
False
An && (AND) statement must be equal on all sides for it to return true. True !== False.
```
* `20 % 6`
```
2
% returns the remainder after dividing the two numbers. 20 / 6 = 3 with a remainder of 2. So 2 is the returned value
```
* `'a' + 'b'`
```
"ab"
The plus sign adds both strings to condense them into one single string
```
## Problem Two

What will the following return?

* `typeof 4`
```
number
```
*  `typeof 'hello'`
```
string
```
*  `typeof true`
```
boolean
```
* `2 === 1 || 3 === 4`
```
False
```

## Problem Three

Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:



|   A   |   B   | A && B | 
|-------|-------|--------|
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false | 

```
|   A   |   B   | A || B | 
|-------|-------|--------|
| true  | true  | true  |
| false | true  | true  |
| true  | false | true  |
| false | false | false | 
```


## Problem Four

Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:



|   A   |   B   |   !B   | A && B | 
|-------|-------|--------|--------|
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false | 

```
|   A   |   B   |   !A   |   !B   | !A && !B | 
|-------|-------|--------|--------|--------|
| true  | true  |  false |  false |  false |
| false | true  |  true  |  false |  false |
| true  | false |  false |  true  |  false |
| false | false |  true  |  true  |  true  | 
```

## Problem Five

Create a truth table for the expression !(A || B).

```
|   A   |   B   | !(A || B) | 
|-------|-------|-----------|
| true  | true  |   false   |
| false | true  |   false   |
| true  | false |   false   |
| false | false |   true    | 
```

## Problem Six

Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation: 
  ```js
  1 + 2 + 3 + 4  
      3 + 3 + 4
          6 + 4
              10
  ```
  
 ## Problem Seven
 
 Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
 
 ## Problem Eight
 
 Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 
 ## Problem Nine
 
 Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
 
 ## Problem Ten
 
  Write a step-by-step evaluation for the following expression: `'1' + '2' + '3' - '1'`.

  
