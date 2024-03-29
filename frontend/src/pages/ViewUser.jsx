import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useAuth } from "../contexts/AuthContext";

export default function ViewUser() {
  const { token } = useAuth();
  const [informations, setInformations] = useState([]);

  const fetchUsersData = () => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/users`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setInformations(data);
      });
  };

  const fetchDeleteData = (event, id) => {
    event.preventDefault();
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
      }/users/${id}`,
      {
        method: "delete",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then(() => fetchUsersData())
      .catch((error) => {
        console.error("Error", error);
      });
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "full name",
      headerName: "Nom & Prénom",
      width: 200,
      valueGetter: (params) =>
        `${params.row.lastname || ""} ${params.row.firstname || ""}`,
    },
    { field: "email", headerName: "Mail", width: 200 },
    { field: "comment", headerName: "Commentaire", width: 250 },
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

  return (
    <section className="backgroundViewUser">
      <h1>Les utilisateurs</h1>
      <div className="arrayViewWines">
        <DataGrid
          style={{ border: "none" }}
          rows={informations}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
        />
      </div>
      <Link to="/accueil" className="returnViewUser">
        Retour
      </Link>
    </section>
  );
}
