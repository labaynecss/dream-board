import dream from '../assets/img/dream.jpeg';

export const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-row   mx-6">
        <img
          src={dream}
          alt="logo"
          className=" w-[92px] h-[93px] flex-shrink-0 mt-5"
        />
        <h2 className="py-10 text-primary font-thin flex gap-2  uppercase text-2xl">
          Dream{' '}
          <span className=" hidden lg:block  font-thin  border-b">Board</span>
        </h2>
      </div>

      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
};
