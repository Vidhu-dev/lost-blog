function DisplayBoard({ zWidth = 1, zHeigth = 1, x = 0, y = 0 }) {
  const viewBox = `${x} ${y} 519 433.5`;
  const darkFill = "#0f1108";

  const viewBoxValues = viewBox.split(" ");
  const width = viewBoxValues[2] * zWidth;
  const height = viewBoxValues[3] * zHeigth;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
    >
      <g transform="translate(2779 5236)">
        <path
          d="M691.25,146.5h-501a9.014,9.014,0,0,0-9,9v296a9.014,9.014,0,0,0,9,9h501a9.014,9.014,0,0,0,9-9v-296a9.014,9.014,0,0,0-9-9Zm7,305a7.008,7.008,0,0,1-7,7h-501a7.008,7.008,0,0,1-7-7v-296a7.008,7.008,0,0,1,7-7h501a7.008,7.008,0,0,1,7,7Z"
          transform="translate(-2960.25 -5382.5)"
          fill="#3f3d56"
        />
        <rect
          width="517"
          height="2"
          transform="translate(-2778 -5202)"
          fill="#3f3d56"
        />
        <circle
          cx="5"
          cy="5"
          r="5"
          transform="translate(-2766 -5223.5)"
          fill="#ccc"
        />
        <circle
          cx="5"
          cy="5"
          r="5"
          transform="translate(-2751 -5223.5)"
          fill="#ccc"
        />
        <circle
          cx="5"
          cy="5"
          r="5"
          transform="translate(-2736 -5223.5)"
          fill="#ccc"
        />
        <path
          d="M561.75,580h-242a8.51,8.51,0,0,1-8.5-8.5v-271a8.51,8.51,0,0,1,8.5-8.5h242a8.51,8.51,0,0,1,8.5,8.5v271a8.51,8.51,0,0,1-8.5,8.5Z"
          transform="translate(-2960.25 -5382.5)"
          fill="#ccc"
        />
        <path
          d="M511.75,431h-142a12.5,12.5,0,0,1,0-25h142a12.5,12.5,0,1,1,0,25Z"
          transform="translate(-2960.25 -5382.5)"
          fill="#fff"
        />
        <path
          d="M511.75,477.5h-142a12.5,12.5,0,0,1,0-25h142a12.5,12.5,0,1,1,0,25Z"
          transform="translate(-2960.25 -5382.5)"
          fill="#fff"
        />
        <path
          d="M511.75,524.5h-142a12.5,12.5,0,0,1,0-25h142a12.5,12.5,0,1,1,0,25Z"
          transform="translate(-2960.25 -5382.5)"
          fill="#fff"
        />
        <path
          d="M468.25,369.5h-55a12.5,12.5,0,1,1,0-25h55a12.5,12.5,0,0,1,0,25Z"
          transform="translate(-2960.25 -5382.5)"
          fill="#fff"
        />
        <rect
          width="433"
          height="21"
          rx="10.5"
          transform="translate(-2736 -5165)"
          fill="#ccc"
        />
      </g>
    </svg>
  );
}

export default DisplayBoard;
