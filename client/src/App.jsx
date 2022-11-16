import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Landing, Error, ProtectedRoute } from "./pages";
import {
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
  AddJob,
  AllUsers
} from "./pages/Dashboard";
import RestrictedRoute from "./pages/RestrictedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Nested Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
          <Route path="all-users" element={<RestrictedRoute><AllUsers /></RestrictedRoute>} />
        </Route>

        <Route path="/register" element={<Register />}></Route>
        <Route path="/Landing" element={<Landing />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
