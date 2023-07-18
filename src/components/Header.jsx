import { Search } from "lucide-react";

export default function Header() {
    return (
        <header className="flex px-7 py-1.5 h-12 w-full bg-[#1b1a19] border-b border-[#484644] justify-between">
            <div className="flex flex-col items-center">
                <h1 className="font-semibold text-lg leading-none ">Minhas Tarefas</h1>
                <span className="font-light text-xs ">By: Matheus Doerzbacher</span>
            </div>
            <div className=" text-center w-9 sm:w-64 md:w-96 flex items-center rounded-[4px] bg-[#252423] hover:bg-[#323130]">
                <form action="" className="flex w-full">
                    <button type="submit">
                        <Search size={17} className="mx-2 text-[#55a4f0]" />
                    </button>
                    <input type="text" placeholder="Pesquisar" className="w-full px-2 bg-transparent outline-none" />
                </form>
            </div>
            <div className="hidden sm:flex w-[9rem]"></div>
        </header>
    )
}