import Clock from "@/components/clock";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-cyan-900 text-slate-300">
      <h1 className="text-5xl font-extralight">Pomodoro</h1>
      <Clock />
    </div>
  );
}
