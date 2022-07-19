import { container } from "webpack";
import App from "./App";

export default {
    title: "Practice/App", 
    component: App,
    argTypes: {
        title: {control: "text"},
        textColor: {control: "color"},
        bgColor: {control: "color"},
        font: {options: ['Arial', 'Times New Roman', 'Verdana', 'Courier New'], control: { type: 'radio' }}
    }
}

export const Modifier = (args) => (
    <App {...args}></App>
)