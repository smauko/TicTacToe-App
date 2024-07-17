import { Button } from "antd";
import "../css/App.css";

const Polje = ({ id, poljaPobjede, igraci, value, spremiRezultat }) => {
  let noviId = parseInt(id, 10);

  return (
    <>
      <Button
        className="button"
        onClick={spremiRezultat}
        disabled={!igraci}
        danger={poljaPobjede.includes(noviId)}
      >
        {value ? value : " - "}
      </Button>
    </>
  );
};

export default Polje;
