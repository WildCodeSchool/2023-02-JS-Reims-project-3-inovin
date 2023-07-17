import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Nom", width: 150 },
  { field: "color", headerName: "Cépage", width: 170 },
  {
    field: "grape_variety",
    headerName: "Variété",
    width: 540,
  },
];

export default function ViewWine() {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/wines`
    )
      .then((response) => response.json())
      .then((data) => {
        setWines(data);
      });
  }, []);

  return (
    <section className="backgroundViewWines">
      <h1>Liste des vins</h1>
      <div className="arrayViewWines">
        <DataGrid
          style={{
            border: "none",
          }}
          rows={wines}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
          checkboxSelection
        />
      </div>
    </section>
  );
}
