import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

/** List of boxes.
 *
 * Properties:
 * - none
 *
 * State:
 * - boxes: array of objects: [{height, width, backgroundColor, id}, ...]
 *
 *  This should render HTML form for adding a new box and each box with a remove 
 * button underneath.
 * 
 * App -> BoxList -> Box, NewBoxForm
 **/

function BoxList(){
    const [boxes, setBoxes] = useState([]);
    console.log("boxes is ", boxes);

    /** adds a new box to boxes */
    function addBox(box){
        let newBox = { ...box, id: uuid() };
        setBoxes(currBoxes => [...currBoxes, newBox]);
    };

    /** removes a box from boxes */
    function removeBox(id){
        setBoxes(currBoxes => currBoxes.filter(b => { 
            console.log("id is ", id, "b is ", b); 
            return id !== b.id})
        );
    };

    /** generates HTML for each box with specified height, width, and 
     * backgroundColor */
    function renderBoxes(){
        return (
            <div>
                {boxes.map(box => (
                    <div key={box.id}>
                        {<Box height={box.height} 
                                width={box.width} 
                                backgroundColor={box.backgroundColor} 
                                id={box.id}
                                removeBox={removeBox} />}
                                
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            {renderBoxes()}
        </div>
    );
}

export default BoxList;