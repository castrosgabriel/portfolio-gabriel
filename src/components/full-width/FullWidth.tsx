import React, { Children } from 'react';
import './FullWidth.scss';
import exp from 'constants';

interface ProjectHeaderProps {
    backgroundColor?: string;
    padding?: string;
    children: any;
}


const FullWidth: React.FC<ProjectHeaderProps> = ({
    backgroundColor,
    children,
    padding
}) => {

    const backgroundStyle: React.CSSProperties = {
        backgroundColor: backgroundColor || 'initial',
    };


    const paddingStyle: React.CSSProperties = {
        padding: padding || '0',
    };


    return (

        <div className='full-width' style={backgroundStyle}>
            <div className='container' style={paddingStyle}>
                {children}
            </div>
        </div>

    )
}

export default FullWidth