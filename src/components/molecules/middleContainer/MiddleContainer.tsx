import React from "react";
import { MiddlebarContainer } from "../../../styles/molecules/middleContainer.styles";
import { BannerCard } from "../../atom/BannerCard/BannerCard";
import { CARD_IMAGES } from "../../../assets/images/index";
import { HeaderCard } from "../../atom/HeaderCard/HeaderCard";
import { TopBooks } from "../PopularBooksContainer/PopularBooksContainer";
import { TopAuthors } from "../topAuthorsContainer/topAuthorsContainer";
import CountSummary from "../countSummarySection/CountSummarySection";
import SearchBarHeader from "../../atom/SearchBarCard/SearchBarCard";


const MiddleContainer = () => {
  return (
    <MiddlebarContainer>
      <SearchBarHeader countryName="EN" flagImage={CARD_IMAGES.FLAGIMAGE} />
      <BannerCard />
      <HeaderCard title="Popular" description="View all" />
      <TopBooks />
      <HeaderCard title="Top Authors" description="View all" />
      <TopAuthors />
      <CountSummary />
    </MiddlebarContainer>
  );
};

export default MiddleContainer;
