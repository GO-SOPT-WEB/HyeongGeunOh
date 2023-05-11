import { Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./MainPage"
import InfoCardSection from "../components/template/InfoCardSection"
import Error404 from "../components/atom/Error404"

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense>
                <Routes>
                    <Route path="/" element={<MainPage />}>
                        <Route path="/:type" element={<Error404 error="도시 이름을 입력해주세요!" />} />
                        <Route path="/:type/:area" element={<InfoCardSection />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router;