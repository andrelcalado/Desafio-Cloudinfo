import React, { useEffect, useState } from "react";
import marvelLogo from "../../assets/img/marvel_logo.png";
import { comicsListService } from "../../services/comicsListService";
import MagazineCard from "../../components/magazineCard";
import Loading from "../../components/loading";
import CloudButton from "../../components/cloudButton";
import {
  Main,
  Header,
  LogoMarvel,
  SearchInput,
  CloudButtonsContainer,
  MagazinesContainer,
} from "./styled";

const Home: React.FC = () => {
  const [comicsList, setComicsList] = useState([]);
  const [comicsFound, setComicsFound] = useState([]);
  const [searchLabel, setSearchLabel] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    comicsListService.then(({ data }) => {
      setComicsList(data.data.results);
      console.log(data.data.results);
      setLoading(false);
    });
  }, []);

  const searchMagazine = (text: string) => {
    setComicsFound(
      comicsList.filter((item: any) => {
        return item.title.toUpperCase().includes(text.toUpperCase());
      })
    );

    setSearchLabel(text);
  };

  return (
    <>
      <Header>
        <LogoMarvel src={marvelLogo} alt="Logo da Marvel" />
        <SearchInput
          onChange={({ target }) => searchMagazine(target.value)}
          value={searchLabel}
          disabled={loading}
          placeholder="Digite o nome do quadrinho"
        ></SearchInput>
      </Header>
      <Main>
        {loading ? (
          <Loading />
        ) : (
          <>
            <MagazinesContainer>
              {searchLabel.length > 1
                ? comicsFound.map((item: any, i) => {
                    return (
                      <MagazineCard
                        key={i}
                        name={item.title}
                        thumb={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                      />
                    );
                  })
                : comicsList.map((item: any, i) => {
                    return (
                      <MagazineCard
                        key={i}
                        name={item.title}
                        thumb={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                      />
                    );
                  })}
            </MagazinesContainer>
            <CloudButtonsContainer>
              <CloudButton label="Previous Page" />
              <CloudButton label="Next Page" />
            </CloudButtonsContainer>
          </>
        )}
      </Main>
    </>
  );
};

export default Home;
