import React, { useState } from "react";

/** Form for creating boxes.
 *
 * Properties: 
 * - addBox
 * 
 * State:
 * - formData: { height, width, backgroundColor }
 * 
 * This should return an HTML form for adding a new box
 * 
 * BoxList -> NewBoxForm
 */

const INITIAL_STATE = {
    width: "",
    height: "",
    backgroundColor: "",
}

function NewBoxForm( { addBox } ) {
    const [formData, setFormData] = useState(INITIAL_STATE);

    /** listen for form submit and add box to boxes and resets form */
    function handleSubmit(evt) {
        evt.preventDefault();
        console.log("Check out state ->", formData);
        addBox(formData);
        setFormData(INITIAL_STATE);

    }

    /** listen for changes and updates form fields  */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="height">Height:</label>
            <input
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />
    
            <label htmlFor="width">Width:</label>
            <input
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
            />
    
            <label htmlFor="backgroundColor">Background Color:</label>
            <input
                type="color"
                id="backgroundColor"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
            />
            <button>Add a new box!</button>
        </form>
    )
}
  // end


export default NewBoxForm;

