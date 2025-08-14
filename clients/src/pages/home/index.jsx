import { useToast } from "../../hooks/useToast";
import { Button } from "../../shared/button";
import { RowItems } from "../style";

export const Home = () => {
  const addToast = useToast();

  const handleClick = () => {
    addToast({
      type: "success",
      title: "Action Successful",
      description: "Your action was successful.",
    });
  };

  return (
    <>
      <RowItems>
        <Button
          variant="small"
          bgColor="#2205de"
          textColor="#fff"
          onClick={handleClick}
        >
          Small Button
        </Button>
        <Button variant="medium" bgColor="#2205de" textColor="#fff">
          Medium Button
        </Button>
        <Button variant="medium" bgColor="#2205de" textColor="#fff" disabled>
          Medium Button - Disabled
        </Button>
        <Button variant="large" bgColor="#2205de" textColor="#fff">
          Large Button
        </Button>
      </RowItems>
      <RowItems>
        <div className="box blue">Option</div>
        <div className="box green">Option</div>
        <div className="box red">Option</div>
        <div className="box orange">Option</div>
        <div className="box violet">Option</div>
        <div className="box yellow">Option</div>
        <div className="box blueitem">Option</div>
      </RowItems>
    </>
  );
};
