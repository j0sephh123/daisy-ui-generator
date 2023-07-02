import { lazy } from "react";
import TheNavbar from "./components/TheNavbar";
import Builder from "./components/Builder";

const Dialog = lazy(() => import("./components/Dialog"));

export default function App() {
  return (
    <>
      <TheNavbar />
      <Builder />
      <Dialog />
    </>
  );
}
