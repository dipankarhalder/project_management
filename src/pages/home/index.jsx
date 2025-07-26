import { useToast } from "../../hooks/useToast";

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
    <div>
      <button onClick={handleClick}>Show Toast</button>
    </div>
  );
};
