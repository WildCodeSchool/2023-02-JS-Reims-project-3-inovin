import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { pink } from "@mui/material/colors";
import verre from "../Pictures/verre.png";

export default function Creation() {
  const dosages = [
    {
      title: "Cépage 1",
      dosage: [
        {
          value: 0,
          label: "Cépage 1",
        },
        {
          value: 1,
          label: "0 ml",
        },
        {
          value: 2,
          label: "50ml",
        },
        {
          value: 3,
          label: "150ml",
        },
      ],
    },
    {
      title: "Cépage 2",
      dosage: [
        {
          value: 0,
          label: "Cépage 2",
        },
        {
          value: 1,
          label: "0ml",
        },
        {
          value: 2,
          label: "25ml",
        },
        {
          value: 3,
          label: "50ml",
        },
      ],
    },
    {
      title: "Cépage 3",
      dosage: [
        {
          value: 0,
          label: "Cépage 3",
        },
        {
          value: 1,
          label: "0ml",
        },
        {
          value: 2,
          label: "25ml",
        },
        {
          value: 3,
          label: "50ml",
        },
      ],
    },
  ];

  const style = {
    color: "black",
  };

  return (
    <section className="backgroundCreation">
      <h1>Atelier de Création</h1>
      <div className="dosages">
        {dosages.map((dosage) => (
          <Stack sx={{ height: 150 }} spacing={10} direction="row">
            <Slider
              aria-label={dosage.title}
              orientation="vertical"
              valueLabelDisplay="auto"
              labelPlacement="top"
              defaultValue={0}
              sx={{
                color: pink[800],
              }}
              marks={dosage.dosage}
              min={0}
              max={3}
            />
          </Stack>
        ))}
      </div>
      <div className="image">
        <img className="verreVide" src={verre} alt={verre} />
      </div>

      <div className="confirmationLink">
        <Link style={style} to="/atelier-creation/recapitulatif">
          Validé
        </Link>
      </div>
    </section>
  );
}
