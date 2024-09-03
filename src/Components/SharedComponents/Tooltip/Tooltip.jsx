'use client'
import React from 'react';
import { Tooltip } from 'react-tooltip';

const TooltipProvider = ({ id, tooltipText }) => {

    const customStyles = {
        // color: '#00ff99',
        color: 'rgba(0, 0, 0, 0.962)',
        backgroundColor: '#00ff99'
    }


    return (
        <Tooltip
            anchorSelect={`#${id}`}
            content={tooltipText}
            style={customStyles}
        />
    );
};

export default TooltipProvider;