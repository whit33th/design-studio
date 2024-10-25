import ReviewsCarousel from "../../components/containers/ReviewsCarousel/ReviewsCarousel";
import styles from "./Comment.module.scss";
import human1 from "asset/Avatars/humanIco1.webp";
import human2 from "asset/Avatars/humanIco2.jpg";
import human3 from "asset/Avatars/humanIco3.jpg";
import human4 from "asset/Avatars/humanIco4.jpg";
import human5 from "asset/Avatars/humanIco5.jpg";
import human6 from "asset/Avatars/humanIco6.jpg";
import human7 from "asset/Avatars/humanIco7.jpg";
import human8 from "asset/Avatars/humanIco8.jpg";
import human9 from "asset/Avatars/humanIco9.jpg";
import human10 from "asset/Avatars/humanIco10.jpg";
import human11 from "asset/Avatars/humanIco11.webp";

const reviews = [
  {
    img: human1,
    name: "Rahim Salam",
    company: "Freelancer",

    review:
      "Amir Jafari reflects on the unique challenges of freelancing, emphasizing the need for adaptability and resilience in a competitive market.",
  },
  {
    img: human2,
    name: "Maria Bulks",
    company: "Amazon",

    review:
      "John Miller shares his experience at Amazon, a company renowned for its innovation and customer service excellence. He discusses the importance of teamwork and collaboration.",
  },
  {
    img: human3,
    name: "John Everson",
    company: "Microsoft",

    review:
      "David Johnson emphasizes the transformative impact of technology on business processes during his time at Microsoft. He advocates for embracing technological advancements.",
  },
  {
    img: human4,
    name: "Diana Dice",
    company: "Apple",

    review:
      "Alice Smith discusses her passion for creativity, fostered by her experiences at Apple. She believes that a culture of innovation is essential for success in today’s fast-paced world.",
  },
  {
    img: human5,
    name: "Oliwia Kooper",
    company: "Tesla",

    review:
      "Emily Johnson reflects on her work at Tesla, focusing on the company's mission to promote sustainability.",
  },
  {
    img: human6,
    name: "Sandy Stone",
    company: "Freelancer",

    review:
      "Amir Jafari reflects on the unique challenges of freelancing, emphasizing the need for adaptability and resilience in a competitive market.",
  },
  {
    img: human1,
    name: "Rahim Salam",
    company: "Freelancer",

    review:
      "Amir Jafari reflects on the unique challenges of freelancing, emphasizing the need for adaptability and resilience in a competitive market.",
  },
  {
    img: human2,
    name: "Maria Bulks",
    company: "Amazon",

    review:
      "John Miller shares his experience at Amazon, a company renowned for its innovation and customer service excellence. He discusses the importance of teamwork and collaboration.",
  },
  {
    img: human3,
    name: "John Everson",
    company: "Microsoft",

    review:
      "David Johnson emphasizes the transformative impact of technology on business processes during his time at Microsoft. He advocates for embracing technological advancements.",
  },
  {
    img: human4,
    name: "Diana Dice",
    company: "Apple",

    review:
      "Alice Smith discusses her passion for creativity, fostered by her experiences at Apple. She believes that a culture of innovation is essential for success in today’s fast-paced world.",
  },
  {
    img: human5,
    name: "Oliwia Kooper",
    company: "Tesla",

    review:
      "Emily Johnson reflects on her work at Tesla, focusing on the company's mission to promote sustainability.",
  },
  {
    img: human6,
    name: "Sandy Stone",
    company: "Freelancer",

    review:
      "Amir Jafari reflects on the unique challenges of freelancing, emphasizing the need for adaptability and resilience in a competitive market.",
  },
];

const reviews2 = [
  {
    img: human7,
    name: "Amir Salew",
    company: "Freelancer",

    review:
      "In a follow-up, Amir discusses the realities of freelance life, such as managing client relationships.",
  },
  {
    img: human8,
    name: "John Kruk",
    company: "Amazon",

    review:
      "John elaborates on the importance of continuous learning at Amazon, suggesting that employees take charge of their own development. He argues that investing.",
  },
  {
    img: human9,
    name: "David Johnson",
    company: "Microsoft",

    review:
      "David expands on Microsoft’s collaborative culture, explaining how diverse teams drive creativity and problem-solving.",
  },
  {
    img: human10,
    name: "Alice Smith",
    company: "Apple",

    review:
      "Alice further explains how her experiences at Apple have taught her the value of user-centric design. She encourages aspiring designers to prioritize user experience, as it leads to more effective.",
  },
  {
    img: human11,
    name: "Emily Johnson",
    company: "Tesla",

    review:
      "Emily shares how her role at Tesla has deepened her understanding of sustainable practices in the automotive industry. ",
  },
  {
    img: human7,
    name: "Amir Salew",
    company: "Freelancer",

    review:
      "In a follow-up, Amir discusses the realities of freelance life, such as managing client relationships.",
  },
  {
    img: human8,
    name: "John Kruk",
    company: "Amazon",

    review:
      "John elaborates on the importance of continuous learning at Amazon, suggesting that employees take charge of their own development. He argues that investing.",
  },
  {
    img: human9,
    name: "David Johnson",
    company: "Microsoft",

    review:
      "David expands on Microsoft’s collaborative culture, explaining how diverse teams drive creativity and problem-solving.",
  },
  {
    img: human10,
    name: "Alice Smith",
    company: "Apple",

    review:
      "Alice further explains how her experiences at Apple have taught her the value of user-centric design. She encourages aspiring designers to prioritize user experience, as it leads to more effective.",
  },
  {
    img: human11,
    name: "Emily Johnson",
    company: "Tesla",

    review:
      "Emily shares how her role at Tesla has deepened her understanding of sustainable practices in the automotive industry. ",
  },
];

function Comments() {
  return (
    <div className={styles.container}>
      <div className="center column flex gap20">
        <h3 className="sText"> Comments  </h3>
        <h1 className="lText">Customer reviews </h1>
        <p className="sText textCenter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod <br /> tempor incididunt ut Labore et doLore magna aliqua{" "}
        </p>
      </div>

      <div className={styles.reviews}>
        <ReviewsCarousel source={reviews} />

        <ReviewsCarousel source={reviews2} reverseDirection={true} />
      </div>
    </div>
  );
}

export default Comments;
