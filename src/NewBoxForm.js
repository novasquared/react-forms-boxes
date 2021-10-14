import React, { useState } from "react";

/** Form for creating boxes.
 *
 * State:
 * - formData: { height, width, backgroundColor }
 */

const initialState = {
    width: "",
    height: "",
    backgroundColor: "",
}

function NewBoxForm(addBox) {
    function handleSubmit(evt) {
        evt.preventDefault();
        console.log("Check out state ->", formData);
        evt.preventDefault();
        addBox(formData);
        setFormData(initialState);

    }
}

const [formData, setFormData] = useState(initialState);

function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
        ...fData,
        [name]: value,
    }));
}
  // end

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

        <label htmlFor="backgroundColor">'Background Color':</label>
        <input
            id="backgroundColor"
            name="backgroundColor"
            value={formData.backgroundColor}
            onChange={handleChange}
        />
        <button>Add a new box!</button>
    </form>
);

// end

export default NewBoxForm;

//ssoj1