import Container from "../../components/Container";
import Logo from "../../assets/img/logo/Logo-white.png";
import facebook from "../../assets/img/icons/facebook.png";
import Linkedin from "../../assets/img/icons/linkedin.png";
import website from "../../assets/img/icons/link.png";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="pt-16">
      <Container
        outerClassName="w-full bg-primary-gradient text-white py-9"
        innerClassName="flex flex-col space-y-6"
      >
        <div className="flex justify-between items-center">
          <div className="flex w-1/2">
            <div className="flex flex-col w-1/3 space-y-4">
              <p className="font-bold">Menu</p>
              <ul className="space-y-3">
                <li className="font-thin">Home</li>
                <li className="font-thin">Teach with us</li>
                <li className="font-thin">Categories</li>
                <li className="font-thin">About Us</li>
                <li className="font-thin">FAQ</li>
              </ul>
            </div>
            <div className="flex flex-col w-1/3 space-y-3.5">
              <p className="font-bold">Information</p>
              <ul className="space-y-3">
                <li className="font-thin">Terms</li>
                <li className="font-thin">Privacy</li>
              </ul>
            </div>
            <div className="flex flex-col w-1/3 space-y-3.5">
              <p className="font-bold">Contact</p>
              <ul className="space-y-3">
                <li className="font-thin">m.ihebmejri@gmail.com</li>
                <li className="font-thin">+216 24 567 891</li>
                <li className="font-thin">location, city, country</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col bg-primary space-y-3.5 py-7 px-10 w-1/4">
            <p>Subscribe</p>
            <div className="flex">
              <input
                className="rounded-l-lg max-w-full p-3"
                type="email"
                placeholder="Email adress"
              />
              <button className="rounded-r-lg max-w-full p-3"> X </button>
            </div>
            <p className="text-sm font-thin">
              Gravida sed justo, justo, id est et. Amet tristique convallis sed
              porttitor nullam eu ut. Duis et odio aliquam bibendum. Metus et
              lectus id viverra fringilla magna morbi.
            </p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center">
          <img src={Logo} alt="Rise Master Logo" />
          <div className="flex space-x-4">
            <img src={facebook} alt="Facebook" />
            <img src={Linkedin} alt="Linkedin" />
            <img src={website} alt="Link website" />
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
