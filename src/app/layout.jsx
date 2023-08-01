import "./globals.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header";

export const metadata = {
  title: "Minhas Tarefas",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" flex  flex-col w-screen h-screen bg-[#11100F] text-zinc-200">
        <Header />
        <main className="flex flex-1 w-full">
          <Sidebar />
          <div className="flex flex-1 flex-col m-3 sm:m-7 overflow-hidden">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
