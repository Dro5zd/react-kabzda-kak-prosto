import React, {useState} from "react";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';


export function UncontrolledRating() {


    let [value, setValue] = useState(0)

    // const onClickHandler = () => {
    //     setValue(1)
    // }

    return (
        <div>
            <Star selected={value > 0}/>  <button onClick={()=>
            setValue(1)}>1</button>
            <Star selected={value > 1}/><button onClick={()=>
            setValue(2)}>2</button>
            <Star selected={value > 2}/><button onClick={()=>
            setValue(3)}>3</button>
            <Star selected={value > 3}/><button onClick={()=>
            setValue(4)}>4</button>
            <Star selected={value > 4}/><button onClick={()=>
            setValue(5)}>5</button>
        </div>
    )
}

type StarPropsType = { selected: boolean }

function Star(props: StarPropsType) {
    console.log("Star rendering")
    if (props.selected) {
        return   <StarIcon/>
    } else {
        return <StarBorderIcon/>
    }
}