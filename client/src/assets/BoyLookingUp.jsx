function BoyLookingUp({ zWidth = 1, zHeigth = 1, x = 0, y = 0 }) {
  const viewBox = `${x} ${y} 290 382.56`;
  const darkFill = "#0f1108";
  const viewBoxValues = viewBox.split(" ");
  const  width = viewBoxValues[2] * zWidth;
  const height = viewBoxValues[3] * zHeigth;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
    >
      <g id="Group_1" data-name="Group 1" transform="translate(2231.5 5011.56)">
        <path
          id="Path_7"
          data-name="Path 7"
          d="M920.867,622.523a9.691,9.691,0,0,0,3.465-14.45L946.914,483.1l-21.073-.278L910.16,606.4a9.743,9.743,0,0,0,10.707,16.119Z"
          transform="translate(-2960.25 -5382.5)"
          fill="#ccc"
        />
        <path
          id="Path_8"
          data-name="Path 8"
          d="M674.215,470.1l-8,38,1,85h15l7-83,11-35Z"
          transform="translate(-2779 -5236)"
          fill="#ccc"
        />
        <path
          id="Path_9"
          data-name="Path 9"
          d="M724.215,470.1l-8,38,1,85h15l7-83,11-35Z"
          transform="translate(-2779 -5236)"
          fill="#ccc"
        />
        <path
          id="Path_10"
          data-name="Path 10"
          d="M843.216,737.425H866.86v14.887H828.33A14.887,14.887,0,0,1,843.216,737.425Z"
          transform="translate(-2925.602 -5420.168) rotate(2.599)"
          fill={darkFill}
        />
        <path
          id="Path_11"
          data-name="Path 11"
          d="M893.216,737.425H916.86v14.887H878.33A14.887,14.887,0,0,1,893.216,737.425Z"
          transform="translate(-2925.551 -5422.435) rotate(2.599)"
          fill={darkFill}
        />
        <circle
          id="Ellipse_4"
          data-name="Ellipse 4"
          cx="24.561"
          cy="24.561"
          r="24.561"
          transform="translate(-2092.846 -5001.38)"
          fill="#ccc"
        />
        <path
          id="Path_12"
          data-name="Path 12"
          d="M946.243,466.43c-8.127-12.752-35.166-44.527-75.278-18.332,0,0,9.5,79.5-13.5,122.5,0,0,53,16,82,1,0,0-10-67,0-80a53.906,53.906,0,0,0,8.013-13.726,12.891,12.891,0,0,0-1.235-11.442Z"
          transform="translate(-2960.25 -5382.5)"
          fill="#ccc"
        />
        <path
          id="Path_13"
          data-name="Path 13"
          d="M936.465,465.6l9.814,4.089a3.718,3.718,0,0,1,2.285,3.278l.9,21.633-22-2Z"
          transform="translate(-2960.25 -5382.5)"
          fill="#ccc"
        />
        <path
          id="Path_14"
          data-name="Path 14"
          d="M861.465,568.6s-22,41-18,79l31,5,22-53-5,54,32,1s21-78,14-85Z"
          transform="translate(-2960.25 -5382.5)"
          fill={darkFill}
        />
        <path
          id="Path_15"
          data-name="Path 15"
          d="M855.867,612.523a9.691,9.691,0,0,0,3.465-14.45L881.914,473.1l-21.073-.278L845.16,596.4a9.743,9.743,0,0,0,10.707,16.119Z"
          transform="translate(-2960.25 -5382.5)"
          fill="#ccc"
        />
        <path
          id="Path_16"
          data-name="Path 16"
          d="M880.465,448.6l-9-1s-8-2-11,9-3,33-3,33l28-1Z"
          transform="translate(-2960.25 -5382.5)"
          fill="#ccc"
        />
        <path
          id="Path_17"
          data-name="Path 17"
          d="M895.9,417.505c.882-3.062.627-7.2-2.341-8.363-1.547-.6-3.272-.127-4.924.042a13.141,13.141,0,0,1-9.081-2.5c-3.07-2.283-4.967-5.772-6.768-9.147l-2.724-5.106a22.174,22.174,0,0,1-1.545-3.327c-1.516-4.507.13-9.726,3.5-13.082a18.976,18.976,0,0,1,12.963-5.082,34.984,34.984,0,0,1,13.851,2.967,61.26,61.26,0,0,1,20.653,13.875c3.832,3.92,7.32,9.027,6.52,14.45-.623,4.221-3.7,7.6-6.635,10.7l-10.645,11.237c-1.885,1.99-3.9,4.061-6.532,4.826s-6.023-.359-6.741-3C895.45,425.991,895.017,420.567,895.9,417.505Z"
          transform="translate(-2960.25 -5382.5)"
          fill={darkFill}
        />
        <path
          id="Path_18"
          data-name="Path 18"
          d="M1018.75,752.5a1,1,0,0,1-1,1h-288a1,1,0,0,1,0-2h288a1,1,0,0,1,1,1Z"
          transform="translate(-2960.25 -5382.5)"
          fill="#3f3d56"
        />
      </g>
    </svg>
  );
}

export default BoyLookingUp;
