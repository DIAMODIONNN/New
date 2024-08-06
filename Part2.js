/*
    Data Types Intro
    - String
    - Number
    - Array => Object
    - Object
    - Boolean
*/

// console.log("Osama Mohamed");
// console.log(typeof "Osama Mohamed");
// console.log(typeof 5000);
// console.log(typeof 5000.99);
// console.log(typeof [10, 15, 17]);
// console.log(typeof { name: "Osama", age: 17, country: "Eg" });
// console.log(typeof true);
// console.log(typeof false);
// console.log(typeof undefined);
// console.log(typeof null);


// document.write(myparagraph)


/*
    Variables Intro
    - What Is Variable ?
    - Why We Use Variables ?
    - Declare A Variable And Use
    - Syntax ( Keyword | Variable Name | Assignment Operator | Variable Value )
    - Variable Without Var
    - Multiple Variables In The Same Line
    - Id And Global Variable
- Loosely Typed vs Strongly Typed
*/

// var user = "Sayed";
// console.log(user);

/*
    Identifiers
    - Name Conventions And Rules
    - Reserved Words
*/

// var userName = "Sayed";

// console.log(userName);

/*
    Var
    - Redeclare (Yes)
    - Access Before Declare (Undefined)
    - Variable Scope Drama [Added To Window] ()
    - Block Or Scope Function

    Let
    - Redeclare (No => Error)
    - Access Before Declare (Error)
    - Variable Scope Drama ()
    - Block Or Scope Function

    Const
    - Redeclare (No => Error)
    - Access Before Declare (Error)
    - Variable Scope Drama ()
    - Block Or Scope Function
*/




/*
    String Syntax + Character Escape Sequences
    \ Escape + Line Continue
    \n
*/

// console.log('Elzero Web "School"');
// console.log("Elzero Web 'School'");
// console.log("Elzero Web \"School\"");
// console.log('Elzero \\ Web \'School\'');
// console.log("Elzero \
// Web \
// School");
// console.log("Elzero\nWeb\nSchool");

/*
    Concatenation
*/

// let a = "We Love";
// let b = "JavaScript";

// document.write(a + " " + b);

// console.log(a, b); // put automatically a space between them


/*
    Template Literals (Template Strings)
*/

// First Example

// let a = "We Love";
// let b = "JavaScript";
// let c = "And";
// let d = "Programming";

// console.log(a = " \"\" " + b +
// "\n" + c + " " + d);

// console.log(`${a} "" '' \\ ${b}
// ${c} ${d}`);

// Second Example

// let title = "Elzero";
// let desc = "Elzero Web School";

// let markup = `
// <div class="card">
//     <div class="child">
//         <h2>${title}</h2>
//         <p>${desc}</p>
//     </div>
// </div>
// `;

// let name = 'jack';
// let othername = 'Isel'
// let hamed = `
// <div>
//     <div>
//         <p>What is your name??</p>
//         <p>${name}</p>
//         <p> Fuck you ${name}</p>
//         <p>What is your ${othername}??</p>
//         <p>Its ${othername}</p>
//         <p>Fuck you ${othername}</p>
//     </div>
// </div>
// `


// document.write(hamed);

/*
    Arithmetic Operators
    + Addition
    - Subtraction
    * Multiplication
    / Division
    ** Exponentiation (ES7)
    % Modulus (Division Remainder)
    ++ Increment [ Post / Pre ]
    -- Decrement [ Post / Pre ]
*/

// console.log(10 + 20);
// console.log(10 + "Osama");

// console.log(10 - 20);
// console.log(10 - "Osama"); // NaN
// console.log(typeof NaN); // NaN

// console.log(10 * 20);
// console.log(10 * -20);

// console.log(20 / 5);
// console.log(20 / 3);

// console.log(2 ** 4);
// console.log(2 * 2 * 2 * 2);

// console.log(10 % 2);
// console.log(11 % 2); // Remove 1


/*
    - + Unary Plus [Return Number If Its Not Number]
    - - Unary Negation [Return Number If Its Not Number + Negates It]
    Tests
    - Normal Number
    - String Number
    - String Negative Number
    - String Text
    - Float
    - Hexadecimal Numeral System => 0xFF
    - null
    - false
    - true
*/

// console.log(+100);
// console.log(+"100");
// console.log(+"-100");
// console.log(+"Osama");
// console.log(+"15.5");
// console.log(+0xff);
// console.log(+null);
// console.log(+false);
// console.log(+true);

// console.log(-100);
// console.log(-"100");
// console.log(-"-100");
// console.log(-"Osama");
// console.log(-"15.5");
// console.log(-0xff);
// console.log(-null);
// console.log(-false);
// console.log(-true);

// console.log(Number("100"));

// console.log(Number("osama"))



/*
    Type Coercion (Type Casting)
    - +
    - -
    - "" - 2
    - false - true
*/

// let a = "100";
// let b = 20;
// let c = true;

// console.log(+a + b + c);

/*
    Assignment Operators
*/

let a = 10;

a = a + 20;

a = a + 70;

a += 100; // a = a + 100

a -= 50; // a = a - 50

a /= 50; // a = a / 50


/* Advanced KNOWLEDGE 

You can Define a varible with var or without putting it

*/

