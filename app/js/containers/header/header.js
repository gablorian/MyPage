import React from "react";

class Header extends React.Component{
    render(){
        return (
            <div className={"container"}>

                    <div className={"row center title"}>
                        <p>Welcome to my portfolio page. Please check out some of my projects.</p>
                    </div>

                <div className={"row center"}>
                    <div className={"column-sm-12 column-md-3 firstBox"}>
                    </div>
                    <div className={"column-sm-12 column-md-3 secondBox"}>
                    </div>
                    <div className={"column-sm-12 column-md-3 thirdBox"}>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header