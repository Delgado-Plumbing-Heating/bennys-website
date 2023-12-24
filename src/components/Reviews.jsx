export default function Reviews({ imageUrl, name, review, location }) {
  return (
    <>
      <section className="max-w-2xl flex flex-col gap-5 ml-auto mr-auto lg:flex-row mt-10 lg:gap-20 p-10 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] ">
        <img src={imageUrl} className="w-24 rounded-full" />
        <span>{name}</span>
        <span>
          {review}
          <br /> <br />
          {location}
        </span>
      </section>
    </>
  );
}
