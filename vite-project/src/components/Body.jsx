import Balance from "./Balance";
import Header from "./Header";
import Income from "./Income";
import History from "./History";
import Add from "./Add";

export const Body = () => {
  return (
    <div className="main">
      <Header />
      <Balance />
      <Income />
      <History />
      <Add />
      </div>
  );
};
