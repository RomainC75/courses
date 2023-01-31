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
- Clone this repo
- Open the LAB and start:

  ```bash
  $ cd lab-react-ironnutrition
  $ npm install
  $ npm start
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

function App() {
  return <div className="App"></div>;
}
export default App;
```

<br>

## Instructions

### Iteration 0 | Setup

#### Ant Design Installation

We will use [Ant Design](https://ant.design/) component library for the design. :)

```sh
$ npm install antd
```

To make the Ant Design styles available in the entire app, import Ant Design stylesheet in `index.js`:

```javascript
// src/index.js
import 'antd/dist/antd.css';
```

#### Ant Design Components

During the LAB, we will be using a set of simple Ant Design components that provide basic styling.

Before using any Ant Design component, you first have to import it from the `antd` package. You must import a component in each file where you intend to use it. Example:

```jsx
// EXAMPLE
// To start using the pre-made Ant Design components we must first import them:
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function Example() {
  // After importing the components we can render them directly:
  return (
    <div>
      <Row>
        <Col>
          <Divider>Fancy Input</Divider>
          <Input value={''} onChange={() => {}} />
        </Col>

        <Col>
          <Card title={'Fancy Card'}>
            <Button onClick={() => {}}>Fancy Button</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
```

#### Import a JSON

For now, we will be working on the `App.js` file. In the later steps, you can refactor the app and split it into multiple components. Import the array of foods from the `foods.json` file to `App.js`.

```js
import foods from './foods.json';
```

#### About the design

If you struggle with the design, you can find static examples of what is expected inside the `style-guide/` folder.

So let's start!

### Iteration 1| Render a Simple List

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



Happy coding! ❤️
