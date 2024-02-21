import Image from "next/image";
import Navbar from "./navbar/Navbar";
import MainPage from "./mainpage/page";
import SessionBooking from "./sessions/page";
import ContinueAs from "./continueAs/ContinueAs"
import Form from "./Components/Form";
import Videobrief from "./Components/videobrief";

export default function Home() {
  return (
    <main>
      {/* <Form/> */}
      <ContinueAs/>
      {/* <Videobrief/> */}
      {/* <MainPage /> */}
      {/* <SessionBooking/> */}
    </main>
  );
}
