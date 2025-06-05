import React, { useState } from 'react';
const LeftNavBar = () => {
    const [categories, setCategories] = useState([]); 
    return (
        <div>
            <h2 className='font-semibold'>All Category</h2>
        </div>
    );
};

export default LeftNavBar;