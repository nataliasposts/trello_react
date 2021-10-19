import React from "react";


const MainLayout =(props)=>{
    return(
        <div className={"trello"}>
              <div className={"header"}></div>
                  <div className={"content"}>
                  <div className={"content-container container"}>
                      {props.children}
                  </div>
                  </div>
                  <div className={"footer"}></div>
        </div>
    )
}

export default MainLayout;