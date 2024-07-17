import { Table } from "antd";
//import { Sorter } from "./utils/sorter";

const Tablica = ({ dataSource }) => {
  //console.log(Array.isArray(dataSource));
  //console.log("iz tablice", dataSource);

  const columns = [
    {
      title: "X",
      dataIndex: "playerX",
      key: "playerX",
    },
    {
      title: "O",
      dataIndex: "playerO",
      key: "playerO",
    },
    {
      title: "Datum i vrijeme",
      dataIndex: "time",
      key: "time",
      sorter: (a, b) => a.time.localeCompare(b.time),
    },
    {
      title: "Pobjednik",
      dataIndex: "winner",
      key: "winner",
      filters: [
        {
          text: "X",
          value: "X",
        },
        {
          text: "O",
          value: "O",
        },
        {
          text: "Draw",
          value: "Draw",
        },
      ],
      onFilter: (value, record) => record.winner.indexOf(value) === 0,
    },
  ];
  return (
    <Table
      className="outer-container"
      dataSource={dataSource}
      columns={columns}
      pagination={{ pageSize: 6 }}
    />
  );
};

export default Tablica;
