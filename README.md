1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:  getElementById, getElementsByClassName, querySelector, and querySelectorAll are JavaScript DOM methods that are used to find and select elements from the HTML DOM.
      Here is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll:
      1. getElementById () : getElementById() is used to find an element from the HTML DOM using a specific id. And the id is always unique.
      2. getElementsByClassName() finds multiple elements from the HTML DOM using a class name.
      3. querySelector() is used to find the first matching element using a CSS selector.
      4. querySelectorAll() is used to find all matching elements using a CSS selector.

2. How do you create and insert a new element into the DOM?
Ans: To create and append an element, first select its parent element, then create a new child element, set its innerText or innerHTML inside it, and finally append the child element to the parent element.

3. What is Event Bubbling? And how does it work?
Ans: Event bubbling is a behavior of the JavaScript DOM event system in which an event moves from the child element up to the parent element.

4.What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation is a technique of handling events of child elements using a parent element.
It is very useful because Fewer event listeners are needed,less memory usage, newly added elements work automatically, and the code becomes smaller and easier to manage.

5.What is the difference between preventDefault() and stopPropagation() methods?
ans: Here is the difference between preventDefault() and stopPropagation() methods :
     1.preventDefault(): preventDefault() is a JavaScript method that stops the browser’s default behaviour, meaning it prevents an HTML element from performing its default action.
     2.stopPropagation(): stopPropagation() is a JavaScript method that stops event bubbling or capturing. In other words, it prevents an event from propagating to parent elements when it occurs on an element.
