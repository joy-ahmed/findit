import SearchBar from "@/components/SearchBar";
import SideNavBar from "@/components/SideNavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <SideNavBar />
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 w-full mt-10">
        {/* listings */}
        <div className="bg-indigo-400">
          <SearchBar />
        </div>
        {/* map  */}
        <div className="bg-red-400">Maps</div>
      </div>
    </div>
  );
}
