import { DotsThreeIcon, PlusIcon } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <div className=''>
      <header className="p-2 bg-[#1f1f21] h-12 flex items-center">
        <h2
          className='text-[#A9ABAF] font-semibold'
        >
          Kanban Practice
        </h2>
      </header>
      <div className="bg-[#0000003d] text-white p-3 font-bold">
        <h2>Imbir</h2>
      </div>
      <ul className="px-1.5 py-3.5 flex text-sm bg-[#dadada] min-h-screen">
        <li>
          <div className="w-68 max-h-full rounded-xl bg-[#101204] text-[#cecfd2]">
            <header className="flex items-center p-2">
              <h2 className="flex-1 min-h-5 py-1.5 pl-3 pr-2 font-semibold">В работе</h2>
              <div className="counter mx-1.5">0</div>
              <button className="p-1.5 cursor-pointer hover:bg-[#E3E4F21F] active:bg-[#E5E9F640] rounded-lg">
                <DotsThreeIcon size={24} weight="bold" />
              </button>
            </header>
            <footer className="px-2 py-1 pb-2">
              <button className="flex w-full items-center gap-1.5 px-2 py-1.5 font-medium text-[#A9ABAF] hover:bg-[#E3E4F21F] active:bg-[#E5E9F640] active:text-[#CECFD2] cursor-pointer rounded-lg">
                <PlusIcon size={16} weight="bold" />
                Добавить карточку
              </button>
            </footer>
          </div>
        </li>
      </ul>
    </div>
  );
}
