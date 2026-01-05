import HalvingTimer from "../components/HalvingTimer";
import FeeCards from "../components/FeeCards";

export default function Home() {
  return (
    <main>
      <section className="min-h-screen flex items-center justify-center">
        <HalvingTimer />
      </section>

      <section className="p-8">
        <FeeCards />
      </section>
    </main>
  );
}

