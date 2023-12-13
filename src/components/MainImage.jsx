export default function MainImage() {
  return (
    <div className="mt-10 max-w-6xl ml-auto mr-auto relative">
      <img src="images/tub.jpg" />
      <div className="absolute inset-28 left 3/4 max-w-md text-2xl font-sans p-5 text-blue-900">
        Since 2019, our talented team works hard everyday to provide the best
        services for our clients. We customize our offerings based on specific
        needs, so get in touch today to receive an initial quote.
        <br />
        <button className="p-4 mt-10 bg-white rounded-full hover:text-black">
          Get a Quote
        </button>
      </div>
    </div>
  );
}
