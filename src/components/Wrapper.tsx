import { Route, Routes } from "react-router-dom";
import { HomeComponent } from "./Home";

export function WrapperComponent() {
    return (
        <Routes>
            <Route path="/" element={ <HomeComponent />}></Route>
            <Route path="/home" element={ <HomeComponent />}></Route>
        </Routes>
    )
}