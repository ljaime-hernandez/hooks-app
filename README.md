# Hooks App

Webapp link: https://ljaime-hernandez.github.io/hooks-app/

Webapp designed the basic use of several hooks included on the React library which allowed me to have
a better understanding on how to render components and functions accordingly, how to separate reusable 
functions (helpers) in the code and the reasons to do so, how to optimize the code to consume the less
amount of memory in the browser and several other features which will be explained in each component 
description, for further information please refer to each file which will contain additional comments 
clarifying the functionality of each of the hooks and components

## useState examples:

### CounterApp:

Created a setState with 3 values, destructured the first two to be rendered in the component
and did a button with a click event which would call the setState with a spread operator, so
i could modify just one of the counters without altering the value of both the second value
rendered on the screen and the third one set as default on the setState declaration.

### CounterWithCustomHook:

Created a custom hook located in the hooks folder which contains different functions on it, 
receives a number as an initial argument which we are able to modify using different functions.
we destructure the object retrieved from the useCounter hook for us to use it in this component
On the useCounter hook i included functions to increment, decrement and reset the counter, rendered
CounterWithCustomHook component.

## useEffect examples:

### SimpleForm:

Form used to display the functionality of the useEffect hook in several examples, taking the component,
the form and the input as examples to when the useEffect will get launched, additional description with
commentarized examples can be found in the file. Additional to it, i created a condition for a Message
component to be rendered when the value '123' is typed in the name input.

### Message:

Small component displaying the coordinates of the cursor on the screen whenever it moves within the page,
the useEffect does not have any dependency on it which will not restrict it to render the information, 
but it does have a removeEvent method for it to be unmounted when the condition from the previous component
is not fulfilled for this component to be displayed, otherwise the useEffect would trigger an error in the
console for memory leak.

### FormWithCustomHook:

Similar to the previous SimpleForm component, the FormWithCustomHook will render a form for us to post our 
input, this time using a custom hook called useForm (located in the hooks folder) which will assign the value 
to an object declared within the component. The hook will take the retrievable value of an onChange event 
related to the input name and will assign it to the input value, therefore returning it and assigning its value
to the object property.

## Multiple custom hooks example:

### MultipleCustomHooks:

This component use the previous useCounter hook developed to increase, decrease and reset a number value. 
In this component we will need just both the value and the increment function from it. The increment function is 
used on the button rendered on this component in a click event which will increase the counter by one, changing 
the state on the useFetch, which will therefore make a new fetch request as it makes a post to an API which
uses a number as ID, starting from number one. the result from the fetch will then be rendered on the screen
to display a quote and the author of the quote from a Breaking Bad API.

## useRef example:

### FocusScreen:

Short component used to display the functionality of the useRef hook, which i use in this scenario to assign an element
value on it and keep it as reference, then i just use it on a click event to focus the selection tab on the useRef value.

## useLayoutEffect example:

### LayoutEffect:

The useLayoutEffect works synchronously with the component, different to the useEffect which work asynchronously, means 
the useLayoutEffect will execute before the component is rendered, the useEffect can only be executed when the component
is rendered. In this scenario, i display the an object before and after a quote is being retrieved from the useFetch 
hook, so we can clearly see how the phrase element attributes change with each new quote.

## useCallback and useMemo examples:

### Memorize:

The component renders a value into the 'Small' component, when the value in the Small component remains the same, the memo
method will help us to stop rendering it to avoid extra memory usage, if the memo were not to be used in the function, 
its elements would be mounted and dismounted every time theres a change on any of its references.

### MemoHook:

Used the useMemo hook with a counter dependency ([counter]), it will allow us to call the IterationsExecuted helper used 
to display a number in the console for as many counter number value we have, and will only be launched again when the 
counter is modified. This will allow us to avoid a relaunch of the IterationsExecuted helper whenever any other element 
on the component is rendered again (as demonstrated with the show/hide button), but only when the counter is changed 
and nothing else.

### CallBackHooks:

the useCallback hook will keep the function used on it in memory, means that the function wont render over and over, 
allowing us to reduce the memory usage (different to declaring the function within the component).

### ParentMemo and ChildMemo:

Simple component exclusively created to test my knowledge in useCallback and memo.

## useReducer examples:

### TodoApp:

uses a useReducer hook, customized with a todoReducer function which i created to have a better understanding of its
functionality, this component was divided in several others for modulation and optimization, the component will
receive a task as a string and will add it to an array of objects, which will be saved in the localStorage of the
browser, the userReducer will NOT modify the actual object, but will either delete or add new objects to an existing
array. Every action done to the array will go through a dispatch function, connecting the component to a reducer hook,
all done accordingly for us to add or modify additional actions in the future if needed. Further information of its
child components and functionality can be found on each file, hoping it clarifies the code and serve as reference
to anyone who wants to learn from it

## useContext examples:

### MainApp, AppRouter, "Screen" components and UserContext:

on this component i demonstrate how a Router component (exported through the installation of a  react-router-dom 
dependency) works and how it allow us to, in this case, do a small demo for a SPA (Single Page Application).
The NavBar is a custom nav component which will include links to our different components and additional features 
explained on it.
The Routes component is an export brought from the react-route-dom dependency, which will allow us to handle the 
different routes contained in this folder, separated on different components.
The Route component is also an export from react-route-dom, used solely to handle the path leading towards single 
components, each route will render an specific component described on its element attribute, but i also created an 
additional route (the last one) which will handle any additional route written by the user which does not lead to 
any of the components created on this context.

The useState in the MainApp component is created just so we have a main source from where to retrieve the main user 
information, given as well with the setUser function, which both will be passed as arguments to our custom UserContext 
component.
The UserContext then will be the middle component from which the rest of the "Screen" components will retrieve the main 
user information for them to render, create or reset the user information, according to its description.
For that to work we have to encapsulate the main AppRouter component with the context, as the context will be the 
"father" component containing the main information as described above.


### dependencies:

- enzyme
- enzyme-to-json
- jest
- react
- react-hooks
- react-router-dom
- bootstrap (CDN)