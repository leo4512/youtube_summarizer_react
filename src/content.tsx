import ReactDOM from "react-dom";
import { OnPageCard } from "./components/OnPageCard"; 

// Function to render your React component
const renderComponent = () => {
	// Check if the component has already been injected
	if (document.getElementById("my-custom-element")) {
		return;
	}

	const container = document.createElement("div");
	container.id = "my-custom-element"; 

	const targetElement = document.querySelector("ytd-watch-metadata");

	if (targetElement) {
		targetElement.appendChild(container);

    // Detect theme
    const isDarkTheme = document.documentElement.hasAttribute("dark");
	console.log("dark? :" + isDarkTheme);
    // Pass the theme as a prop to the component
		ReactDOM.render(<OnPageCard isDarkTheme={isDarkTheme} />, container);
	}
};

// Observe DOM for changes
const observer = new MutationObserver(renderComponent);

observer.observe(document.body, {
	childList: true,
	subtree: true,
});
