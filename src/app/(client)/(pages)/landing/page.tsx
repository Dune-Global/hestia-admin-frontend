import Image from "next/image";
import Easysetup from "./easy_setup/easy_setup";
import ToptoBottom from "./protection/protect";
import Apartments from "./apartments/apartments";
import Questions from "./questions/questions";
import Streamline from "./streamline/streamline";
import Container from "@/components/Container";

export default function Landing() {
  return (
    <div>
      <Container>
        <div>
          <div>
            <div className="pt-16">
              <Streamline />
            </div>
            <div className="pt-16">
              <Easysetup />
            </div>
            {/*  */}
            <div className="py-16">
              <ToptoBottom />
            </div>
            {/*  */}
            <div className="py-16">
              <Apartments />
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-gray-100">
        <Container>
          <div className="py-16">
            <Questions />
          </div>
        </Container>
      </div>
    </div>
  );
}
