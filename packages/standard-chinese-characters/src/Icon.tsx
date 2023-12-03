import { memo } from 'react';

export const HansIcon = memo<React.PropsWithChildren<React.SVGProps<SVGSVGElement>>>(({ children }) => {
  return (
    <svg viewBox="0 0 46 46">
      <g fill="none" fillRule="evenodd">
        <line x1=".5" x2="45.5" y1="23" y2="23" stroke="var(--color-border-muted)" strokeLinecap="square" />
        <line
          x1="1"
          x2="45"
          y1="23.5"
          y2="23.5"
          stroke="var(--color-border-muted)"
          strokeLinecap="square"
          transform="rotate(90 23 23.5)"
        />
        <line
          x1="-7.712"
          x2="53.099"
          y1="22.883"
          y2="22.883"
          stroke="var(--color-border-muted)"
          strokeDasharray="2 4"
          strokeLinecap="square"
          transform="rotate(45 22.705 23.311)"
        />
        <line
          x1="-7.88"
          x2="52.922"
          y1="22.835"
          y2="21.774"
          stroke="var(--color-border-muted)"
          strokeDasharray="2 4"
          strokeLinecap="square"
          transform="rotate(136 22.62 22.749)"
        />
        <rect width="45" height="45" x=".5" y=".5" stroke="var(--color-border-muted)" rx="3" />
        <text
          fontFamily="-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif"
          fontSize="23"
          letterSpacing="-0.828571429"
          fill="currentColor"
        >
          <tspan x="11.9142857" y="31">
            {children}{' '}
          </tspan>
        </text>
      </g>
    </svg>
  );
});
