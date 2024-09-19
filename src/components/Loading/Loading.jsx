import React from "react";


const Loading = ({
  size = 100,
  color = "red",
  textColor = "green",
  textStyle = {},
}) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          border: `8px solid ${color}`,
          borderTop: `8px solid transparent`,
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      ></div>
      <span
        style={{
          fontSize: "28px",
          color: textColor,
          fontWeight: "bold",
          letterSpacing: "1.5px",
          ...textStyle,
        }}
      >
        
      </span>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loading;
