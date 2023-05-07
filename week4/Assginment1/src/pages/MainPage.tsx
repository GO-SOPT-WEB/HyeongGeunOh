import { Outlet } from "react-router-dom";
import SearchInputForm from "../components/SearchInput";

const MainPage = () => {
    return <>
        <SearchInputForm />
        <Outlet />
    </>
}

export default MainPage;