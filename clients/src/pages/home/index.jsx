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
          fontSize={14}
          textColor={"white"}
          padding={"8px 18px"}
          borderSize={1}
          bgColor={"green"}
          borderColor={"green"}
          height={"auto"}
          radius={6}
          onClick={handleClick}
        >
          Show Toast
        </Button>
        <Button onClick={() => alert("Primary clicked")}>Primary Button</Button>
        <Button
          loading={true}
          textColor={"white"}
          onClick={() => alert("Secondary clicked")}
        >
          Click
        </Button>
        <Button
          loading={true}
          bgColor={"black"}
          textColor={"white"}
          borderSize={1}
          fontSize={13}
          borderColor={"black"}
          onClick={() => alert("Outline clicked")}
        >
          Click
        </Button>
        <Button fontSize={13} disabled>
          Disabled
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
