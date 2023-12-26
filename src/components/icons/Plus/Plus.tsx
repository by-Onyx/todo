import React, {ComponentPropsWithoutRef} from 'react';

export const Plus = ({width = 24, height = 24, color = '#006D77', ...restProps}: ComponentPropsWithoutRef<'svg'>) => {
  return (
      <svg width={width} height={height} viewBox="0 0 48 48" fill="none" stroke="none" strokeOpacity="0 " xmlns="http://www.w3.org/2000/svg">
          <path id="Vector"
                d="M17.5 0C12.876 0.0557868 8.45719 1.91744 5.18731 5.18731C1.91744 8.45719 0.0557868 12.876 0 17.5C0.0557868 22.124 1.91744 26.5428 5.18731 29.8127C8.45719 33.0826 12.876 34.9442 17.5 35C22.124 34.9442 26.5428 33.0826 29.8127 29.8127C33.0826 26.5428 34.9442 22.124 35 17.5C34.9442 12.876 33.0826 8.45719 29.8127 5.18731C26.5428 1.91744 22.124 0.0557868 17.5 0ZM27.5 18.75H18.75V27.5H16.25V18.75H7.5V16.25H16.25V7.5H18.75V16.25H27.5V18.75Z"
                fill={color}/>
      </svg>
  );
};
