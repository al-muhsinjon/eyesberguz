import { useState } from "react";

import Header from "./LocationItems/Header";
import BodyLocation from "./LocationItems/Bodys";

const Location = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="location">
      <Header setShowModal={() => setShowModal(true)} />
      {showModal ? <BodyLocation setShowModal={() => setShowModal(false)} /> : null}
    </div>
  );
};

export default Location;
