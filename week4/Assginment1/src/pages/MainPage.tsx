import { Outlet } from "react-router-dom";
import SearchInputForm from "../components/template/SearchInputForm";

const MainPage = () => {
    return <>
        <SearchInputForm />
        <Outlet />
    </>
}

export default MainPage;