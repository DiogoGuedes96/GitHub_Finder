function About() {
  return (
    <>
      <div className="container text-center">
        <h1 className="text-6xl mb-4 pb-44">Github Finder</h1>
        <p className="mb-4 text-2xl font-light">
          A React app to search GitHub profiles and see profile details.
        </p>
        <p>
          {" "}
          This project is part of the
          <a href="https://github.com/DiogoGuedes96">
            {" "}
            Made By: <span className="text-white bold">D. Guedes</span>
          </a>{" "}
        </p>
        <p>
          Udemy course by
          <strong>
            <a href="https://traversymedia.com"> Brad Traversy</a>
          </strong>
          .
        </p>
        <p className="text-lg text-gray-400">
          Version <span className="text-white">1.0.0</span>
        </p>
      </div>
    </>
  );
}

export default About;
