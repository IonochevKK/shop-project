import React from "react";
import "./purchaseHistory.scss";
import Table from "../../../../components/UI Kit/Table/Table";
const column = [
  {
    header: "Наименование Курса",
    accessor: "courseName",
  },
  {
    header: "Стоимость",
    accessor: "cost",
  },
  {
    header: "Дата оплаты",
    accessor: "datePayment",
  },
];

const rows = [
  {
    courseName:
      "Современные аспекты оказания сестринской помощи в различных отделениях",
    cost: "1500",
    datePayment: "05.02.2024",
  },
  {
    courseName:
      "Современные аспекты оказания сестринской помощи в различных отделениях",
    cost: "1500",
    datePayment: "05.02.2024",
  },
  {
    courseName:
      "Современные аспекты оказания сестринской помощи в различных отделениях",
    cost: "1500",
    datePayment: "05.02.2024",
  },
];
const PurchaseHistory = () => {
  return (
    <div className="PurchaseHistory">
      <div className="container">
        <Table columns={column} rows={rows} />
      </div>
    </div>
  );
};

export default PurchaseHistory;
