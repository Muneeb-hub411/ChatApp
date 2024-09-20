import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "./../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen rounded-lg overflow-hidden bg-gradient-to-r from-[#753a88] to-[#cc2b5e] bg-clip-padding backdrop-filter backdrop-blur-lg">
      <div className="flex">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
