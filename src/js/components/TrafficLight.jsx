import React from "react";
import { Stack } from "react-bootstrap";

const LIGHTS = [
  { color: "bg-danger", label: "stop" },
  { color: "bg-warning", label: "caution" },
  { color: "bg-success", label: "go" },
];

function TrafficLight() {
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
        {LIGHTS.map((light) => (
          <div
            key={light.label}
            className={`${light.color} rounded-circle`}
            style={{
              width: "2rem",
              height: "2rem",
              opacity: 1,
            }}
            aria-label={light.label}
          />
        ))}
      </Stack>
    </div>
  );
}

export default TrafficLight;
