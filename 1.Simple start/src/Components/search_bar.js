import React,{Component} from 'react';

//following is the  simple function based component using ES6
/*
const SearchBar = ()=>{
    return <input />;
};
*/
/*
    create class based component using ES6 :

 class SearchBar extends Component{
    render(){
    return <input onChange = {event => {console.log(event.target.value)}}/>;
 }

 }
    export default SearchBar;
 */


/*
   Constructor :
    Every Class in ES6 has special function called constructor.
    It initialize automatically whenever new instance of the class is created.
    It is reserve for to initialize the variables or state object ...

 class SearchBar extends Component{
    constructor (props){
    super(props);
    this.state = {term:''};
    }
    render(){
    return <input onChange = {event => {console.log(event.target.value)}}/>;
    }
 }
 export default SearchBar;

 */

/*
State : State is plain JS object is use to record a react to an Event.Each Class based component has its own state Object.
        Whenever Component state is change , Component rerenders and also all its childrens are rerenders as well.
        It means in following example - render() will rerender and event function on change will rerenders

        to change the value of the state object - It is good to use this.setState
 */

 class SearchBar extends Component{
    constructor (props){
    super(props);
    this.state = {term:''};
    }
    render(){
    return (
        <div>
            <input
            value ={this.state.term}
            onChange = {event => this.setState({term:event.target.value})}/>
        </div>
    );
    }
 }
 export default SearchBar;



