import React, { useEffect, useState } from "react";
import marvelLogo from "../../assets/img/marvel_logo.png";
import { comicsListService } from "../../services/comicsListService";
import MagazineCard from "../../components/magazineCard";
import CardInfo from "../../components/cardInfo";
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

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPagesPerPage] = useState(15);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts =
    searchLabel.length > 1
      ? comicsFound.slice(indexOfFirstPost, indexOfLastPost)
      : comicsList.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    setLoading(true);
    comicsListService.then(({ data }) => {
      setComicsList(data.data.results);
      setLoading(false);
    });
  }, []);

  const searchMagazine = (text: string) => {
    setCurrentPage(1);
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
              {currentPosts.map((item: any, i) => {
                return (
                  <MagazineCard
                    key={i}
                    id={item.id}
                    name={item.title}
                    thumb={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  />
                );
              })}
            </MagazinesContainer>
            {currentPosts.length < 1 &&
              searchLabel.length > 1 &&
              currentPage === 1 && (
                <CardInfo label="Não encontramos nenhum quadrinho com o nome informado" />
              )}
            <CloudButtonsContainer>
              <CloudButton
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                label="Previous Page"
              />
              <CloudButton
                disabled={currentPosts.length < postsPerPage}
                onClick={() => setCurrentPage(currentPage + 1)}
                label="Next Page"
              />
            </CloudButtonsContainer>
          </>
        )}
      </Main>
    </>
  );
};

export default Home;
