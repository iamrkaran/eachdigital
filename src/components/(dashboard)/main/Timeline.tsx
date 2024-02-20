
import PostBlock from "../sections/PostBlock";
import MusicSection from "../sections/MusicSection";
import "./style.css";

const Timeline: React.FC = () => {

  return (
    <div className="flex">
      {/* Music Section */}
      <div className="w-[300px] rounded shadow-md lg:block hidden bg-red-200">
        <MusicSection />
      </div>

      {/* Main Post Block Section */}
      <div
        className="lg:w-[500px] sm/md:flex-grow rounded shadow-md scrollbar"
        style={{
          maxHeight: "calc(100vh)",
          scrollbarWidth: "none",
          overflow: "auto",
        }}
      >
        <PostBlock />
      </div>

      {/* Video Section */}
      <div className="w-[300px] bg-blue-200 p-4 rounded shadow-md lg:block hidden">
        <div>
          <p>Video section</p>
        </div>
      </div>

      {/* More Section */}
      <div className="w-[300px] bg-yellow-200 p-4 rounded shadow-md lg:block hidden">
        <div>
          <p>More section</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
