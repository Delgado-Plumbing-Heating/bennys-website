import Images from "./Images";
import Reviews from "./Reviews";

export default function Services() {
  return (
    <>
      <section
        className=" bg-white sm:max-w-2xl sm:p-10 lg:max-w-7xl ml-auto mr-auto mt-10 ml-5 mb-20 p-10 rounded-lg"
        id="services"
      >
        <div className="flex flex-col ml-5">
          <h3
            className="text-black text-2xl font-bold 
            "
          >
            Services
          </h3>
          <p className="text-xl mt-5">
            Vitae tortor condimentum lacinia quis vel eros donec ac odio. Tellus
            elementum sagittis vitae et leo duis. Nunc non blandit massa enim
            nec dui nunc mattis. Eget mauris pharetra et ultrices neque ornare
            aenean euismod. Sit amet nisl purus in mollis nunc. Nulla facilisi
            cras fermentum odio eu feugiat pretium. Eu feugiat pretium nibh
            ipsum consequat nisl.
          </p>{" "}
          <br />
          <p className="text-xl">
            At elementum eu facilisis sed odio morbi. Adipiscing elit ut aliquam
            purus sit. Feugiat sed lectus vestibulum mattis. Gravida cum sociis
            natoque penatibus et magnis dis parturient montes. Tincidunt
            praesent semper feugiat nibh. Pellentesque elit ullamcorper
            dignissim cras tincidunt. Nibh tellus molestie nunc non blandit
            massa enim. Gravida cum sociis natoque penatibus et magnis.
          </p>
        </div>

        <Images />

        <Reviews
          imageUrl="images/customer1.jpg"
          name="Hellen Smith"
          review='"Benny did a great job in my master bathroom. I had an emergency and he came right away!"'
          location="Denver, CO"
        />

        <Reviews
          imageUrl="images/customer2.jpg"
          name="Lucas Hall"
          review='"Coming from out of town with limited options. Benny was able to work with me for an affordable price."'
          location="Arvada, CO"
        />

        <Reviews
          imageUrl="images/customer3.jpg"
          name="Devan Miller"
          review='"Benny did a great job in my kitchen. Had a linking sink and he took care of it very fast."'
          location="Aurora, CO"
        />
      </section>
    </>
  );
}
