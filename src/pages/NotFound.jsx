import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="container flex justify-center items-center min-h-screen px-6 py-12 mx-auto">
        <div>
          <p className="text-sm font-medium text-special hover:text-blue-400">
            404 error
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            We can’t find that page
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for doesn`t exist or has been moved.
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-black transition-colors duration-200 hover:bg-white bg-special border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900  dark:text-gray-200 dark:border-gray-700 border-special"
            >
              Go back
            </button>

            <Link to={"/"}>
              <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-special rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                Take me home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
