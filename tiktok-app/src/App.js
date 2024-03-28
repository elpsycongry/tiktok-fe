import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {publicRoutes} from "./routes";
import { DefaultLayout } from "./component/Layout";
import {Fragment} from "react";


function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {
                        publicRoutes.map((route, index) => {
                            let Page = route.component;
                            let Layout = DefaultLayout;
                            if (route.layout) {
                                Layout = route.layout
                            } else if (route.layout === null) {
                                Layout = Fragment
                            }
                            console.log(Page)
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={<Layout >
                                        <Page/>
                                </Layout>}/>)
                        })
                    }

                    {/*{publicRoutes.map((route, index) => {*/}
                    {/*    const Layout = route.layout === null ? Fragment : DefaultLayout*/}
                    {/*    const Page = route.component;*/}
                    {/*    return (*/}
                    {/*        <Route*/}
                    {/*            key={index}*/}
                    {/*            key={index}*/}
                    {/*            path={route.path}*/}
                    {/*            element={*/}
                    {/*                <Layout>*/}
                    {/*                    <Page />*/}
                    {/*                </Layout>*/}
                    {/*            }/>)*/}
                    {/*})}*/}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
