import Image from "next/image";

export default function Home() {
  return (
    <main className="flex p-16 min-h-screen flex-col justify-center items-center">
      <div className={"flex flex-row space-x-24 items-center"}>
        <div className={"flex flex-col space-y-4"}>
          <div className={"text-4xl font-semibold max-w-lg"}>
            Website for Infrastructure Delivery Pipeline
          </div>
          <div className={"text-xl text-gray-400"}>Ivanna Kolesnyk</div>
        </div>
        <div className={"border border-white rounded p-8 text-xl space-y-4"}>
          <div>NextJS</div>
          <div>React</div>
          <div>TailwindCSS</div>
          <div>Typescript</div>
          <div>ESLint</div>
        </div>
      </div>
    </main>
  );
}
