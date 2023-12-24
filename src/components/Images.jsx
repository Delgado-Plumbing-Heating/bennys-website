export default function Images() {
  return (
    <div className="max-w-7xl mr-auto sm:ml-auto sm:mr-auto">
      <div className="grid col-span-1 lg:grid-cols-3 ml-5 mt-10 gap-5">
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

        <img
          src="images/sink4.jpg"
          alt="Image of a sink"
          className="hover:scale-105 transition duration-500 sink-tools "
        />

        <img
          src="images/tools.jpg"
          alt="Image of a sink"
          className="hover:scale-105 transition duration-500 sink-tools"
        />

        <img
          src="images/sink2.webp"
          alt="Image of a sink"
          className="hover:scale-105 transition duration-500"
        />
      </div>
    </div>
  );
}

// flex flex-col md:flex-col lg:flex-row  lg:max-w-sm max-w-md
