import AvatarSection from "./Component/AvatarSection";
import HeroSection from "./Component/HeroSection";
import MessageText from "./Component/MessageText";

function MessageHOD() {
  return (
    <div className="flex w-full font-[450] flex-col gap-y-8 justify-center items-center">
      <HeroSection heading={"Message from HOD's Desk"} />
      <AvatarSection />
      <MessageText />
    </div>
  );
}
export default MessageHOD;
