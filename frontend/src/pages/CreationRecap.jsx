import { Box, TextField } from "@mui/material";
import verrePlein from "../Pictures/verre-plein.png";
import Navbar from "../components/Navbar";

export default function CreationRecap() {
  return (
    <div>
      <Navbar />
      <section className="backgroundCreationRecap">
        <h1>"Mon Vin" Résumé</h1>
        <div className="recap">
          <h2> Cépage 1 : 150ml</h2>
          <h2> Cépage 2 : 50ml</h2>
          <h2> Cépage 3 : 50ml</h2>
        </div>
        <div className="imageVerrePlein">
          <img src={verrePlein} alt="Verre Plein" />
        </div>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "22rem" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-size-normal"
            label="ce vin a été réaliser avec une touche de ..."
            variant="filled"
          />
        </Box>
        <button className="buttonRecap" type="submit">
          Validé la composition
        </button>
      </section>
    </div>
  );
}
