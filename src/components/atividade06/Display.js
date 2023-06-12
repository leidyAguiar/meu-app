import React from "react";

export default function Display({ valor }) {
  let font = "67px";
  const len = valor.replace(/\s/g, "").length;
  if (len > 5 && len < 8) font = "45px";
  else if (len > 7 && len < 10) font = "35px";
  else if (len > 9 && len < 11) font = "30px";
  else if (len >= 11) font = "25px";
  else font = "67px";

  return (
    <div className={"display equal-btn"} style={{ fontSize: font }}>
      {" "}
      {valor}{" "}
    </div>
  );
}
