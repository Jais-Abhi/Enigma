
import MainAbout from "./MainAbout";
import MainEvent from "./MainEvent";
import MainGallery from "./MainGallery";
import MainMembers from "./MainMembers";
import MainSlider from "./MainSlider";
import ContactButton from "../ContactButton";
export default function Main(){
  return (
    <>
      <MainSlider />
      <MainAbout />
      <MainEvent />
      <MainMembers />
      <MainGallery/>
      <ContactButton/>

    </>
  )
}