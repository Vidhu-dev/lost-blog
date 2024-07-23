function Logo({ fillColor, zWidth = 1, zHeigth = 1, x = 0, y = 0 }) {
  const viewBox = `${x} ${y} 290 382.56`;
  const darkFill = "#0f1108";
  const viewBoxValues = viewBox.split(" ");
  const width = viewBoxValues[2] * zWidth;
  const height = viewBoxValues[3] * zHeigth;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 2355.999 2356"
      className={fillColor}
    >
      <path
        id="Subtraction_1"
        data-name="Subtraction 1"
        d="M1628.5,2817.5c-20.157,0-40.552-.516-60.62-1.533-19.917-1.009-40.044-2.54-59.824-4.549-19.637-1.994-39.472-4.514-58.954-7.491-19.348-2.956-38.865-6.442-58.01-10.36-19.022-3.892-38.2-8.318-56.992-13.154-18.683-4.807-37.491-10.148-55.9-15.874-18.308-5.695-36.724-11.926-54.735-18.52-17.917-6.56-35.915-13.657-53.495-21.092-17.5-7.4-35.059-15.34-52.181-23.591-17.055-8.218-34.144-16.97-50.793-26.014-16.591-9.013-33.188-18.556-49.331-28.365-16.094-9.779-32.175-20.088-47.8-30.64-15.579-10.525-31.118-21.575-46.185-32.843-15.036-11.245-30.009-23.011-44.5-34.971-14.475-11.946-28.856-24.4-42.743-37.025s-27.645-25.739-40.911-39.005-26.386-27.027-39.006-40.911-25.081-28.271-37.025-42.743c-11.96-14.493-23.726-29.465-34.971-44.5-11.269-15.069-22.319-30.607-32.843-46.185-10.549-15.614-20.858-31.695-30.641-47.8-9.813-16.15-19.356-32.747-28.365-49.331-9.044-16.649-17.8-33.739-26.015-50.793-8.253-17.127-16.19-34.683-23.591-52.181-7.436-17.581-14.533-35.579-21.092-53.495-6.595-18.01-12.826-36.426-18.52-54.735-5.726-18.411-11.067-37.218-15.874-55.9-4.836-18.794-9.261-37.969-13.154-56.993-3.918-19.145-7.4-38.662-10.36-58.01-2.977-19.483-5.5-39.318-7.491-58.954-2.009-19.779-3.54-39.907-4.549-59.824-1.017-20.067-1.533-40.463-1.533-60.62s.516-40.552,1.533-60.62c1.009-19.917,2.54-40.045,4.549-59.824,1.994-19.636,4.514-39.471,7.491-58.954,2.956-19.348,6.442-38.865,10.36-58.01,3.892-19.024,8.318-38.2,13.154-56.993,4.806-18.682,10.147-37.489,15.874-55.9,5.7-18.31,11.926-36.726,18.52-54.735,6.559-17.915,13.656-35.913,21.092-53.495,7.4-17.5,15.338-35.054,23.591-52.181,8.217-17.054,16.97-34.143,26.015-50.794,9.009-16.585,18.552-33.182,28.365-49.331,9.783-16.1,20.091-32.181,30.641-47.8,10.525-15.579,21.575-31.118,32.843-46.185,11.244-15.035,23.01-30.008,34.971-44.5,11.946-14.475,24.4-28.856,37.025-42.743s25.743-27.649,39.006-40.911,27.03-26.389,40.911-39.005,28.27-25.081,42.743-37.025c14.49-11.958,29.462-23.724,44.5-34.971,15.067-11.268,30.606-22.318,46.185-32.843,15.619-10.552,31.7-20.861,47.8-30.641,16.144-9.809,32.742-19.353,49.331-28.365,16.647-9.043,33.736-17.8,50.793-26.015,17.122-8.25,34.678-16.187,52.181-23.591,17.581-7.436,35.579-14.533,53.495-21.092,18.009-6.594,36.424-12.825,54.735-18.52,18.411-5.727,37.219-11.067,55.9-15.874,18.794-4.836,37.969-9.261,56.992-13.154,19.145-3.918,38.662-7.4,58.01-10.36,19.482-2.977,39.317-5.5,58.954-7.491,19.779-2.009,39.907-3.54,59.824-4.549,20.067-1.017,40.463-1.533,60.62-1.533s40.552.516,60.62,1.533c19.917,1.009,40.045,2.54,59.824,4.549,19.636,1.994,39.471,4.514,58.954,7.491,19.348,2.956,38.865,6.442,58.01,10.36,19.024,3.892,38.2,8.318,56.993,13.154,18.682,4.806,37.489,10.147,55.9,15.874,18.31,5.7,36.726,11.926,54.735,18.52,17.915,6.559,35.913,13.656,53.495,21.092,17.5,7.4,35.059,15.34,52.181,23.591,17.054,8.217,34.143,16.97,50.794,26.015,16.589,9.012,33.187,18.555,49.331,28.365,16.1,9.78,32.176,20.089,47.8,30.641,15.579,10.525,31.117,21.575,46.185,32.843,15.039,11.247,30.011,23.013,44.5,34.971,14.47,11.942,28.851,24.4,42.743,37.025s27.645,25.738,40.911,39.005,26.39,27.031,39.005,40.911,25.081,28.27,37.025,42.743c11.958,14.49,23.724,29.462,34.971,44.5,11.268,15.067,22.318,30.606,32.843,46.185,10.555,15.624,20.864,31.7,30.641,47.8,9.81,16.144,19.353,32.741,28.365,49.331,9.045,16.651,17.8,33.74,26.015,50.794,8.248,17.117,16.185,34.673,23.591,52.181,7.436,17.581,14.532,35.579,21.092,53.495,6.594,18.009,12.825,36.424,18.52,54.735,5.727,18.411,11.067,37.219,15.874,55.9,4.836,18.794,9.261,37.969,13.154,56.993,3.918,19.145,7.4,38.662,10.36,58.01,2.977,19.483,5.5,39.318,7.491,58.954,2.009,19.779,3.54,39.907,4.549,59.824,1.017,20.067,1.533,40.463,1.533,60.62s-.516,40.552-1.533,60.62c-1.009,19.917-2.54,40.044-4.549,59.824-1.994,19.636-4.514,39.471-7.491,58.954-2.956,19.348-6.442,38.865-10.36,58.01-3.892,19.023-8.318,38.2-13.154,56.993-4.806,18.682-10.147,37.49-15.874,55.9-5.695,18.308-11.926,36.724-18.52,54.735-6.56,17.915-13.656,35.913-21.092,53.495-7.406,17.508-15.343,35.064-23.591,52.181-8.218,17.055-16.97,34.144-26.015,50.793-9.011,16.589-18.555,33.186-28.365,49.331-9.778,16.092-20.087,32.172-30.641,47.8-10.524,15.578-21.574,31.117-32.843,46.185-11.248,15.04-23.014,30.012-34.971,44.5-11.942,14.47-24.4,28.851-37.025,42.743s-25.738,27.644-39.005,40.911-27.031,26.39-40.911,39.005-28.271,25.082-42.743,37.025c-14.492,11.96-29.465,23.727-44.5,34.971-15.067,11.268-30.606,22.318-46.185,32.843-15.621,10.553-31.7,20.862-47.8,30.64-16.143,9.809-32.74,19.352-49.331,28.365-16.652,9.046-33.741,17.8-50.794,26.014-17.122,8.251-34.678,16.188-52.181,23.591-17.58,7.435-35.578,14.532-53.495,21.092-18.011,6.594-36.426,12.825-54.735,18.52-18.41,5.726-37.217,11.067-55.9,15.874-18.8,4.836-37.971,9.261-56.993,13.154-19.145,3.918-38.662,7.4-58.01,10.36-19.483,2.977-39.318,5.5-58.954,7.491-19.779,2.009-39.907,3.54-59.824,4.549C1669.052,2816.984,1648.656,2817.5,1628.5,2817.5Zm-5.851-1740.519h0a136.3,136.3,0,0,1,19.744,1.427,123.712,123.712,0,0,1,18.489,4.158,105.662,105.662,0,0,1,16.668,6.707,85.688,85.688,0,0,1,14.28,9.075c1.02.8,2.028,1.589,3.057,2.393,54.639,42.7,54.639,42.7,54.622,759.974q0,19.584,0,39.885l1.049,711.017,83.9-204.5c49.634-118.02,214.7-528.148,334.534-826.375l249.59-620.828h-119.55l-39.851,106.966c-15.4,41.737-38.821,102.869-67.723,176.788-27.082,69.264-57.742,146.612-88.664,223.684-31.147,77.632-60.243,149.2-84.142,206.97-25.781,62.322-44.508,106.116-54.155,126.648-4.795,10.851-9.856,21.552-15.042,31.805-4.846,9.579-9.576,18.329-14.059,26a192.9,192.9,0,0,1-11.306,17.549c-3.164,4.213-5.509,6.44-6.783,6.44-3.121,0-5.75-33.453-7.6-96.743-1.887-64.417-2.884-157.161-2.884-268.206,0-104.621-.088-177.467-1.262-234.547-.617-29.989-1.525-54.533-2.775-75.035-1.308-21.43-3.032-39.2-5.27-54.315a257.023,257.023,0,0,0-8.564-39.174,153.622,153.622,0,0,0-12.656-29.613,191.075,191.075,0,0,0-17.547-25.632c-7-8.809-15.253-18.173-23.236-27.228-24.357-27.678-58.63-50.948-99.114-67.3a338.014,338.014,0,0,0-61-18.106,326.8,326.8,0,0,0-63.076-6.279,281.74,281.74,0,0,0-46.123,3.7,241.958,241.958,0,0,0-90.342,34.771,314.213,314.213,0,0,0-44.488,34.459,323.879,323.879,0,0,0-38,41.735,249.674,249.674,0,0,0-27.676,45.176c-6.535,13.614-11.079,23.522-14.551,36.672a191.5,191.5,0,0,0-4.474,23.313c-1.239,9.173-2.22,19.91-3,32.825-3.146,52.173-3.146,141.455-3.146,319.328,0,110.677-1,202.514-2.884,265.583-1.842,61.575-4.471,94.122-7.6,94.122-1.285,0-3.208-1.307-5.718-3.884a92.671,92.671,0,0,1-8.569-10.667,314.3,314.3,0,0,1-21.367-35.787c-5.219-10.438-21.759-49.568-47.831-113.161-24.152-58.91-55.908-137.436-89.418-221.111-59.027-147.394-136.617-343.6-177.361-452.252l-29.363-75.5H828.754l212.885,526.446c75.816,189.2,165.365,410.521,237.319,588.355l.493,1.217c38.089,94.139,70.984,175.44,93.577,231.558l119.55,292.587,5.245-726.748c-.1-1.676-2.509-41.739-5.425-102.379-2.717-56.5-6.415-142.474-8.6-231.194-2.461-99.72-2.556-182.518-.279-246.094,1.352-37.75,3.565-69.052,6.578-93.036a319.412,319.412,0,0,1,5.6-32.786c2.19-9.266,4.672-16.418,7.376-21.258a137.435,137.435,0,0,1,24.135-31.615,131.727,131.727,0,0,1,29.589-21.623A139.835,139.835,0,0,1,1622.648,1076.98Z"
        transform="translate(-450.5 -461.5)"
      />
    </svg>
  );
}

export default Logo;
