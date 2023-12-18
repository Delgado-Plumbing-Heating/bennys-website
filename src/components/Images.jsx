export default function Images() {
  return (
    <div className="max-w-7xl ml-auto mr-auto">
      <div className="flex lg:flex-row lg:max-w-sm sm:flex-col max-w-md ml-5 mt-10 gap-5">
        <img
          src="images/sink3.webp"
          alt="Image of a sink working properly"
          className="hover:scale-105 transition duration-500"
        />
        <img
          src="images/image.webp"
          alt="Image of a dishwasher"
          className="hover:scale-105 transition duration-500"
        />
        <img
          src="images/sink.webp"
          alt="Image of a marble bathroom sink"
          className="hover:scale-105 transition duration-500"
        />
      </div>
    </div>
  );
}
