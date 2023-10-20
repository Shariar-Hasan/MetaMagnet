import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./assets/utils/configs/RouteList.config";
import { useSiteData } from "./contexts/SiteContext";
// import { Toaster } from "react-hot-toast";

function App() {
  const { setIsLoading } = useSiteData();
  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);
  return (
    <>
      {/* <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName="bg-white text-gray-600"
        toastOptions={{
          duration: 5000,
        }}
      /> */}
      <Routes>
        {routes.map((route, i) => (
          <Route key={i} path={route.link} element={route.page} />
        ))}
      </Routes>
    </>
  );
}

export default App;
