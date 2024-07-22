import React from "react";
import { TopAuthorsSection } from "../../../styles/molecules/topAuthorsContainer.styles";
import { TopAuthorCard } from "../../atom/TopAuthorsCard/TopAuthorsCard";
import { AUTHOR_IMAGES as Img } from "../../../assets/authors/index";

export const TopAuthors = () => {
  return (
    <TopAuthorsSection>
      <TopAuthorCard
        authorName="Markus Zukas"
        authorImage={Img.AUTHOR_01}
      />
      <TopAuthorCard
        authorName="Dan Brown"
        authorImage={Img.AUTHOR_02}
      />
      <TopAuthorCard
        authorName="John Green"
        authorImage={Img.AUTHOR_03}
      />
      <TopAuthorCard
        authorName="Yuval Noah Harari"
        authorImage={Img.AUTHOR_04}
      />
      <TopAuthorCard
        authorName="J.K.Rowling"
        authorImage={Img.AUTHOR_05}
      />
      <TopAuthorCard
        authorName="R.J.Palacio"
        authorImage={Img.AUTHOR_06}
      />
    </TopAuthorsSection>
  );
};
