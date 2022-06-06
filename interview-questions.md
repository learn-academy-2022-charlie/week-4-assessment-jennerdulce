# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What are props in React?

  Your answer: `props` in React refers to data passed down from a parent component to a nested component. Passing data as a props gives you access to this data from a child component, this data can be used with the syntax `this.props` which is essentially an object. This object has a various other methods and properties, but most importantly custom properties with custom names that a developer can create. From experinece, I have used props on components to make them dynamic as well as passing state and methods from the main App component to its nested children. From there I use the `this.props` object to obtain the information I have passed from the parent component to the child component. For example, I have used the methods that have been passed in as props to alter the state based on user interaction (DOM Events / event handlers)

  Researched answer:`props` (or properties) in React refers to data passed down from a one component to another. Moreso, this passing of data is unidirectional passing from a PARENT component to a CHILD component and are "read only". This is useful and aids in overall functionalty in React. State may be passed as props where changes to this state is directly reflected. While also only rerendering / updating the information on specific parts of the web page without reloading the page to display the information; Passing data as a props gives you access to this data from a child component, this data can be used with the syntax `this.props` which is essentially an object. This object has a various other methods and properties, but most importantly custom properties with custom names that a developer can create. From experinece, I have used props on components to make them dynamic as well as passing state and methods from the main App component to its nested children. From there I use the `this.props` object to obtain the information I have passed from the parent component to the child component. For example, I have used the methods that have been passed in as props to alter the state based on user interaction (DOM Events / event handlers)

  - Reference: [React Props](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/react/props.md)



2. What is a DOM event?

  Your answer: The DOM `event` is a term used that represents an event object that is created when an interaction happens within the DOM / VDOM. In my expereince, I have worked with DOM events when working with `forms`. By utilizing form and input elements, you are able to pass in user data that can be used for a developers choosing. The `event` object contains user input and has many other properties that may be useful to the developer.

  Researched answer: The DOM `event` is a term used that represents an event object that is created when an interaction happens within the DOM / VDOM which can happen in many ways. Mouse clicks, hovering over items displayed on the screen, or inputting data on a form are all examples of DOM events. The DOM is constantly waiting and listening for changes which our web applications are designed to recognize and correspond accordingly. In my expereince, I have worked with DOM events when working with `forms`. By utilizing form and input elements, you are able to pass in user data that can be used for a developers choosing. The `event` object contains user input and has many other properties that may be useful to the developer.

  - Reference: [React Inputs and Events](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/react/inputs.md)



