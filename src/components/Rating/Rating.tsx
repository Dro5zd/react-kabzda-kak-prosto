import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {ValuePropsTYpe} from './UnconrolledRating';

type StarPropsType = {
    selected: boolean
    callback: (value: ValuePropsTYpe) => void
    value: ValuePropsTYpe
}

type RatingPropsType = {
    value: ValuePropsTYpe
    onClick: (value: ValuePropsTYpe) => void
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star callback={props.onClick} selected={props.value > 0} value={1}/>
            <Star callback={props.onClick} selected={props.value > 1} value={2}/>
            <Star callback={props.onClick} selected={props.value > 2} value={3}/>
            <Star callback={props.onClick} selected={props.value > 3} value={4}/>
            <Star callback={props.onClick} selected={props.value > 4} value={5}/>
        </div>
    )
}


function Star(props: StarPropsType) {
    return props.selected ? <StarIcon onClick={() => {
            props.callback(props.value)
        }}/>
        : <StarBorderIcon onClick={() => {
            props.callback(props.value)
        }}/>

}