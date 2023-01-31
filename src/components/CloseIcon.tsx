interface CloseIconProps extends React.SVGProps<SVGSVGElement> {}

export function CloseIcon(props: CloseIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M5.411 4.38a.73.73 0 00-1.03 1.031L8.968 10 4.38 14.589a.73.73 0 001.031 1.03L10 11.032l4.589 4.589a.73.73 0 001.03-1.031L11.032 10l4.589-4.589a.73.73 0 00-1.031-1.03L10 8.968 5.411 4.38z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
