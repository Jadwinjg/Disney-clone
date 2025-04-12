import Navbar from "./components/subcomp/Navbar";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute"; // ✅ import
import './App.css';
import Search from "./components/subcomp/Search";
import Watchlist from "./components/subcomp/Watchlist";
import Originals from "./components/subcomp/Originals";
import Series from "./components/subcomp/Series";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/movies"
          element={
            <PrivateRoute>
              <Movies />
            </PrivateRoute>
          }
        />
         
          <Route path="/search" element={<PrivateRoute><Search /></PrivateRoute>} />
          <Route path="/watchlist" element={<PrivateRoute><Watchlist /></PrivateRoute>} />
          <Route path="/originals" element={<PrivateRoute><Originals /></PrivateRoute>} />
          <Route path="/series" element={<PrivateRoute><Series /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
