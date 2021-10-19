import React from "react";
import {Switch, Route, Redirect, useHistory, useRouteMatch} from "react-router-dom";
import CardHolder from "../components/cardHolder/CardHolder";
import CardDetails from "../components/CardDetails";



const RootRouter = () =>{
    return(
            <React.Fragment>
              <Switch>
                <Route path={"/card/:taskID"}>
                  <CardDetails/>
                </Route>
                <Route path={"/cards"}>
                  <CardHolder/>
                </Route>
                <Route exact path={"/"}>
                  <div>
                  <CardHolder/>
                  </div>
                </Route>
                <Route path={"/"}>
                  <Redirect to={"/cards"}/>
                </Route>
              </Switch>
        
            </React.Fragment>
          )
        }

export default RootRouter;

