export function Header() {
  return (
    <div className='p-4 mt-4 flex justify-between gap-6'>
      <div className='rounded-full bg-secondary p-4'>
        <img
          src='/logo.svg'
          className='w-10 h-10'
        />
      </div>
      <div className='rounded-full bg-secondary p-4 w-full'></div>
    </div>
  );
}
