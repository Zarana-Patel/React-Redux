/* Create a new Component. This component should produce Some HTML*/

/* Take this component's generated HTML and put it on the Page (in the DOM)*/

/* const - declaring the variable in ES6 but value of this variable is never gonna change. */

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Components/search_bar';
import VideoList from './Components/video_list';
import VideoDetails from './Components/video_details';
import YTSearch from 'youtube-api-search';
const API_KEY = '';


/*
Functional based component

const App = () => {
   //  JSX : It's subset of javascript which is allow us to write what looks like html but behind the scene its javascript
   // babel /webpack compile jsx into vanila js to render into browser
     return (
         <div>
            <SearchBar />
         </div>
      );
}
*/
class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            videos:[],
            selectedVideo:null
        };

        YTSearch({key:API_KEY,term:'surfboards'},(videos) =>{
            this.setState({
                videos:videos,
                selectedVideo: videos[0]
            });
            //this.setState({videos:videos});

        });

    }
    render(){
        return(
            <div>
                <SearchBar/>
                <VideoDetails video={this.state.selectedVideo}/>
                 <VideoList
                     onVideoSelect ={selectedVideo => this.setState({selectedVideo})}
                     videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));