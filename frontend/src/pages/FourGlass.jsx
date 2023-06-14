import GlassCard from "../components/GlassCard";

export default function FourGlass() {
  return (
    <section>
      <h1 className="title_4glasses">Affinez vos goûts</h1>

      <div className="glasses">
        <GlassCard title="VIN 1" isCompleted={false} />
        <GlassCard title="VIN 2" isCompleted />
        <GlassCard title="VIN 3" isCompleted />
        <GlassCard title="VIN 4" isCompleted />
      </div>
    </section>
  );
}
