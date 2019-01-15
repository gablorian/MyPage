import React from "react";

class Header extends React.Component{
    render(){
        return (
            <header className={"container"}>
                <div className={"column-2"}>
                    <img/>
                </div>
                <div>
                    <ul>
                        <li>Funkcje</li>
                        <li>Cennik</li>
                        <li>Pomoc</li>
                        <li>Blog</li>
                        <li>Forum</li>
                    </ul>
                </div>
                <div>
                    <div className={"column-2"}>
                        <img/>
                        <p>Zaloguj się</p>
                    </div>
                    <div className={"column-2"}>
                        <img/>
                        <p>Załóż konto</p>
                    </div>
                </div>
            </header>
    )
    }
}
export default Header