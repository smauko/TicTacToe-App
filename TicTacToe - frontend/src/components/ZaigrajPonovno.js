import { Button } from "antd";

const ZaigrajPonovno = ({ value, zaigrajPonovno }) => {
  //console.log({ value });

  return (
    <>
      <Button type="text" onClick={zaigrajPonovno} disabled={!value}>
        Kreni ispočetka
      </Button>
    </>
  );
};

export default ZaigrajPonovno;
