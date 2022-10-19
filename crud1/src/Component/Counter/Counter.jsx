import React from 'react';
import { useState } from 'react';

const Counter = () => {
    const [data, setData]= useState(0);
    return (
        <div>
            <h1>Counter: {data}</h1>
            <button onClick={()=>setData(data+1)}>Increment</button>
            <button onClick={()=>setData(data-1)}>Decrement</button>
        </div>
    );
};

export default Counter;