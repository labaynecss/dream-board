import meta from '../assets/img/new.jpg';
import { InputField } from '../components/button/InputField';
import { Arrow, Vector1, Vector2 } from '../components/vectors';

const Hero = () => {
  return (
    <section className="h-full mt-[100px]">
      <div className=" container  w-[1440px]    ">
        <div className="flex flex-row   items-center">
          <Vector1 />
          <div className=" absolute -left-[20px] top-[490px] lg:-left-[690px] lg:top-[200px]  lg:px-[745px]  ml-8 z-50  ">
            <h1 className=" text-[30px]  lg:text-[46px] font-bold leading-normal   mb-[36px] ">
              <span className="text-primary text-[36px] lg:text-[46px]">
                Diving
              </span>{' '}
              into Success One Dream at a
              <span className="text-primary text-[36px] lg:text-[46px] ml-2">
                Time
              </span>
            </h1>
            <p className=" hidden md:hidden lg:block text-[16px] font-normal leading-normal tracking-normal mb-[66px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
              Lectus mauris eros in vitae .
            </p>
            <div className="flex flex-row items-center ml-[75px]  lg:ml-0">
              <InputField label="Build your Passion" width="w-[214px]" />{' '}
              <Arrow />
            </div>
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
          <div className="absolute m-10 lg:top-[650px] top-[680px] -left-6 lg:left-0">
            <div className=" relative bg-gradient h-[167px] w-[347px] lg:w-[1272px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
