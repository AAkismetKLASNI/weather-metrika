export function EmojiWidget() {
  return (
    <div className='p-4 flex flex-col gap-8 items-center bg-gradient-to-b from-secondary to-secondary text-center rounded-2xl row-span-2'>
      <h3>How are you?</h3>
      <img
        className='w-24 h-24'
        src='emoji/1.png'
        alt='emoji'
      />
      <div className='flex gap-4'>
        <img
          className='w-10 h-10 transition-all cursor-pointer hover:scale-105'
          src='emoji/2.png'
          alt='emoji'
        />
        <img
          className='w-10 h-10 transition-all cursor-pointer hover:scale-105'
          src='emoji/3.png'
          alt='emoji'
        />
        <img
          className='w-10 h-10 transition-all cursor-pointer hover:scale-105'
          src='emoji/4.png'
          alt='emoji'
        />
        <img
          className='w-10 h-10 transition-all cursor-pointer hover:scale-105'
          src='emoji/5.png'
          alt='emoji'
        />
      </div>
    </div>
  );
}
