import Button from "@/components/button";
import ButtonContainer from "@/components/button/buttonContainer";
import Clock from "@/components/clock";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center p-3 bg-cyan-900 text-slate-300">
      <h1 className="text-5xl font-extralight">Pomodoro</h1>
      <Clock />
    </div>
  );
}
