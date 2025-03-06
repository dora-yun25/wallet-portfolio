import MyFarms from "./MyFarms";

const FarmMain = () => {
  return (
    <div className="w-full">
      <div className="clss">
        <h1 className="text-5xl leading-[120%] font-semibold text-[var(--color-gray-6)] dark:text-white">
          Farm
        </h1>
      </div>
      <div className="w-full overflow-x-auto mt-6">
        {/* My Farms Table */}
        <MyFarms />
      </div>
    </div>
  );
};

export default FarmMain;
