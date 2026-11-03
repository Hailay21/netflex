import React from "react";

import Slideshow from "../SlideShow/SlideShow";
import styles from "./DisplayRow.module.css";
import { movies } from "../../../src/Data/Data";
function DisplayRow() {
  return (
    <div className={styles.mainWrapper}>
      <Slideshow title="Movie suggestions" movies={movies} />
    </div>
  );
}
export default DisplayRow;
