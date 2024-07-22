import {
  Container,
  LanguageContainer,
  LanguageText,
  SearchBar,
  FlagIcon,
  StyledSearchIconContainer,
  StyledImg,
} from "../../../styles/atom/searchBarCard.styles";
import SearchIconImage from "../../../assets/logo/searchIcon.png";

interface SearchBarHeaderProps {
  countryName: string;
  flagImage: string;
}

const SearchBarCard = ({countryName,flagImage}: SearchBarHeaderProps) => {
  return (
    <Container>
      <div style={{ display: "flex", alignItems: "center" }}>
        <SearchBar type="text" placeholder="Search your book..." />
        <StyledSearchIconContainer>
          <StyledImg>
            <img src={SearchIconImage} alt="searchIconImage" />
          </StyledImg>
        </StyledSearchIconContainer>
      </div>
      <LanguageContainer>
        <LanguageText>{countryName}</LanguageText>
        <FlagIcon>
        <img src={flagImage} alt="flagImage" />
        </FlagIcon>
      </LanguageContainer>
    </Container>
  );
};

export default SearchBarCard;
