import { Input, Button, Form } from "antd";
import { useState } from "react";
import "../css/App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const UnosPodataka = ({ igraci, spremiIgraca }) => {
  const [imeX, setImeX] = useState("");
  const [imeO, setImeO] = useState("");
  const spremiImena = async (e) => {
    //e.preventDefault();
    //console.log("Ušao sam");
    let prvi = false;
    let drugi = false;

    await axios
      .get("http://localhost:8080/validation/name", { params: { name: imeX } })
      .then((response) => {
        //console.log("uspio sam uzeti podatke", response.data);
        if (response.data === imeX) {
          //console.log(prvi);
          prvi = true;
          //console.log(prvi);
        } else {
          toast.error(response.data, {
            position: "top-center",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error.response);
      });

    await axios
      .get("http://localhost:8080/validation/name", { params: { name: imeO } })
      .then((response) => {
        //console.log("uspio sam uzeti podatke", response.data);
        if (response.data === imeO) {
          drugi = true;
        } else {
          toast.error(response.data, {
            position: "top-center",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error.response);
      });
    //console.log("Zadnji sam: ", prvi, drugi);
    if (prvi && drugi) {
      spremiIgraca(imeX, imeO);
    }
  };
  //console.log(imeX);
  return (
    <>
      <Form layout="vertical" onFinish={spremiImena}>
        <Form.Item
          label="Upišite ime igrača X."
          name="igracX"
          /*rules={[
            {
              required: true,
              message: "Upišite ime igrača!",
            },
            {
              min: 4,
              message: "Minimalno 4 znakova!",
            },
            {
              max: 15,
              message: "Maksimalno 15 znakova!",
            },
          ]}*/
          className="unos"
          value={imeX}
          onChange={(e) => setImeX(e.target.value)}
        >
          <Input disabled={igraci} />
        </Form.Item>
        <Form.Item
          label="Upiši ime igrača O:"
          name="igracO"
          className="unos"
          value={imeO}
          onChange={(e) => setImeO(e.target.value)}
          /*rules={[
            {
              required: true,
              message: "Upišite ime igrača!",
            },
            {
              min: 4,
              message: "Minimalno 4 znakova!",
            },
            {
              max: 15,
              message: "Maksimalno 15 znakova!",
            },
          ]}*/
        >
          <Input disabled={igraci} />
        </Form.Item>
        <Form.Item>
          <Button type="default" disabled={igraci} htmlType="submit">
            Unesi
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default UnosPodataka;
