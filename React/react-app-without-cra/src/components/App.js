import React, { Component } from "react";
import { ColorInput } from "./ColorInput";
import '../style/App.css'
import { RowColumnInput } from "./RowColumnInput";

class App extends Component{
    render(){
        return(
            <div className="App">
                <ColorInput />
                <RowColumnInput />
            </div>
        )
    }
}

export default App;