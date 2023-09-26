type Vectors = {
  children: React.ReactNode;
};

export const Vector1 = () => {
  return (
    <div className="hidden md:hidden lg:block relative left-0 -top-[150px]">
      <svg
        className=" stroke-[#343045]"
        xmlns="http://www.w3.org/2000/svg"
        width="243"
        height="565"
        viewBox="0 0 243 565"
        fill="none">
        <path
          d="M1.5 3C104.5 41.1667 293.4 206.8 225 564"
          stroke="url(#paint0_linear_2_34)"
          stroke-opacity="0.06"
          stroke-width="6"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_34"
            x1="-23.5"
            y1="-37.5"
            x2="333"
            y2="602.5"
            gradientUnits="userSpaceOnUse">
            <stop stop-color="#343045" />
            <stop offset="0.151042" stop-color="#C0B7E8" />
            <stop offset="0.760417" stop-color="#8176AF" />
            <stop offset="0.973958" stop-color="#343045" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export const Arrow = () => {
  return (
    <svg
      className="hidden lg:block"
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none">
      <path
        d="M70.8334 50L29.1667 50M70.8334 50L54.1667 66.6667M70.8334 50L54.1667 33.3333"
        stroke="#C0B7E8"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const Vector2 = (props: Vectors) => {
  return (
    <>
      <div className="relative  -top-[330px] lg:left-[650px] lg:-top-[220px]">
        <svg
          className=" stroke-[#343045] w-[377px] h-[845px] flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          width="383"
          height="846"
          viewBox="0 0 383 846"
          fill="none">
          <path
            d="M3.19293 0C-0.0879101 140.127 37.2087 433.314 212.642 485.053C388.075 536.792 391.776 746.576 371.697 845"
            stroke="url(#paint0_linear_1_24)"
            stroke-width="6"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_24"
              x1="16.5"
              y1="39.5"
              x2="363"
              y2="814"
              gradientUnits="userSpaceOnUse">
              <stop offset="0.0104167" stop-color="#413045" />
              <stop offset="0.140625" stop-color="#8C81A6" />
              <stop offset="0.229167" stop-color="#C0B7E8" />
              <stop offset="0.776042" stop-color="#8176AF" />
              <stop offset="1" stop-color="#343045" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative -top-[225px] -left-[390px] lg:left-[310px] lg:-top-[190px] ">
        <svg
          className=" stroke-[#343045] w-[414px]  lg:h-[669px] h-[600px] flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          width="416"
          height="675"
          viewBox="0 0 416 675"
          fill="none">
          <path
            d="M415 3C325.774 17.8434 155.913 102.224 190.271 320.998C224.63 539.772 78.4065 646.155 1 672"
            stroke="url(#paint0_linear_1_23)"
            stroke-width="6"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_23"
              x1="365.5"
              y1="28"
              x2="110"
              y2="594"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#343045" />
              <stop offset="0.276042" stop-color="#8176AF" />
              <stop offset="0.739583" stop-color="#C0B7E8" />
              <stop offset="1" stop-color="#343045" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative lg:-top-[160px] lg:-left-[420px] lg:right-2 -top-[140px] -left-[1020px]">
        <svg
          className=" stroke-[#343045]  w-[620px] lg:w-[735px] h-[419px] flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          width="736"
          height="423"
          viewBox="0 0 736 423"
          fill="none">
          <path
            d="M738.5 4.5C491.667 -7.66666 -0.900015 58.9 3.49999 422.5"
            stroke="url(#paint0_linear_2_33)"
            stroke-width="6"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2_33"
              x1="700.5"
              y1="-3.99998"
              x2="14.5"
              y2="361"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#343045" />
              <stop offset="0.213542" stop-color="#C0B7E8" />
              <stop offset="0.71875" stop-color="#8176AF" />
              <stop offset="1" stop-color="#343045" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute   lg:-top-[150px] lg:left-[120px]  -top-[110px] left-[260px]  ">
          {props.children}
        </div>
      </div>
    </>
  );
};
