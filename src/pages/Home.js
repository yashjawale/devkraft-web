import HeadedParagraph from "../components/HeadedParagraph";
import IconLink from "../components/IconLink";

const Home = () => {
  return (
    <>
      <HeadedParagraph title="Who are we?">
        We are a team of passionate students constantly finding ways to make the
        lives of students at{" "}
        <IconLink to="https://engg.dypvp.edu.in">
          Dr. D. Y. Patil Institute of Technology, Pimpri
        </IconLink>
        more seamless and enjoyable. We organise various events, workshops and
        projects for all round development. <br /> Lorem ipsum dolor sit amet
        consectetur adipisicing elit .Molestias placeat voluptates accusamus
        minima obcaecati itaque, dolores temporibus est nam sint ab impedit, sit
        quam perferendis eos rerum nisi doloribus amet, laborum corporis culpa
        excepturi veritatis id deserunt? Dolorem, quisquam sed voluptas illum
        officiis vel cumque quos ducimus esse labore sint?
      </HeadedParagraph>
      <HeadedParagraph title="Who are we?">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        placeat voluptates accusamus minima obcaecati itaque, dolores temporibus
        est nam sint ab impedit, sit quam perferendis eos rerum nisi doloribus
        amet, laborum corporis culpa excepturi veritatis id deserunt? Dolorem,
        quisquam sed voluptas illum officiis vel cumque quos ducimus esse labore
        sint?
      </HeadedParagraph>
    </>
  );
};

export default Home;
