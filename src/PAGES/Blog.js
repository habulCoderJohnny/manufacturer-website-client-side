import React from 'react';

const Blog = () => {
    return (
        <div className='p-10'>
            <div className=''>
                <h2 className="text-2xl my-5">1. How will you improve the performance of a React application?</h2>
                <div>
                    <p className='text-2xl font-bold'>Ans:</p>
                    <li>a. Using Immutable Data Structures</li>
                    <li>b. Function/Stateless Components and React.PureComponent</li>
                    <li>c. Multiple Chunk Files</li>
                    <li>d. Using Production Mode Flag in Webpack</li>
                    <li>e. Dependency optimization</li>
                    <li>f. Avoid Inline Function Definition in the Render Function.</li>
                    <li>g. Throttling and Debouncing Event Action in JavaScript
                        Event trigger rate is the</li>
                    <li>h. Avoiding Props in Initial States</li>
                    <li>i. Spreading props on DOM elements</li>
                    <li>j. Use Reselect in Redux to Avoid Frequent Re-render</li>
                    <li>k.  Avoid Async Initialization in. etc</li>
                </div>
            </div>
            <div className=''>
                <h2 className="text-2xl my-5">2. What are the different ways to manage a state in a React application?</h2>
                <div>
                    <p className='text-2xl font-bold'>*The four kinds of react state to manage</p>
                    <ol type='a'>
                        <li>1.Local state</li>
                        <li>2.Global state</li>
                        <li>3.Server state</li>
                        <li>4.URL state</li>
                    </ol>
                    <p className='text-2xl font-bold'>Local state</p>
                    <p>Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.</p>
                    <p>useState is the first tool you should reach for to manage state in your components.</p>
                    <p>It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).</p>
                    <p className='text-2xl font-bold mt-10'>Global state</p>
                    <p>You will reach a point in your application where patterns like “lifting state up” and passing callbacks down to update your state from components lead to lots and lots of props.</p>
                    <p>What do you do if you want to update a component’s state from basically anywhere in your app? You turn it into global state.</p>
                    <p>To manage it, however, you should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state.</p>
                </div>
            </div>
            <div className='my-5'>
                <h2 className="text-2xl my-5">3. How does prototypical inheritance work?</h2>
                <div>
                    prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.
                </div>
            </div>
            <div className='my-5'>
                <h2 className="text-2xl my-5">4. Why you do not set the state directly in React.</h2>
                <div>
                    <p>In React, whenever a component is rendering either in theMounting phase or in Updating Phase, it always renders all the components that are in its tree.</p>
                    <p> Stateless functional component is a component that has no state or constructor or any lifecycle hooks and are fully controlled by their parents. They only render a react component.</p>
                </div>
            </div>
            <div className='my-5'>
                <h2 className="text-2xl my-5">5. What is a unit test? Why should write unit tests?</h2>
                <div>
                    <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.</p>
                    <p>Unit testing involves only those characteristics that are vital to the performance of the unit under test. This encourages developers to modify the source code without immediate concerns about how such changes might affect the functioning of other units or the program as a whole. Once all of the units in a program have been found to be working in the most efficient and error-free manner possible, larger components of the program can be evaluated by means of integration testing. Unit tests should be performed frequently, and can be done manually or can be automated.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;