![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | React IronNutrition

## Introduction

You just realized that since the beginning of the bootcamp, your diet is not healthy and it may have an impact on your health (and productivity), now and in the long term.

To take care of the food you eat, you decided to create a nutrition app that will track everything you eat!

<p align="center">
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/lab-react-ironnutrition-3.gif" alt="Example - render FoodBox component in a list" />
</p>

## Setup

- Fork this repo
- Clone the forked repo
- Open the LAB and start:

  ```bash
  cd lab-react-ironnutrition
  npm install
  npm start
  ```

## Submission

- Upon completion, run the following commands:

  ```bash
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create a Pull Request so that your TAs can check your work.

## Getting Started

Clean the `App.js` component so that it has the following structure:

```jsx
// src/App.js
import './App.css';

function App () {
  return <div className="App"></div>;
}
export default App;
```

<br>

## Instructions

### Iteration 0 | Setup

#### Ant Design Installation

We will use [Ant Design](https://ant.design/) component library for the design.:sunglasses:

```sh
npm install antd
```

<br>

#### Ant Design Components

During the LAB, we will be using a set of simple Ant Design components that provide basic styling.

Before using any Ant Design component, you first have to import it from the `antd` package. You must import a component in each file where you intend to use it. Example:

```jsx
// EXAMPLE
// To start using the pre-made Ant Design components we must first import them:
import { Card, Row, Col, Divider, Input, Button } from "antd";

function Example() {
  // After importing the components we can render them directly:
  return (
    <div>
      <Row>
        <Col>
          <Divider>Fancy Input</Divider>
          <Input value={""} onChange={() => {}} />
        </Col>

        <Col>
          <Card title={"Fancy Card"}>
            <Button onClick={() => {}}>Fancy Button</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
```

<br>

#### Import a JSON

For now, we will be working on the `App.js` file. In the later steps, you can refactor the app and split it into multiple components. Import the array of foods from the `foods.json` file to `App.js`.

```js
import foods from "./foods.json";
```

<br>

#### About the design

If you struggle with the design, you can find static examples of what is expected inside the `style-guide/` folder.

So let's start!

<br>

### Iteration 1 | Render a Simple List

Now that you have the `foods.json` imported in `App.js` it is time to save it in a state variable. Once you have done that, map over the state variable and render a simple list that displays food names. Use the following snippet for the list items:

```jsx
<div>
  <p> FOOD_NAME_HERE </p>
  <img src="FOOD_IMAGE_HERE" width={0} />
</div>
```

![Example - Simple Food List](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/lab-react-ironnutrition-1.png)

<br>

### Iteration 2 | Create the `FoodBox` component

Create a new component named `FoodBox` that takes the prop `food`, which is an object. It should display the card with food information coming from the `food` prop. To render the content, use the structure provided in the file `style-guide/FoodBox.example.js`.



Once done, test it by rendering a single instance of the component in `App.js`. You can pass it the object with food info like this:

```jsx
<FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} />
```

**Expected result:**

![Example - Single "FoodBox" Component](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/lab-react-ironnutrition-2.png)

<br>

### Iteration 3 | Render a List of `FoodBox` Components

After creating the `FoodBox` component, use it in `App.js` to render the food *list*. Instead of mapping over the foods array and rendering only the food names, render the `<FoodBox />` component. When rendering the `FoodBox`  component, remember to pass the food object as a prop.

Once you are done rendering the `FoodBox` in the list, your app should display the following content:

![Example - render FoodBox component in a list](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/lab-react-ironnutrition-3.gif)

<br>

### Iteration 4 | Add new food

Create a new controlled component named `AddFoodForm`, used to add new foods. The component should contain a form with four input elements for `name` , `image` , `calories` and `servings`.

The component should render use the AntDesign component `Input` instead of the the `input` tag. The AntDesign `Input` component uses the same syntax as the regular `input` tag. Example:

```jsx
// HTML <input /> tag
<input value={} type="text" onChange={} />
```

```jsx
// Ant Design <Input /> component
<Input value={} type="text" onChange={} />
```

The component should be rendered in the `App.js`.

The food should be added to the list when the user clicks submit.

**Hint:** To add new food to the food array that is in the state of the App component, you must pass a function through the props.

![Example - Add food component](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/lab-react-ironnutrition-4.gif)

<br>

### Iteration 5 | Implement search bar

Create a `Search` component to search through and filter the list of food items displayed.

![Example - Add food component](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/lab-react-ironnutrition-5.gif)

<br>

### Iteration 6 | Create a delete button

Your `FoodBox` component has a delete button. Implement the delete functionality so that the item gets removed from the food list when a user clicks on the delete button.

**Hint:** To update the food array that is in the state of the `App` component, you will need to pass a function through the props.

![Example - Add food component](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/lab-react-ironnutrition-6.gif)

If you are not sure how to create responsive columns with Ant Design, you can check the example provided in the Ant Design [documentation](https://ant.design/components/grid/#components-grid-demo-playground).

<br>

### Iteration 7 | Bonus | Hide the Add Food Form

There are quite a few components displaying in the app. Implement a hide/show button that, when clicked, hides/shows the `AddFoodForm`. 

When the form is showing, the button should display the message <kbd>Hide Form</kbd>`. When the form is hidden it shoud display <kbd>Add New Food</kbd>.

![Example - Hide Add food component](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/lab-react-ironnutrition-7.gif)

<br>

### Iteration 8 | Bonus | Display a Feedback Message

Display a Feedback message to the user when the food array is empty. Once the user deletes all of the items from the list, the following message should be displayed:

![Example - Add food component](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/lab-react-ironnutrition-8.gif)



Happy coding! :heart:

<br>

## FAQs

<details>
  <summary>I am stuck and don't know how to solve the problem or where to start. What should I do?</summary>

  <br>

  If you are stuck in your code and don't know how to solve the problem or where to start, you should take a step back and try to form a clear question about the specific issue you are facing. This will help you narrow down the problem and come up with potential solutions.

  For example, is it a concept that you don't understand, or are you receiving an error message that you don't know how to fix? It is usually helpful to try to state the problem as clearly as possible, including any error messages you are receiving. This can help you communicate the issue to others and potentially get help from classmates or online resources. 

  Once you have a clear understanding of the problem, you will be able to start working toward the solution.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I got the error: "Cannot find module 'Node.js'". How can I resolve it?</summary>

  <br>

  The error "Cannot find module" in a Node.js application means that the module you are trying to import or use does not exist in your project or cannot be found by Node.js.

  There are a few things you can try to resolve the issue:

  1. **Dependencies are not installed**: Make sure that all dependencies are installed.
   
   To do this, run the command `npm install` in the root folder of your project.

   This will install all of the dependencies listed in the project's `package.json` file, and ensure that all of the modules that your Node'js application requires are available.

  2. **Module is not installed**: Make sure that the *package* you are trying to use is listed in the project's `package.json` and that it is installed.

   To do this, run the command `npm install <package_name>`, replacing the `<package_name>` with the name of the package.

   This will add the package to the list of dependencies in the `package.json` file, and install it in the project.

  3. **Module is not imported:** Make sure that you've imported the module/package correctly and that the `import` statement is spelled correctly and available in the correct place in your code.

  4. **Wrong file path:** If you are importing another file as a module, make sure that the file you are trying to *import* is located in the correct folder and that you are using the correct file path.

  5. **Wrong module/package name:** Check the spelling of the package name you are trying to import.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I got the message: "Something is already running at ... Would you like to run the app at another port instead? [Y/n]". What should I do?</summary>

  <br>

  This message means that another process is already using the specified port. This could be another instance of your React app, or it could be another application that is using that port.
  To resolve this, you can change the port your React app is running on by typing Y when prompted. This will kill the process and automatically start the server on another port.
  Another approach is to manually terminate the process using the port in question and then try running the app again.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I got the warning in my React app:" 'variable' is assigned a value but never used: no-unused-vars". What should I do?</summary>

  <br>
  
  This warning is a linting error thrown by a linting tool in your React project, and it is warning you that the variable is created, but that it is never being used in your code.

  To resolve this issue, you can either use the variable in your code, or you can simply remove the variable if you don't need it.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I got the warning: "Each child in a list should have a unique 'key' prop". How can I resolve it?</summary>

  <br>
  
  The warning *"Each child in a list should have a unique “key” prop"*  means that you are trying to render a list of elements, but one or more elements is missing the `key` prop.

  To fix this, add a `key` prop to each element you return from the `map()` when rendering the list. The key should be a unique identifier for that element, such as an item ID or the id of the document from the database.

  For example, if you have an array of objects with the following structure:

  ```js
const projects = [
    { id: "127fae", name: "EatBCN", stack: "React, Express" },
    { id: "985afw", name: "Levels", stack: "React, Express" },
    { id: "347eef", name: "IronClub", stack: "React, Java" }
  ];
  ```

  <br>

  Inside your component, you would render the list in the following way:

  ```jsx
  {
    projects.map((el) => {
      return (
        <div key={el.id}>
          <h3>{project.name}</h3>
          <p> Tech Stack: {project.stack} </p>
        </div>
    })
  }
  ```

  In the above example, the objects in the `projects` array all have a common property `id`,  which is a unique id string, and therefore we can use it to set the `key` prop.

  When creating lists we must always assign the `key` prop to the outermost (enclosing) element returned from the `map()`, in this case the `div`. We are setting the `key` prop to each `div` element we render in the list.

  **Important:** You should not use *index* of the `map` as *key*. This is considered an *anti-pattern* that may lead to unpredictable results.

  <br>

  For more information, check: [React Docs - Rendering Lists](https://beta.reactjs.org/learn/rendering-lists#keeping-list-items-in-order-with-key)

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>How to render a list of elements from an array in a React component?</summary>

  <br>

  To render a list of elements from an array in a React component, you can use the method `map()` to loop over the `projects` array and return JSX elements to be rendered. 

  To render a filtered list, where some items are skipped, you can use the `filter()` method.

  Each element returned should have a *unique* `key` prop assigned to them. It's important to note that the `key` prop should always be assigned to the outermost (enclosing) element returned from the `map()`.

  Here is an example of rendering a list of elements using the `map()` method:

  ```js
  const projects = [
    { id: "127fae", name: "EatBCN", stack: "React, Express" },
    { id: "985afw", name: "Levels", stack: "React, Express" },
    { id: "347eef", name: "IronClub", stack: "React, Java" }
  ]

  function ProjectList() {
    return (
      <div>
        {
          projects.map((el) => {
            return (
              <div key={el.id}>
                <h3>{el.name}</h3>
                <p>Tech Stack: {el.stack}</p>
              </div>
            )
          })
        }
      </div>
    )
  }

  export default ProjectList;
  ```

  In the above code example, we use `map()` inside of the component to loop over the `projects` array, and for each project, return a `div` element with the `project.name` and the `project.stack` as its contents. 

  Each object in the `projects` array contains a common property `id` which we use as the `key` prop. 

  The `key` prop must be set on the outermost element returned from the `map()`, in this case, the `div` element.

  **Important**: You should not use *index* of the `map` as *key*. This is considered an *anti-pattern* that may lead to unpredictable results.

  For more information, check: [React Docs - Rendering Lists](https://beta.reactjs.org/learn/rendering-lists#keeping-list-items-in-order-with-key) 

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>How to create a search bar in React?</summary>

  <br>

  To create a search bar, you need to create a controlled component following these steps:

  1. Import the `useState()` hook.
  2. Create a *state variable* for storing the search string.
  3. Add a `form` with the `input` field and the *submit* `button` used for typing in the query.
  4. Link the input `value` with the state variable.
  5. Create an *input handler* function to handle the input change.
  6. Link the *input handler* function with the input by adding the `onChange` listener.
  7. Create a *submit handler* function to handle what happens when the form is submitted.
  8. Link the *submit handler* function with the form by adding the `onSubmit` listener.

  <br>

  Here is an example of a search bar component created following the above steps:

  ```jsx
  // Import a use state hook
  import { useState } from "react";

  function SearchBar() {
    // Create a state variable to store the string from the input 
    const [searchQuery, setSearchQuery] = useState("");

    // Function to handle the form input change
    const handleInput = (e) => {
      setSearchTerm(e.target.value);
    };

    // Function to handle the form submission
    const handleSubmit = (e) => {
      // Prevent page reload on form submit
      e.preventDefault();
      // Do something with the search query string ...
      console.log("Search query: ", searchQuery);
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>Search</label>
        <input type="text" value={searchQuery} onChange={handleInput} />
        
        <button type="submit">Search</button>
      </form>
    )
  }

  export default SearchBar;
  ```

  In the above example, the `handleChange` function is called whenever the user types something into the `input` field and it updates the state variable `searchQuery` with the current value of the input field.

  The `handleSubmit` function is called when the user clicks on the submit button. When invoked, the `handleSubmit` function calls `e.preventDefault()` to prevent the page from refreshing and from here you can use the `searchTerm` state variable to send the value to another component or send it to the server.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>How to setup the React Router in my React app?</summary>

  <br>

  To set up the React Router in your React application, follow these steps:

  1. Install React Router package by running the following command from the root folder:

   ```bash
   npm install react-router-dom
   ```

  2. Import the `BrowserRouter` component in your app's entry point (usually `index.js`) and wrap your `<App />` component with it:

   ```jsx
   import { BrowserRouter as Router } from "react-router-dom";
   
   ReactDOM.render(
     <Router>
       <App />
     </Router>,
     document.getElementById('root')
   );
   ```

  3. Import the components `Routes` and `Route` in `App.js`:

   ```jsx
   import { Routes, Route } from "react-router-dom";
   ```

  4. Define the routes (pages) in your app using the components  `Routes` and `Route` component:

   ```jsx
   import { Routes, Route } from "react-router-dom";
   import HomePage from "./pages/HomePage";
   import AboutPage from "./pages/AboutPage";
    
   function App() {
     return (
       <div className="App">
         
         {/* Add <Route /> components between <Routes> </Routes>   */} 
         <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/about" element={<AboutPage />} />
         </Routes>
         
       </div>
     )
   }
    
   export default App;
   ```

   <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>How do I update a state variable in my React component? How do I use the useState hook in my React component?</summary>

  <br>

  To update a state variable in a React component, you should use the `useState` hook. This hook returns an array with two elements: the **current value** of the state variable and a **function to update it**. Here is an example of how to use `useState` to update the `count` state variable:

  ```jsx
  import { useState } from "react";

  function MyComponent() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
      setCount(count + 1);
    }

    return (
      <div>
        <button onClick={handleClick}> Increment </button>
        <p>Count: {count}</p>
      </div>
    )
  }
  ```

  In the above example, the `handleClick` function is called when the button is clicked, and it updates the `count` state variable by calling the `setCount` function with the new value: `setCount(count + 1)`. 
  The component will re-render every time a state variable gets updated.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I am getting an error: "not defined". How do I fix it?</summary>

  <br>

  The "ReferenceError: variable is not defined" error in JavaScript occurs when you try to access a variable or a function that has not been defined yet or is out of scope. 

  To fix the issue, check that you have defined the variable or function that you are trying to use and double-check the spelling to make sure you are using the correct name.

  In case the variable or a function is defined in another file, make sure that the file has been imported or loaded correctly.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I am unable to push changes to the repository. What should I do?</summary>

  <br>

  There are a couple of possible reasons why you may be unable to *push* changes to a Git repository:

  1. **You have not committed your changes:** Before you can push your changes to the repository, you need to commit them using the `git commit` command. Make sure you have committed your changes and try pushing again. To do this, run the following terminal commands from the project folder:

   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

   2. **You do not have permission to push to the repository:** If you have cloned the repository directly from the main Ironhack repository without making a *Fork* first, you do not have write access to the repository.
   To check which remote repository you have cloned, run the following terminal command from the project folder:

   ```bash
   git remote -v
   ```

  If the link shown is the same as the main Ironhack repository, you will need to fork the repository to your GitHub account first, and then clone your fork to your local machine to be able to push the changes.

  Note: You may want to make a copy of the code you have locally, to avoid losing it in the process.

  <br>

  [Back to top](#faqs)

</details>

