import React from "react";
import { Rating } from "./Rating";

export default {
  title: "Rating",
  components: Rating,
};

export const EmptyRating = () => <Rating text={"reviews"} value={5.0} />;
