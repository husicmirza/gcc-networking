import { logoutUser } from "@/lib/actions/user.actions";
import { LogOut } from "lucide-react";
import { redirect } from "next/navigation";

const Footer = ({ user }: { user: LoggedInUser }) => {
  const handleLogOut = async () => {
    const loggedOut = await logoutUser();
    if (loggedOut) redirect("/loginin");
  };
  return (
    <footer className="flex items-center justify-between gap-2 py-6 border-t border-gray-200">
      <div className={"flex flex-1 flex-col justify-center"}>
        <h1 className="truncate text-gray-400 font-semibold">{user.name}</h1>
        <p className="text-sm truncate font-normal text-gray-400">
          {user.email}
        </p>
      </div>
      <div onClick={handleLogOut} className="text-gray-400 cursor-pointer">
        <LogOut />
      </div>
    </footer>
  );
};

export default Footer;
