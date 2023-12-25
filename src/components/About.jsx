import VideoPlayer from "./VideoPlayer";

export default function About() {
  return (
    <section className="bg-white sm:max-w-2xl sm:p-10 lg:max-w-7xl ml-auto mr-auto mt-10 ml-5  rounded-lg">
      <div className="flex flex-col items-center justify-center text-4xl font-serif">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="max-w-2xl p-4" id="about">
            <h2 className="text-2xl font-bold mb-5 ">Our Promise</h2>
            <p className="text-xl">
              Fast, efficient, and honest, Delgado Plumbing has become a
              reputable and well-known Plumbing Service. Our team is up for
              every job, managing projects with the skill and experience our
              clients have come to expect. We want our customers to be satisfied
              with our work, which is why we provide open communication channels
              throughout the duration of each project.
            </p>{" "}
            <br />
            <p className="text-xl">
              At risus viverra adipiscing at in tellus integer. Enim neque
              volutpat ac tincidunt vitae semper quis lectus nulla. Quis lectus
              nulla at volutpat. Velit ut tortor pretium viverra suspendisse
              potenti. Quam adipiscing vitae proin sagittis nisl rhoncus mattis
              rhoncus. Id interdum velit laoreet id donec ultrices tincidunt.
              Augue ut lectus arcu bibendum at varius vel pharetra. Placerat
              orci nulla pellentesque dignissim.Magna sit amet purus gravida. At
              elementum eu facilisis sed odio morbi.
            </p>
          </div>
          <img
            src="images/heating.webp"
            className="md:max-w-sm sm:ml-12 m-4 mt-12"
            alt="Heating"
          />
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center flex-wrap flex-col lg:flex-row gap-20">
        <VideoPlayer videoId="wcl2ECpmpD0" />
        <VideoPlayer videoId="MIR-vRlndwY" />
      </div>
    </section>
  );
}
