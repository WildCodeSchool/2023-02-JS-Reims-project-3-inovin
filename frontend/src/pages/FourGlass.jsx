import { Link } from "react-router-dom";
import GlassCard from "../components/GlassCard";
import { useAuth } from "../contexts/AuthContext";

export default function FourGlass() {
  const { isAdmin } = useAuth();
  return (
    <div className="BackgroundGlass">
      <section>
        <h1 className="title_4glasses">Affinez vos goûts</h1>

        <div className="glasses">
          <GlassCard title="VIN 1" isCompleted />
          <GlassCard title="VIN 2" isCompleted />
          <GlassCard title="VIN 3" isCompleted />
          <GlassCard title="VIN 4" isCompleted={false} />
        </div>
        {isAdmin && (
          <Link to="ajoutermesvins" className="ajoutermesvins">
            Ajouter mes vins
          </Link>
        )}
      </section>
    </div>
  );
}
