import { DotsThreeIcon, PlusIcon } from '@phosphor-icons/react/dist/ssr';

export const TaskCard = () => {
  return (
    <li>
      <div className='w-68 max-h-full rounded-xl bg-[#101204] text-[#cecfd2]'>
        <header className='flex items-center p-2'>
          <h2 className='flex-1 min-h-5 py-1.5 pl-3 pr-2 font-semibold'>
            В работе
          </h2>
          <div className='counter mx-1.5 text-[#A9ABAF]'>0</div>
          <button className='p-1.5 cursor-pointer hover:bg-[#E3E4F21F] active:bg-[#E5E9F640] rounded-lg'>
            <DotsThreeIcon size={24} weight='bold' color='#A9ABAF' />
          </button>
        </header>
        <div className='mx-1 p-1 flex flex-col gap-2'>
          <div className='bg-[#242528] rounded-xl px-3 py-1.5'>
            <div className='flex items-start gap-2'>
              <div className='overflow-hidden h-4 shrink-0'>
                <svg
                  fill='none'
                  viewBox='0 0 16 16'
                  role='presentation'
                  className='h-4 text-[#82B536]'
                >
                  <path
                    fill='currentcolor'
                    fillRule='evenodd'
                    d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M6.75 9.828 4.826 7.52l-1.152.96 2.5 3a.75.75 0 0 0 1.152 0l5-6-1.152-.96z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <div className='rounded-lg size-4 border border-[#A9ABAF] shrink-0 hover:opacity-50 active:-margin-y-10 cursor-pointer'></div>
              </div>
              <p>
                Редактирование специалиста через ЛК клиники не подключено к беку
              </p>
            </div>
          </div>
          <div className='bg-[#242528] rounded-xl px-3 py-1.5'>
            <div className='flex items-start gap-2'>
              <div className='overflow-hidden h-4 shrink-0'>
                <svg
                  fill='none'
                  viewBox='0 0 16 16'
                  role='presentation'
                  className='h-4 text-[#82B536]'
                >
                  <path
                    fill='currentcolor'
                    fillRule='evenodd'
                    d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M6.75 9.828 4.826 7.52l-1.152.96 2.5 3a.75.75 0 0 0 1.152 0l5-6-1.152-.96z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <div className='rounded-lg size-4 border border-[#A9ABAF] shrink-0 hover:opacity-50 active:-margin-y-10 cursor-pointer'></div>
              </div>
              <p>
                Редактирование специалиста через ЛК клиники не подключено к беку
              </p>
            </div>
          </div>
        </div>
        <footer className='px-2 py-1 pb-2'>
          <button className='flex w-full items-center gap-1.5 px-2 py-1.5 font-medium text-[#A9ABAF] hover:bg-[#E3E4F21F] active:bg-[#E5E9F640] active:text-[#CECFD2] cursor-pointer rounded-lg'>
            <PlusIcon size={16} weight='bold' />
            Добавить карточку
          </button>
        </footer>
      </div>
    </li>
  );
};
