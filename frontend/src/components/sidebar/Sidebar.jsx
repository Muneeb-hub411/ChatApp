import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-300 flex flex-col max-h-[525px] bg-gradient-to-b from-slate-800 to-slate-900 text-white">
      <div className="p-4">
        <SearchInput />
      </div>
      <div className="divider px-3 my-2 border-t border-slate-600"></div>
      <div className="flex-grow overflow-hidden">
        <div className="h-full overflow-y-auto px-4">
          <Conversations />
        </div>
      </div>
      <div className="p-4">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;
