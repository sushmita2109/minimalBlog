import catusImg from "../assets/cactus_img.jpg";

export const CardComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "368px",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          padding: "16px",

          border: "1px ",
          borderRadius: "5px",
          boxShadow: "0px 30px 100px 0px rgba(17, 23, 41, 0.05)",
        }}
      >
        <div>
          <img src={catusImg} alt="cardImage" style={{ width: "336px" }} />
        </div>
        <div>
          <p
            style={{
              backgroundColor: "#B39DDB",
              color: "#9D00FF",

              borderRadius: "5px",
              border: "1px solid rgb(179, 157, 219)",
              display: " inline",
              fontWeight: "500",
            }}
          >
            Design
          </p>
        </div>

        <h3>Embracing Minimalisim</h3>
        <p style={{ color: "#C0C0C0" }}>
          {" "}
          From minimalist sculptures to minimalist painting, this blog will
          inspire you to appericate the beauty that lies in simplicity.
        </p>
        <hr />
        <p
          style={{ marginTop: "20px", marginBottom: "20px", color: "#C0C0C0" }}
        >
          Annie Spratt
        </p>
      </div>
    </div>
  );
};
