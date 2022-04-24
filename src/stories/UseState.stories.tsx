import {useState} from 'react';

export default {
    title: 'useState demo'
}

function generateData() {
    //difficult counting
    console.log('GenerateData')
    return 1
}

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(generateData)

    return <div>
        <button onClick={()=> setCounter(state => state + 1)}>+</button>
        {counter}
    </div>
}