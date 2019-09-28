# Values, Types & Operators Exercises

Zones-MacBook-Air:~ zone126$ cd PursuitLabUnit1
Zones-MacBook-Air:PursuitLabUnit1 zone126$ mkdir JSValuesTypesOperators
Zones-MacBook-Air:PursuitLabUnit1 zone126$ cd JSValueTypesOperators
bash: cd: JSValueTypesOperators: No such file or directory
Zones-MacBook-Air:PursuitLabUnit1 zone126$ JSValuesTypesOperators
bash: JSValuesTypesOperators: command not found
Zones-MacBook-Air:PursuitLabUnit1 zone126$ cd JSValuesTypesOperators
Zones-MacBook-Air:JSValuesTypesOperators zone126$ git clone  https://github.com/helisian/values_types_operators_assignment.git
Cloning into 'values_types_operators_assignment'...
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 13 (delta 0), reused 1 (delta 0), pack-reused 9
Unpacking objects: 100% (13/13), done.
Zones-MacBook-Air:JSValuesTypesOperators zone126$ ls
values_types_operators_assignment
Zones-MacBook-Air:JSValuesTypesOperators zone126$ cd values_types_operators_assignment
Zones-MacBook-Air:values_types_operators_assignment zone126$ git status
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
Zones-MacBook-Air:values_types_operators_assignment zone126$ git add.
git: 'add.' is not a git command. See 'git --help'.

The most similar command is
        add
Zones-MacBook-Air:values_types_operators_assignment zone126$ git add .
Zones-MacBook-Air:values_types_operators_assignment zone126$ git status
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
Zones-MacBook-Air:values_types_operators_assignment zone126$ ls
README.md
Zones-MacBook-Air:values_types_operators_assignment zone126$ code . README.md
Zones-MacBook-Air:values_types_operators_assignment zone126$ 


1. What are the types of the following expressions and what do they evaluate to, and why?
* `17`
* `1 + 2 * 3 + 4`
* `800 / 80 / 8`
* `400 > 200`
* `1 !== 1`
* `true || false`
* `true && false`
* `20 % 6`
* `'a' + 'b'`

17 // typeof 17 --> Number. Prints as 17
1 + 2 * 3 + 4 //typeof (1+2*3+4) --> Number. Prints as 11
800 / 80 / 8 //typeof (800/80/8) --> Number. Prints as 1.25
400 > 200 // typeof (400>200) --> Boolean. Prints as True
1 !== 1 //typeof (1!==1) --> Boolean. Prints as False
true || false //typeof --> Boolean. Prints as True
true && false // typeof --> Boolean. Prints as False
20 % 6 // typeof --> Number. Prints as 2
'a' + 'b' // typeof --> String. Prints as ab

2. What will the following return?
* `typeof 4`
*  `typeof 'hello'`
*  `typeof true`
* `2 === 1 || 3 === 4`

typeof 4 // Prints Number
typeof 'hello' // Prints String
typeof true // Prints Boolean
2 === 1 || 3 === 4 // False || False --> Prints as False

3. Create a truth table for the expression A || B.

For reference, here is a truth table for the expression A && B:

|   A   |   B   | A && B | 
|-------|-------|--------|
| true  | true  | true  |
| false | true  | false |
| true  | false | false |
| false | false | false | 

|   A   |   B   | A || B | 
|-------|-------|--------|
| true  | true  | true  |
| false | true  | true |
| true  | false | true |
| false | false | false | 

4. Create a truth table for the expression !A && !B.

For reference, here is a truth table for the expression A && !B:

|   A   |   B   |   !B   | A && !B | 
|-------|-------|--------|--------|
| true  | true  | false  | false |
| false | true  | false  | false |
| true  | false | true   | true  |
| false | false |  true  | false | 

|   A   |   B   |   !A   |  !B   | !A && !B | 
|-------|-------|--------|------ |----------|
| true  | true  | false  |false  |  false   |
| false | true  | true   |false  |  false   |
| true  | false | false  |true   |  false   |
| false | false | true   |true   |  true    | 

5. Write a step-by-step evaluation for the following expression (remember order of operations): `2 + 3 * 2 + 1`.
  For reference, here is a exp of a step-by-step evaluation: 
  ```js
  1 + 2 + 3 + 4  
      3 + 3 + 4
          6 + 4
              10
  ```
  --> 2 + 6 + 1
  --> 8 + 1
  --> 9

 6. Write a step-by-step evaluation for the following expression (remember order of operations): `4 / 2 + 8 / 4`.
 
--> 2 + 8 /4
--> 2 + 2
--> 4

 7. Write a step-by-step evaluation for the following expression: `'ca' + 'ter' + 'pi' + 'llar'`.
 
--> "cater" + "pi" + "llar"
--> "caterpi" + "llar"
--> "caterpillar"

 8. Write a step-by-step evaluation for the following expression: `2 * 4 === 8 && 'car' + 'pool' === 'carpool'`.
  
2 * 4 === 8 && 'car' + 'pool' === 'carpool'
--> 8 === 8 && "carpool" === "carpool" //triple equality boolean
--> True && True
--> True

9. Create a truth table for the expression !(A || B).

|   A   |   B   |   !A   |  !B   | !(A || B) | 
|-------|-------|--------|------ |----------|
| true  | true  | false  |false  |  false   |
| false | true  | true   |false  |  true    |
| true  | false | false  |true   |  true    |
| false | false | true   |true   |  true    | 

10. Write a step-by-step evaluation for the following expression: '1' + '2' + '3' - '1'.

"1" + "2" + "3" - "1"
--> "12" + "3" - "1"
--> "123" - "1" //type conversion to number
--> 122