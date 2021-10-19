import React, { useEffect, memo, useState, useContext } from "react";



const CardDetails = (props) =>{
const params = useParams();

    useEffect(()=>{
        console.log("fetch", params.taskID);
    }, [params.taskID]);


return (
    <div className="card">
        {`Details for task with id ${params.taskID}`}
    </div>
)
}

export default memo(CardDetails)