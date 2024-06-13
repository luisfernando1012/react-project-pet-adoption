import * as React from "react";


const SVGLogo = ({width=140, props}) => (

  <svg viewBox="0 0 160 160" id="" {...props} width={width}>
    <g id="root" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <rect
        id="background.accent"
        fill="transparent"
        x={0}
        y={0}
        width={160}
        height={160}
      />
      <path
        d="M80 142c34.242 0 62 -27.758 62 -62c0 -34.242 -27.758 -62 -62 -62c-34.242 0 -62 27.758 -62 62c0 34.242 27.758 62 62 62zm0 2c-35.346 0 -64 -28.654 -64 -64c0 -35.346 28.654 -64 64 -64c35.346 0 64 28.654 64 64c0 35.346 -28.654 64 -64 64z"
        id="shape.primary"
        fill="#000"
        fillRule="nonzero"
      />
      <path
        d="M72 42l16 0l0 2l-16 0l0 -2zm0 44l16 0l0 2l-16 0l0 -2z"
        id="shape.primary"
        fill="#000"
      />
      <g id="group" transform="translate(25.000000, 94.000000)">
        <rect id="Rectangle-14" x={0} y={0} width={84} height={22} />
        <text
          id="headerText.primary"
          fontFamily="Crimson Text"
          fontSize={14.122174698228427}
          fontWeight={700}
          letterSpacing="NaN"
          fill="#000"
          data-text-alignment="C"
          fontStyle="normal"
        >
          <tspan x={4.150047302246094} y={15}>
            {"Get a little friend"}
          </tspan>
        </text>
      </g>
      <rect
        id="icon.primary"
        x={65}
        y={50}
        width={30}
        height={30}
        display="none"
        fill="#000"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 24 24"
        fill="#000"
        id="svg_icon.primary"
        x={65}
        y={50}
        width={30}
        height={30}
        {...props}
      >
        <g id="surface1">
          <path
            style={{}}
            d="M 8.21875 2.0625 C 8.050781 2.039063 7.886719 2.0625 7.71875 2.09375 C 6.382813 2.351563 5.609375 4.300781 6.03125 6.46875 C 6.453125 8.636719 7.882813 10.195313 9.21875 9.9375 C 10.554688 9.679688 11.296875 7.699219 10.875 5.53125 C 10.507813 3.632813 9.394531 2.214844 8.21875 2.0625 Z M 15.78125 2.0625 C 14.605469 2.214844 13.492188 3.632813 13.125 5.53125 C 12.703125 7.699219 13.445313 9.679688 14.78125 9.9375 C 16.117188 10.195313 17.546875 8.636719 17.96875 6.46875 C 18.390625 4.300781 17.617188 2.351563 16.28125 2.09375 C 16.113281 2.0625 15.949219 2.039063 15.78125 2.0625 Z M 3.71875 8.96875 C 3.367188 8.988281 3.023438 9.082031 2.75 9.28125 C 1.65625 10.085938 1.792969 12.097656 3.03125 13.78125 C 4.269531 15.464844 6.15625 16.179688 7.25 15.375 C 8.34375 14.570313 8.238281 12.558594 7 10.875 C 6.070313 9.613281 4.769531 8.910156 3.71875 8.96875 Z M 20.25 8.96875 C 19.1875 8.898438 17.898438 9.613281 16.96875 10.875 C 15.730469 12.558594 15.859375 14.671875 16.9375 15.53125 C 17.859375 16.265625 19.761719 15.527344 21 13.84375 C 22.238281 12.160156 22.332031 10.128906 21.21875 9.3125 C 20.941406 9.109375 20.605469 8.992188 20.25 8.96875 Z M 12 12 C 10.480469 12 9.25 13.347656 9.25 15 C 9.25 16.496094 6.5 17.414063 6.5 19.21875 C 6.5 20.753906 7.824219 22 9.4375 22 C 9.960938 22 10.421875 21.855469 10.84375 21.625 C 11.316406 21.367188 12.648438 21.367188 13.125 21.625 C 13.550781 21.855469 14.035156 22 14.5625 22 C 16.1875 22 17.5 20.753906 17.5 19.21875 C 17.5 17.554688 14.75 16.242188 14.75 15 C 14.75 13.347656 13.519531 12 12 12 Z "
          />
        </g>
      </svg>
    </g>
  </svg>
);
export default SVGLogo;
