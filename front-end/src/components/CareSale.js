function CareScale({ scaleValue, careType }) {
     const range = [1, 2, 3];
     const scaleType = careType === "light" ? "☀️" : "💧";

     return (
          <div 
               onClick={() => {
                    alert(`This plant requires a small/moderate/large amount of ${scaleType}`);
               }}
          >
               {range.map((rangeElem) => (scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null))}
          </div>
     );
}

export default CareScale;
