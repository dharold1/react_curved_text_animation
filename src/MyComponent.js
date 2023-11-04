import ReactCurvedText from "react-curved-text";

const MyComponent = () => {
  return (
    <ReactCurvedText
      width={370}
      height={300}
      cx={190}
      cy={120}
      rx={100}
      ry={100}
      startOffset={50}
      reversed={false}
      text="react-curved-text"
      textProps={{ style: { fontSize: 24 } }}
      textPathProps={null}
      tspanProps={null}
      ellipseProps={null}
      svgProps={null}
    />
  );
};

export default MyComponent;
