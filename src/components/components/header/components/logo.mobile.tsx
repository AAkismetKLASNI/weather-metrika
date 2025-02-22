export function LogoMobile() {
  return (
    <div className='-top-7 flex gap-2 justify-center w-full text-sm absolute md:hidden'>
      <img
        src='logo.svg'
        className='w-4 h-4'
      />
      <span>weather metrika</span>
    </div>
  );
}
