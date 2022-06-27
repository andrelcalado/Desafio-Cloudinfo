import React, { useContext, useState } from "react";
import heartIcon from "../../assets/img/icons/iconHeart.svg";
import heartIconBorder from "../../assets/img/icons/iconHeartBorder.svg";
import { UserContext } from "../../providers/auth";
import { CardContainer, CardLabel, Overlay, HeartIcon } from "./styled";

interface IProps {
  name: string;
  thumb: string;
  id: number;
}

const MagazineCard: React.FC<IProps> = ({ name, thumb, id }) => {
  const [hover, setHover] = useState(false);
  const { getFavorite, toggleFavorite } = useContext(UserContext);
  const favorite = getFavorite(id) ? true : false;

  return (
    <CardContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => toggleFavorite(id)}
      favorite={favorite}
      thumb={thumb}
    >
      <Overlay hover={hover} favorite={favorite}>
        <HeartIcon
          favorite={favorite}
          src={favorite ? heartIcon : heartIconBorder}
          hover={hover}
          alt="Ícone de um Coração"
        />
        <CardLabel hover={hover} favorite={favorite}>
          {name}
        </CardLabel>
      </Overlay>
    </CardContainer>
  );
};

export default MagazineCard;
