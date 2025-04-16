import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";

const SheetData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRDqeBHRnmOjmUqvrUb3JkVZqc37Yxiu3bjs_KW-yb8u7b0Ftcm6v7RD7OquRCH95KR091ANjGvxC-v/pubhtml",
      simpleSheet: true,
    })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Données Google Sheets</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.Nom} - {item.Email} - {item.Message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SheetData;
