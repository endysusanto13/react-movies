export const PageNotFound = () => (
  <div className="bg-white min-h-screen flex flex-col lg:relative">
    <div className="flex-grow flex flex-col">
      <main className="flex-grow flex flex-col bg-white">
        <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 my-auto py-16 sm:py-32">
            <p className="text-3xl font-semibold text-indigo-600 uppercase tracking-wide">
              404 error
            </p>
            <h1 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-2 text-base text-gray-500">
              We can't seem to find the page you’re looking for.
            </p>
            <div className="mt-6">
              <a
                href="/"
                className="text-base font-medium text-indigo-600 hover:text-indigo-500"
              >
                Go back to home page<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
    <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="https://image.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg"
        alt=""
      />
    </div>
  </div>
);
