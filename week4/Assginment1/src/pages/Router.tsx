import { Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./MainPage"
import InfoCardSection from "../components/template/InfoCardSection"

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense>
                <Routes>
                    <Route path="/" element={<MainPage />}>
                        <Route path="/:type/:area" element={<InfoCardSection />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router;