3. What is object-oriented programming? How is it different than functional programming?

  Your answer: Object-oriented programming is a programming paradigm that is based of classes and objects. Everything in an object-oriented programming language is an object in which each object behaves like the class that they derive from. Functional programming on the other hand is purely coding to complete a task.

  Researched answer:
  - OOP is the idea that you use objects to represent things that you want to program or things of the real world. Objects contain data that represents the object which can then be manipulated though METHODS which are functions that are bound to specific objects. Furthermore, OOP utilizes mutable data and handles data iterating (looping) through data.
  - Functional programming handles mutable data. Its mission is to maintain a logical and structural standpoint strictly for inputs and output. Functional programming avoids the manipulation of state and works with mutable data (data that cannot be changed). Its output is based on arguments that should always remain the same when given the same exact inputs. It is a straight and to the point type of programming that is made to execute specific tasks.

  - Reference: [ELI5: Object oriented vs. Functional programming](https://www.reddit.com/r/explainlikeimfive/comments/7f74ml/eli5_object_oriented_vs_functional_programming/)
  - Reference: [Functional Programming VS Object Oriented Programming (OOP) Which is better….?](https://medium.com/@shaistha24/functional-programming-vs-object-oriented-programming-oop-which-is-better-82172e53a526)




4. What is the difference between a Float and an Integer in Ruby?

  Your answer: Both are similar as they represent numbers. The biggest difference between Float in Integer is they are different classes. The Float class deals with numbers and decimal places that may come after. The Integer class represents an number that has no decimal places. I believe that any number is rounded down if a float is coerced to an integer.

  Researched answer: Both are similar as they represent real numbers. The biggest difference between Float in Integer is they are different classes. The Float class deals with numbers and decimal places that may come after.  The Integer class represents an number that has no decimal places aka whole numbers. I believe that any number is rounded down if a float is coerced to an integer. In my experience, I have used floats when precise data is needed, such as a cost or an average. I typically use Integers on every other occasion when less formal or non precise data is necessary.

  - Reference: [Understanding Data Types in Ruby](https://www.digitalocean.com/community/tutorials/understanding-data-types-in-ruby)
  - Reference: [Integers Floats](https://processing.org/examples/integersfloats.html#:~:text=Integers%20and%20floats%20are%20two,when%20more%20precision%20is%20needed.)



5. Ruby has an implicit return. What does that mean?

  Your answer: In JavaScript, when creating a method / function, the `return` keyword is used to output data from the function after the code within the function / method has been ran. From experience with Ruby, the term "implicit return" means that a function / method returns the last line of the code block by default with no `return` keyword needed. It is implied that the last line of the codeblock is what the developer will want to output.

  Researched answer: 
  - "Implicit Return" Ruby has an implicit return, which means the value of the last line of a method is automatically returned without using the keyword return."
  - This is a good example of I do not know what else to put on here. I feel like there is nothing much else to say about an implicit return given this resource and researching other sources. I also feel that I have also expressed my knowledge on Implicit Returns well.

  - Reference: [Ruby Methods](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/ruby/methods.md)



## Looking Ahead: Terms for Next Week

1. Instance Variable:
- Instance Variables are properties of an object. Data stored in an object is in the form of a property which is data about the object and methods that are actions that an object can do. Instance Variables can vary between object to object by passing in different arguments when instantiating an object. Doing so can create unique objects, similar objects, and duplicate objects.

- Reference: [avaScript — Object Oriented Programming using ES6](https://codeburst.io/javascript-object-oriented-programming-using-es6-3cd2ac7fbbd8?gi=36b799ed48a0#:~:text=Instance%20variables%20are%20nothing%20but,class%2C%20we%20need%20this%20keyword.)

2. PostgreSQL:
- PostgresSQL is an open source relational database, supporting SQL and JSON querying. Being the primary data store for many web, mobile, geospatial, and analytical applications as well as being compitaible with many of the popular coding languages, PostgresSQL is optimized and is easily able to support entities such as Start ups to large enterprises and is compatible and often used in conjunction with other relevant and popular software.

- Reference: [RWhat is PostgresSQL?](https://aws.amazon.com/rds/postgresql/what-is-postgresql/)

3. Ruby on Rails:
- Ruby on Rails makes building web applications easier and fun. Ruby on Rails is a server-side web application framework that is written in Ruby. Rails features a MVC (Model View Controller) framework that provides default structures for a database, web services, and web pages.
- I have worked with a different MVC framework called SpringMVC when developing webpages using Java. In a nutshell.. MVC says "Just give me the things that I need and that I ask for, and I will build out a great website for you :D"

- Reference: [Ruby on Rails Introduction](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/rails/rails-intro.md)

4. ORM:
- Using raw SQL coding techniques can be hectic and timeconsuming. Learning everything of a database from the ground up may take hours on end to learn along with handling confusion or not understanding exactly how it works. Object-relational mapping or ORM is a technique that ties a language and a database together. It is a layer that is implemented into an application to make database interactions much simpler. Although they are popular as well as controversial, many developers vouge for ORM as they increase productivity, improve application design, and make the overall application maintainable. ORM works by giving developers tools as well as their general functionality without having to understand all of the intricacies and underlying details of the code. This idea is similar to built in methods. We use them but we do not know exactly how they are working but they work in our favor and do what we need them to do! This concept will be used when performing CRUD actions on our database

- Reference: [Understanding Object-Relational Mapping: Pros, Cons, and Types](https://www.altexsoft.com/blog/object-relational-mapping/#:~:text=Object%2Drelational%20mapping%20(ORM),data%20without%20the%20OOP%20paradigm.)

5. Active Record:
- In ORM there are two different strategies: the active record pattern and the data-mapper pattern. The Active record pattern is a strategy that maps data within a structure of objects. This allows developers to manage data by using classes and structures. However, this type of strategy has it pros and cons, such that the database structure is tightly connected to the code base.

- Reference: [Understanding Object-Relational Mapping: Pros, Cons, and Types](https://www.altexsoft.com/blog/object-relational-mapping/#:~:text=Object%2Drelational%20mapping%20(ORM),data%20without%20the%20OOP%20paradigm.)