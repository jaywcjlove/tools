import { Routes, Route } from "react-router-dom";
import URLEncode from "@wcj/react-url-encode";
import TextCase from "@wcj/react-text-case";
import "@wcj/dark-mode";
import Layout from "./Layout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<URLEncode />} />
        <Route path="/text-case" element={<TextCase />} />
      </Route>
    </Routes>
  );
}
