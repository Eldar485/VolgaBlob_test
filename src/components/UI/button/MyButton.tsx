import React, {FC} from 'react';
import classes from './MyButton.module.scss'
import {EuiButton} from '@elastic/eui';

interface MyButtonProps {
    children?: React.ReactNode,
    onClick: () => void
}

const MyButton: FC<MyButtonProps> = ({children, onClick}) => {
    return (
        <EuiButton
            onClick={onClick}
            className={classes.btn}
        >{children}</EuiButton>
    );
};

export default MyButton;