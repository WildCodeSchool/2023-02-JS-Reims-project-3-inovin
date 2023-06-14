import GlassCard from "../components/GlassCard";

export default function FourGlass() {
  return (
    <section>
      <h1 className="title_4glasses">Affinez vos goûts</h1>

      <div className="glasses">
        <GlassCard title=" Vin 1" isCompleted={false} />
        <GlassCard title=" Vin 2" isCompleted />
        <GlassCard title=" Vin 3" isCompleted />
        <GlassCard title=" Vin 4" isCompleted />
      </div>
    </section>
  );
}
