import HeaderSection from "./sections/HeaderSection";
import ActionsSection from "./sections/ActionsSection";

export default function Home() {
  return (
    <main className="dashboard page">
      <HeaderSection />
      <ActionsSection />
    </main>
  );
}
