import { useNavigate } from "react-router-dom";
function HigherOrderComponent(WrappedComponent) {
  return function ChildComponent(props) {
    const navigate = useNavigate;
    const userName = "kalaisurya";
    const params = {
      userName,
      navigate,
      ...props,
    };
    return <WrappedComponent {...params} />;
  };
}

export default HigherOrderComponent;
