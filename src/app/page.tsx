import Playground from "@/components/playground/Playground";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center">
      <Header/>
      <div className="absolute z-10 rounded-full -top-[420px] aspect-square w-[500px] bg-neutral-900 blur-3xl"/>
      <Playground/>
    </main>
  );
}
