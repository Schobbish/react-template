import React, { useEffect, useState } from "react";
import { apiAxios } from "../util/api";
import { DebugTable } from "../components/DebugTable";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    apiAxios
      .get("/api/hello_world")
      .then((res) => setMessage(res.data))
      .catch(() => setMessage("epic api fail!!"));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-white text-center bg-black">
      <h1 className="text-6xl whitespace-pre-wrap">{message}</h1>
      <DebugTable variables={{ message }} />
    </div>
  );
}
