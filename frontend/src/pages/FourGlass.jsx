import GlassCard from "../components/GlassCard";

export default function FourGlass() {
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
      </section>
    </div>
  );
}
