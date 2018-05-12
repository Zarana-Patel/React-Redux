/* Create a new Component. This component should produce Some HTML*/

/* Take this component's generated HTML and put it on the Page (in the DOM)*/

/* const - declaring the variable in ES6 but value of this variable is never gonna change. */

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Components/search_bar';

const API_KEY = '';

const App = () => {
    /* JSX : It's subset of javascript which is allow us to write what looks like html but behind the scene its javascript
    babel /webpack compile jsx into vanila js to render into browser */
     return (
         <div>
            <SearchBar />
         </div>
      );
}

ReactDOM.render(<App />, document.querySelector('.container'));
