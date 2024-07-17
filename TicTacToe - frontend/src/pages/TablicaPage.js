import Tablica from "../components/Tablica";

const TablicaPage = ({ dataSource }) => {
  //console.log("iz page", dataSource);
  //console.log(Array.isArray(dataSource));
  return <Tablica dataSource={dataSource} />;
};

export default TablicaPage;
