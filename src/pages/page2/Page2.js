import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import jqueryCode from "./jquery";
function Page2() {
  useEffect(() => {
    jqueryCode()
  }, []);

  return (
    <div className="page2">
      <h1>Page2</h1>
      <Link to="/page1">Goto Page1</Link>

      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta a,
        sunt, itaque id aperiam sit alias quasi recusandae fugiat exercitationem
        placeat neque molestias suscipit ex commodi! Nostrum quibusdam saepe
        amet sunt enim voluptatibus culpa labore cupiditate aliquam veniam a
        quia repellat, placeat, fuga reprehenderit animi quas consectetur qui
        voluptates cumque!
      </p>
    </div>
  );
}

export default Page2;
