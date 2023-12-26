import React, {ComponentPropsWithoutRef} from 'react';

export const Edit = ({width = 24, height = 24, color = '#FFDDD2', ...restProps}: ComponentPropsWithoutRef<'svg'>) => {
    return (
        <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.988 0L18.988 3L16.701 5.288L13.701 2.288L15.988 0ZM5 13.988H8L15.287 6.701L12.287 3.701L5 10.988V13.988Z"
                fill={color}/>
            <path
                d="M16 16.988H5.158C5.132 16.988 5.105 16.998 5.079 16.998C5.046 16.998 5.013 16.989 4.979 16.988H2V2.98801H8.847L10.847 0.988007H2C0.897 0.988007 0 1.88401 0 2.98801V16.988C0 18.092 0.897 18.988 2 18.988H16C16.5304 18.988 17.0391 18.7773 17.4142 18.4022C17.7893 18.0271 18 17.5184 18 16.988V8.32001L16 10.32V16.988Z"
                fill={color}/>
        </svg>


    );
};
