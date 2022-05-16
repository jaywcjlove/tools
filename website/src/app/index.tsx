import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import UrlEncode from "@wcj/react-url-encode";
import TextCase from "@wcj/react-text-case";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<UrlEncode />} />
        <Route path="/text-case" element={<TextCase />} />
      </Route>
    </Routes>
  );
}
