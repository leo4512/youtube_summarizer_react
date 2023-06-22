import React from 'react';
import ReactDOM from 'react-dom';
import { LongButton } from './components';

const MyComponent: React.FC = () => (
  <div>
    <LongButton buttonText='ok' />
  </div>
);

// Function to render your React component
const renderComponent = () => {
  // Check if the component has already been injected
  if (document.getElementById('my-custom-element')) {
    return;
  }

  const container = document.createElement('div');
  container.id = 'my-custom-element'; // Give the container an ID so you can check if it's already been injected

  const targetElement = document.querySelector('.item.style-scope.ytd-watch-metadata');

  if (targetElement) {
    targetElement.appendChild(container);
    ReactDOM.render(<MyComponent />, container);
  }
};

// Observe DOM for changes
const observer = new MutationObserver(renderComponent);

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
