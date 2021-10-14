import React from "react";

/** Create HTML of a box with the height, width, and backgroundColor selected
 * in the NewBoxForm
 * 
 * Properties: 
 * - height
 * - width
 * - backgroundColor
 * - removeBox
 * - id
 * 
 * State
 * - none
 * 
 * BoxList -> Box
 */
function Box({ height, width, backgroundColor, removeBox, id}){
    
    /** listens for a click on remove button and removes the target box */
    function remove(evt) {
        removeBox(id);
    };

    const boxStyle = {
        height: `${height}px`, 
        width: `${width}px`, 
        backgroundColor: backgroundColor,
    };

    return (
        <div>
            <div 
            className="box"
            style={ boxStyle }
            >
            </div>
            <button
            onClick={remove}
            >Remove this box</button>
        </div>
    )
}

export default Box;