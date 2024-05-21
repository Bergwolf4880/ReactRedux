import DotLoader from "react-spinners/ClipLoader";


function Spinner() {

  
  return (
    <div className="sweet-loading">
      <DotLoader
        color={"#ffffff"}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
      );
    }
    
    export default Spinner;