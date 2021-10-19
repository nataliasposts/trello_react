import React, { useEffect, memo, useState, useContext } from "react";
import styled from "styled-components";
import EditModalWindow from "components/EditModalWindow";



const StyledCard = styled.div`
    background-color: aliceblue;
    margin-bottom: 10px;
    padding: 10px;

.card-list{
    display:flex;
    flex-direction:column;
}
.btn-card_edit{
    align-self: flex-end;
}

.card-title{
    color: #221c1d;
    text-align: left;
    margin-bottom: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    line-height: 18px;
}
.card-description{
    font-family: 'Poppins', sans-serif;
    color: #5e5556;
    text-align: left;
    margin-bottom: 8px;
    font-size: 10px;
    line-height: 14px;
}
`

const Card = (props) => {


    useEffect( () => {
        return() => {
            console.log("bue" , props.index);
        }
    }, []);

    console.log("card render", props.index);

    return(
        <StyledCard>
            <div className={"card-list"}>
                <button className={"btn-card_edit"} onClick={()=>{props.setModalContent(<EditModalWindow removeTask={props.removeTask} title={props.title} description={props.description} index={props.index} addTask={props.addTask} setModalContent={props.setModalContent} changeName={props.changeName}/>)}}>
                    <i className={"fas fa-pencil-alt"}></i>
                </button>
                <h3 className={"card-title"}>
                    {props.title}
                </h3>
                <p className={"card-description"}>
                    {props.description}
                </p>
            </div>
        </StyledCard>
        ) 
    }

    

export default memo(Card);  