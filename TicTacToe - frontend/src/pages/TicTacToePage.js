import Polje from "../components/Polje";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import ZaigrajPonovno from "../components/ZaigrajPonovno";
import "react-toastify/dist/ReactToastify.css";
import "../css/App.css";
import UnosPodataka from "../components/UnosPodataka";
import axios from "axios";

const TicTacToePage = ({ saveDataFunction }) => {
  const [vrijednostPolja, setVrijednostPolja] = useState(true);
  const [igra, setIgra] = useState(Array(9).fill(null));
  const [pratiIgru, setPratiIgru] = useState(false);
  const [imeIgracaX, setImeIgracaX] = useState("");
  const [imeIgracaO, setImeIgracaO] = useState("");
  const [provjeraPostojecihIgraci, setProvjeraPostojecihIgraca] =
    useState(false);
  let today = new Date();
  const [statusIgre, setStatusIgre] = useState("");
  const [polja, setPolja] = useState([11, 11, 11]);

  const spremiPolje = async (i) => {
    if (igra[i] || statusIgre) {
      return;
    }
    igra[i] = vrijednostPolja ? "X" : "O";
    setPratiIgru(true);
    pobjeda(igra);
    setVrijednostPolja(!vrijednostPolja);
  };

  const pobjeda = (igra) => {
    axios
      .post("http://localhost:8080/check/pobjeda", igra)
      .then((response) => {
        let status = response.data.status;

        let podaci;

        let vrijeme = `${today.getDate()}/${
          today.getMonth() + 1
        }/${today.getFullYear()}  ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

        if (status === "X" || status === "O") {
          let pobjednickapolja = response.data.pobjednickaPolja[0];
          let pobjednik = vrijednostPolja ? imeIgracaX : imeIgracaO;
          setPolja(pobjednickapolja);
          podaci = {
            playerX: imeIgracaX,
            playerO: imeIgracaO,
            time: vrijeme,
            winner: status,
          };
          setStatusIgre(status);
          saveDataFunction(podaci);
          toast.success("Pobjedio/la je: " + pobjednik, {
            position: "top-center",
          });
        } else if (status === "Izjednačeno je") {
          podaci = {
            playerX: imeIgracaX,
            playerO: imeIgracaO,
            time: vrijeme,
            winner: "Draw",
          };
          setStatusIgre(status);
          saveDataFunction(podaci);
          toast.warn("Izjednačeno je!", {
            position: "top-center",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error.response);
      });
  };

  const spremanjeIgraca = (imeX, imeO) => {
    setImeIgracaO(imeO);
    setImeIgracaX(imeX);
    setProvjeraPostojecihIgraca(true);
  };

  const kreniIspocetka = (igra) => {
    setPolja([11, 11, 11]);
    setStatusIgre(null);
    setIgra(Array(9).fill(null));
    setPratiIgru(false);
  };
  //console.log(listOfWinners);

  return (
    <div>
      <div className="inner-container">
        <div className="unos">
          <UnosPodataka
            igraci={provjeraPostojecihIgraci}
            spremiIgraca={spremanjeIgraca}
          />
        </div>

        <div className="divKriz">
          <p hidden={!provjeraPostojecihIgraci} style={{ marginTop: "-37px" }}>
            Sada je na redu: {vrijednostPolja ? imeIgracaX : imeIgracaO}
          </p>
          <div>
            <Polje
              id="0"
              poljaPobjede={polja}
              igraci={provjeraPostojecihIgraci}
              value={igra[0]}
              spremiRezultat={() => {
                spremiPolje(0);
              }}
            />

            <Polje
              id="1"
              poljaPobjede={polja}
              igraci={provjeraPostojecihIgraci}
              value={igra[1]}
              spremiRezultat={() => {
                spremiPolje(1);
              }}
            />
            <Polje
              id="2"
              poljaPobjede={polja}
              igraci={provjeraPostojecihIgraci}
              value={igra[2]}
              spremiRezultat={() => {
                spremiPolje(2);
              }}
            />
          </div>
          <div>
            <Polje
              poljaPobjede={polja}
              id="3"
              igraci={provjeraPostojecihIgraci}
              value={igra[3]}
              spremiRezultat={() => {
                spremiPolje(3);
              }}
            />
            <Polje
              poljaPobjede={polja}
              id="4"
              igraci={provjeraPostojecihIgraci}
              value={igra[4]}
              spremiRezultat={() => {
                spremiPolje(4);
              }}
            />
            <Polje
              id="5"
              poljaPobjede={polja}
              igraci={provjeraPostojecihIgraci}
              value={igra[5]}
              spremiRezultat={() => {
                spremiPolje(5);
              }}
            />
          </div>
          <div>
            <Polje
              id="6"
              poljaPobjede={polja}
              igraci={provjeraPostojecihIgraci}
              value={igra[6]}
              spremiRezultat={() => {
                spremiPolje(6);
              }}
            />
            <Polje
              id="7"
              poljaPobjede={polja}
              igraci={provjeraPostojecihIgraci}
              value={igra[7]}
              spremiRezultat={() => {
                spremiPolje(7);
              }}
            />
            <Polje
              id="8"
              poljaPobjede={polja}
              igraci={provjeraPostojecihIgraci}
              value={igra[8]}
              spremiRezultat={() => {
                spremiPolje(8);
              }}
            />
          </div>
          <ZaigrajPonovno value={pratiIgru} zaigrajPonovno={kreniIspocetka} />
          {/* {listOfWinners.map((winner) => (
            <div>{winner.time}</div>
          ))} */}
        </div>

        <ToastContainer style={{ marginTop: "3%" }} />
      </div>
      {/*<Tablica dataSource={listOfWinners} >*/}
    </div>
  );
};

export default TicTacToePage;
