import meta from '../assets/img/new.jpg';
import { Vector1, Vector2 } from '../components/vectors';

const Hero = () => {
  return (
    <section className="h-full mt-[100px]">
      <div className=" container  max-w-screen-lg    ">
        <div className="flex flex-row   items-center">
          <Vector1 />
          <div className=" absolute -left-[15px] top-[490px] lg:-left-[620px] lg:top-[200px] px-[10px] lg:px-[700px]  ml-8 z-50 ">
            <h1 className=" text-[30px]  lg:text-[46px] font-bold leading-normal   mb-8 ">
              <span className="text-primary text-[36px] lg:text-[46px]">
                Diving
              </span>{' '}
              into Success One Dream at a
              <span className="text-primary text-[36px] lg:text-[46px] ml-2">
                Time
              </span>
            </h1>
            <p className=" hidden md:hidden lg:block text-[16px] font-normal leading-normal tracking-normal ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
              Lectus mauris eros in vitae .
            </p>
          </div>
          <Vector2>
            <div>     
              <img
                src={meta}
                alt=""
                className=" object-cover  bg-no-repeat  rectangle py-3 px-4 z-40 "
              />
            </div>
          </Vector2>
          <div className="absolute m-10 top-[690px]">
            <div className=" relative bg-red-200 h-[167px] w-[1272px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
