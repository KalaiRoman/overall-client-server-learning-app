import { useNavigate } from "react-router-dom";
function HigherOrderComponent(WrappedComponent) {
  return function ChildComponent(props) {
    const navigate = useNavigate;
    const userName = "kalaisurya";

    function buttonSections(params) {
      return (
        <>
          <button style={{ background: "red", width: "100%" }}>{params}</button>
        </>
      );
    }
    function capitalLetterChange(paramsName) {
      return paramsName.toUpperCase();
    }
    function lowerLetterChange(paramsName) {
      return paramsName.toLowerCase();
    }
    const params = {
      functionNames: {
        capitalLetterChange: capitalLetterChange,
        lowerLetterChange: lowerLetterChange,
      },
      buttons: buttonSections,
      userName,
      navigate,
      ...props,
    };
    return <WrappedComponent {...params} />;
  };
}

export default HigherOrderComponent;
