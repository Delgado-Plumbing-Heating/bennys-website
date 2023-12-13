import Navbar from "./Navbar";

export default function TopHeader() {
  return (
    <header className="w-full bg-blue-900 p-5">
      <div className="flex flex-col md:flex-row md:justify-between">
        <h1 className="text-white font-sans font-bold text-4xl ml-5">
          Delgado's Plumbing & Heating
        </h1>
        <Navbar />
      </div>
    </header>
  );
}
