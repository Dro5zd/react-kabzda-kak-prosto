import React, {useState} from 'react';
import {OnOff} from './OnOff';
import {action} from '@storybook/addon-actions';


export default {
    title: 'OnOff',
    component: OnOff,
};

const callback = action('ON or OFF clicked')

export const OnMode = () => <OnOff on={true} callback={callback}/>
export const OffMode = () => <OnOff on={false} callback={callback}/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} callback={setValue}/>
}

