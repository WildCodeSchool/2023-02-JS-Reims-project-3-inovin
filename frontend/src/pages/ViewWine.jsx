import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ViewWine() {
  const [wines, setWines] = useState([]);

  const { token } = useAuth();

  const fetchWinesData = () => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/wines`
    )
      .then((response) => response.json())
      .then((data) => {
        setWines(data);
      });
  };

  const fetchDeleteData = (event, id) => {
    event.preventDefault();
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
      }/wines/${id}`,
      {
        method: "delete",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then(() => fetchWinesData())
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Nom", width: 150 },
    { field: "color", headerName: "Cépage", width: 170 },
    {
      field: "grape_variety",
      headerName: "Variété",
      width: 540,
    },
    {
      field: "button",
      headerName: "Modifier",
      width: 250,
      renderCell: (params) => (
        <button
          className="buttonDelete"
          type="button"
          onClick={(event) => fetchDeleteData(event, params.id)}
        >
          Supprimer
        </button>
      ),
    },
  ];

  useEffect(() => {
    fetchWinesData();
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
        />
      </div>
      <Link className="returnViewWines" to="/ajouter-mes-vins">
        Retour
      </Link>
    </section>
  );
}
