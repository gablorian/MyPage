import React from "react";

class Header extends React.Component{
    render(){
        return (
            <div className={"container"}>

                    <div className={"column-12 center title"}>
                        Welcome to my portfolio page. Please check out some of my projects.
                    </div>

                <div className={"row center"}>
                    <div className={"column-3 firstBox"}>
                    </div>
                    <div className={"column-3 secondBox"}>
                    </div>
                    <div className={"column-3 thirdBox"}>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header