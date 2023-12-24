import VideoPlayer from "./VideoPlayer";

export default function MainImage() {
  return (
    <div className="mt-10 max-w-6xl mx-auto relative">
      <img src="images/tub.jpg" className="w-full ease-out" alt="Bathtub" />
      <div className="mt-10 flex justify-center gap-5">
        <VideoPlayer videoId="wcl2ECpmpD0" />
        <VideoPlayer videoId="MIR-vRlndwY" />
      </div>
      <div className="md:absolute inset-10  md:inset-36 nmd:left-14 md:max-w-md resize text-2xl font-sans rounded p-10 text-blue-900 bg-white h-min">
        Since 2019, our talented team works hard every day to provide the best
        services for our clients. We customize our offerings based on specific
        needs, so get in touch today to receive an initial quote.
        <br />
        <button className="mt-10 bg-blue-900 rounded-full hover:text-black before:ease relative h-12 w-40 overflow-hidden border border-blue-900 bg-blue-900 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-900 hover:before:-translate-x-40">
          Get a Quote
        </button>
      </div>
    </div>
  );
}
