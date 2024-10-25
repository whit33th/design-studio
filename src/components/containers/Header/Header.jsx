import styles from "./Header.module.scss";
import logo from "/header-logo.png";
import BorderBtn from "../../UI/Buttons/BorderBtn";

const HEADER_HEIGHT = 90;

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const yOffset = -HEADER_HEIGHT;
    const yPosition =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: yPosition,
      behavior: "smooth",
    });
  }
};

function Header() {
  return (
    <div className={styles.header}>
      <img
        src={logo}
        alt="logo"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("start");
        }}
      />
      <ul>
        <li>
          <a
            href="#about-us"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("advantages");
            }}
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("services");
            }}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#project"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("project");
            }}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#FAQ"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("faq");
            }}
          >
            FAQ
          </a>
        </li>
        <li>
          <a
            href="#Reviews"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("comments");
            }}
          >
            Reviews
          </a>
        </li>
      </ul>

      <BorderBtn onClick={() => scrollToSection("comments")}>
        Let’s Talk
      </BorderBtn>
    </div>
  );
}

export default Header;
