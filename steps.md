Sure, here's a more detailed breakdown of the revised list of tasks:

1. **Task 1 - Define Components List**: Define a JavaScript array of objects where each object represents a different daisyUI component. Each object should have the following properties:
    - id: a unique identifier, can be numerical or a string.
    - name: the name of the daisyUI component.
    - component: a function returning the corresponding JSX code. For instance: `() => <Button>My Button</Button>`.

2. **Task 2 - Create Left Side Selection Panel**: Create a React component for the selection panel. This component should display the list of daisyUI components defined in Task 1 as a vertical list. The `name` property of each component object should be displayed, and each name should be clickable.

3. **Task 3 - Create State to Track Selected Component**: Using React's useState hook, set up a piece of state to store the currently selected component. The initial state should be the first component object from your components array.

4. **Task 4 - Handle Component Selection**: Add an onClick event to each component name in the selection panel. When clicked, it should update the selected component state with the component object associated with the clicked name.

5. **Task 5 - Create Right Side Panel**: Divide the right side of the screen into two sections: preview and code snippet. Initially, these sections can be empty.

6. **Task 6 - Implement Preview Feature**: Create a React component for the preview section. It should receive the currently selected component as a prop and render it. When the selected component state changes, the rendered component in the preview should update automatically.

7. **Task 7 - Generate Code Snippet**: Create a function that takes a component object as an argument and returns a string representation of the JSX code for that component. This function should be used to generate the code snippet for the currently selected component. Display this code snippet in the code snippet section of the right side panel.

8. **Task 8 - Implement Copy Functionality**: Add a 'Copy to Clipboard' button in the code snippet section. When clicked, it should copy the current code snippet to the user's clipboard. You may use a library such as react-copy-to-clipboard for this functionality.

Remember to take each task one at a time, thoroughly testing each part as you complete it. This will ensure that any bugs or issues are discovered and addressed promptly, keeping the overall project on track.