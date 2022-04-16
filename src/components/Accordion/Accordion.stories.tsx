import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from './Accordion';
import {action} from '@storybook/addon-actions';


export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action('Fired')

export const CollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} callback={callback}/>
export const UncollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={false} callback={callback}/>
export const ModeChanging = () => {
    const [value, setValue] = useState(true)
    return <Accordion titleValue={'Menu'} collapsed={value} callback={()=>setValue(!value)}/>
}

