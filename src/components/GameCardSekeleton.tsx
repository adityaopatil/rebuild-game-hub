const GameCardSekeleton = () => {
  return (
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md dark:bg-gray-700 lg:aspect-none animate-pulse border border-gray-300">
      <div>
        <div className="h-60 w-full dark:bg-gray-500 bg-gray-200"></div>
      </div>
      <div className="my-5 mx-5 flex justify-between">
        <div>
          <div className="h-6 w-80 sm:w-20 md:w-40 rounded-md dark:bg-gray-600 bg-gray-200 mb-2 w-1/2"></div>
          <div className="h-6 w-80 sm:w-20 md:w-40 rounded-md dark:bg-gray-600 bg-gray-200 w-1/4"></div>
        </div>
        <div className="p-2 dark:bg-gray-600 bg-gray-100 font-semibold rounded-md h-11 w-12"></div>
      </div>
    </div>
  );
};

export default GameCardSekeleton;
