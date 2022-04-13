import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from './pages/loginPage/LoginPage'
import ListPage from './pages/listPage/ListPage'
import SinglePage from './pages/singlePage/SinglePage'
import NewPage from './pages/newPage/NewPage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='users' element={<ListPage />}>
              <Route index element={<ListPage />} />
              <Route path=':userId' element={<SinglePage />} />
              <Route path='new' element={<NewPage />} />
            </Route>
            <Route path='products' element={<ListPage />}>
              <Route index element={<ListPage />} />
              <Route path=':productId' element={<SinglePage />} />
              <Route path='newProduct' element={<NewPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
