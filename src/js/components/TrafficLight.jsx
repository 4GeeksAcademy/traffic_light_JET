import React, { useState } from "react";
import { Stack } from "react-bootstrap";

const LIGHTS = [
  { color: "bg-danger", label: "stop" },
  { color: "bg-warning", label: "caution" },
  { color: "bg-success", label: "go" },
];

function TrafficLight() {
  const [shiningIndex, setShiningIndex] = useState(null);
  const handleClick = (idx) => {
    setShiningIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="text-center">
      <div
        style={{
          width: "0.5rem",
          height: "3rem",
          backgroundColor: "black",
          margin: "0 auto",
        }}
      />
      <Stack
        direction="vertical"
        gap={3}
        className="align-items-center p-3 bg-dark rounded mx-auto"
        style={{ width: "4rem" }}
      >
        {LIGHTS.map((light, idx) => (
          <div
            key={light.label}
            role="button"
            tabIndex={0}
            className={`
              ${light.color}
              rounded-circle
              ${shiningIndex === idx ? "shine" : ""}
            `}
            onClick={() => handleClick(idx)}
            onKeyDown={(e) => e.key === "Enter" && handleClick(idx)}
            style={{ width: "2rem", height: "2rem" }}
            aria-label={light.label}
          />
        ))}
      </Stack>
    </div>
  );
}

export default TrafficLight;
