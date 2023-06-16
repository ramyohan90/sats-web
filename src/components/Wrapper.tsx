import { Route, Routes } from "react-router-dom";
import { HomeComponent } from "./home/Home";
import { SearchComponent } from "./search/Search";

export function WrapperComponent() {
    return (
        <Routes>
            <Route path="/" element={ <HomeComponent />}></Route>
            <Route path="/home" element={ <HomeComponent />}></Route>
            <Route path="/search" element={ <SearchComponent />}></Route>
        </Routes>
    )
}