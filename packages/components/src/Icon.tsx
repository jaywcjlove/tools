import React, { PropsWithChildren } from 'react';

export const CopyIcon: React.FC<PropsWithChildren<React.SVGProps<SVGSVGElement>>> = (props) => {
  return (
    <svg fill="none" viewBox="0 0 24 24" width={16} height={16} stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
      ></path>
    </svg>
  );
};

export const RightIcon: React.FC<PropsWithChildren<React.SVGProps<SVGSVGElement>>> = (props) => {
  return (
    <svg viewBox="0 0 1024 1024" width={16} height={16} {...props}>
      <path
        fill="currentColor"
        d="M412.458667 603.626667l337.066666-335.466667a42.666667 42.666667 0 0 1 60.202667 0l31.104 30.954667a42.666667 42.666667 0 0 1 0 60.48L443.328 755.221333a42.858667 42.858667 0 0 1-6.677333 5.44 42.666667 42.666667 0 0 1-54.442667-4.821333l-199.04-198.101333a42.666667 42.666667 0 0 1 0-60.48l31.104-30.954667a42.666667 42.666667 0 0 1 60.202667 0l137.984 137.322667z"
      ></path>
    </svg>
  );
};
