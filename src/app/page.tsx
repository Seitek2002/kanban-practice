import { TaskCard } from '@/shared/ui';
import { PlusIcon } from '@phosphor-icons/react/dist/ssr';

export default function Home() {
  return (
    <div className='flex-1 flex flex-col'>
      <header className='p-2 bg-[#1f1f21] h-12 flex items-center'>
        <h2 className='text-[#A9ABAF] font-semibold'>Kanban Practice</h2>
      </header>
      <div className='bg-[#0000003d] text-white p-3 font-bold'>
        <h2>Imbir</h2>
      </div>
      <ul className='px-1.5 py-3.5 gap-3 flex text-sm bg-[#3d3c3c] flex-1'>
        <TaskCard />
        <li>
          <button className='flex w-68 items-center gap-1.5 px-2 py-1.5 font-medium text-white hover:bg-[#E3E4F21F] active:bg-[#E5E9F640] active:text-[#CECFD2] cursor-pointer rounded-lg'>
            <PlusIcon size={16} weight='bold' />
            Добавить еще одну колонку
          </button>
        </li>
      </ul>
    </div>
  );
}
