import dream from '../assets/img/dream.jpeg';
import InlineField, { InputField } from './button/InputField';

type NavProps = {
  links: {
    link: string;
  }[];
};

export default function Navbar(props: NavProps) {
  return (
    <nav className=" flex items-center">
      <div className="flex flex-row  mx-6">
        <img
          src={dream}
          alt="logo"
          className=" w-[92px] h-[93px] flex-shrink-0 mt-5"
        />
        <h2 className="py-10 text-primary font-thin flex gap-2  uppercase text-2xl">
          Dream
          <span className=" hidden lg:block  font-thin  border-b">Board</span>
        </h2>
        <div className=" flex-row flex pl-[200px] gap-5 mt-12 ">
          {props.links.map((link) => {
            return (
              <ul key={''}>
                <li className="leading-normal lg:font-bold font-normal text-[12px] uppercase">
                  {link.link}
                </li>
              </ul>
            );
          })}
        </div>
        <div className="mt-8 ml-[90px] flex gap-[38px]">
          <InlineField label="Contact Us" width={'w-[154px]'} />
          <InputField label="my roadmap" width="w-[154px]" />
        </div>
      </div>
    </nav>
  );
}
