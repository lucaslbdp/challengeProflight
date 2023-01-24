import LogoList from "../logoList/LogoList";
import "./init.css";

const Init = () => {

  return (
    <>
      <h3>Bienvenidos al challenge</h3>
      <div className="container__logos">
        <LogoList />
      </div>
    </>
  );
};

export default Init;
