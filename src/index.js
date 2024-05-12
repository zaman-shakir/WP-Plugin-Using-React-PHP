import { render } from '@wordpress/element';
//const { render } = wp.element; 
import MyFirstApp from "../components/my-first-app";
 
window.addEventListener(
    'load',
    function () {
        render(
            <MyFirstApp />,
            document.querySelector( '#my-first-gutenberg-app' )
        );
    },
    false
);