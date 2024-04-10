import Balance from "./Balance";
import Header from "./Header";
import Income from "./Income";

export const Body = () => {
  return (
    <div className="flex justify-start items-center flex-col">
      <Header />
      <Income />
    </div>
  );
};
