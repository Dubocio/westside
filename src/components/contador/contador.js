import { useState } from "react";

const Contador = () => {
    const [count, setCount] = useState(0)
    return (
    <div><button onClick={() => setCount(count+1)}>{count}
    </button></div>);
};

export default Contador;