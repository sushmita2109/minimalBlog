import { CardComponent } from "../Components/CardComponent";

export const Homepage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "530px",
      }}
    >
      <CardComponent />
    </div>
  );
};
