import React, {ComponentPropsWithoutRef} from 'react';

export const Delete = ({width = 24, height = 24, color = '#FFDDD2', ...restProps}: ComponentPropsWithoutRef<'svg'>) => {
    return (
        <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3 18C2.45 18 1.979 17.804 1.587 17.412C1.195 17.02 0.999333 16.5493 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.804 17.021 14.412 17.413C14.02 17.805 13.5493 18.0007 13 18H3ZM13 3H3V16H13V3ZM5 14H7V5H5V14ZM9 14H11V5H9V14Z"
                fill="#FFDDD2"/>
        </svg>
    );
};