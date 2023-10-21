import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./assets/utils/configs/RouteList.config";
import { useSiteData } from "./contexts/SiteContext";
import { Toaster } from "react-hot-toast";
// import { Toaster } from "react-hot-toast";

function App() {
  const { setIsLoading } = useSiteData();
  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      <Routes>
        {routes.map((route, i) => (
          <Route key={i} path={route.link} element={route.page} />
        ))}
      </Routes>
    </>
  );
}

export default App;
