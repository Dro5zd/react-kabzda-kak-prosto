import React, {useEffect, useState} from 'react';

type PropsType = {
    mode?: 'analog' | 'digital'

}

export const Clock: React.FC<PropsType> = (props) => {


    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])
    return <div>
        <span>{date.getHours()}</span>
        :
        <span>{date.getMinutes()}</span>
        :
        <span>{date.getSeconds()}</span>
    </div>
}