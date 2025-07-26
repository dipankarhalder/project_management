import { useToast } from "../../hooks/useToast";
import { Button } from "../../shared/button";

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
    <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
      <Button onClick={handleClick}>Show Toast</Button>
      <Button onClick={() => alert("Primary clicked")}>Primary</Button>
      <Button
        variant="secondary"
        textColor="#ffffff"
        onClick={() => alert("Secondary clicked")}
      >
        Click
      </Button>
      <Button
        variant="outline"
        bgColor="#ffffff"
        textColor="#000000"
        borderColor="#000000"
        onClick={() => alert("Outline clicked")}
      >
        Click
      </Button>
      <Button disabled>Disabled</Button>
    </div>
  );
};
