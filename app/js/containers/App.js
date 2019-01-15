import React, { Component } from 'react';

class App extends Component{
    render(){
        return (
            <body>
                <ul id="grid" className="clear">
                    <li>
                        <div className="hexagon firstHex"></div>
                    </li>
                    <li>
                        <div className="hexagon secondHex"></div>
                    </li>
                    <li>
                        <div className="hexagon fourthHex"></div>
                    </li>
                </ul>
            </body>
        );
    }
}
export default App;