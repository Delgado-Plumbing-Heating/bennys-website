import Navbar from "./Navbar";

export default function TopHeader() {
  return (
    <header className="w-full bg-blue-900 p-5">
      <section className="flex flex-col md:flex-row md:justify-between ">
        <h1 className="text-white font-sans font-bold text-4xl">
          Delgado's Plumbing
        </h1>
        <Navbar />
      </section>
    </header>
  );
}
