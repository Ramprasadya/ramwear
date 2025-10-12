import type { CSSProperties } from "react";
import { HashLoader, } from "react-spinners";

const override: CSSProperties = {
  position: "absolute",      
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};



const Loader = () => {
  return (
    <div  style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(255, 255, 255, 0.2)", 
        backdropFilter: "blur(2px)", 
        WebkitBackdropFilter: "blur(2px)",
        zIndex: 9999,
      }}>
      <HashLoader
        color="#36d7b7"
        loading={true}
        cssOverride={override}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
     </div>
  );
};

export default Loader;
