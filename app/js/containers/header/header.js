import React from "react";

class Header extends React.Component{
    render(){
        return (
            <header className={"container"}>
                <div className={"row header"}>
                <div className={"column-2"}>
                    <img className={"logo"}/>
                </div>
                <div className={"column-8"}>
                    <ul>
                        <li>Funkcje</li>
                        <li>Cennik</li>
                        <li>Pomoc</li>
                    </ul>
                </div>
                </div>
            </header>
    )
    }
}
export default Header