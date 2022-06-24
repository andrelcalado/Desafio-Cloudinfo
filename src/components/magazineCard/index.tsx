import React, { useState } from "react";
import heartIcon from "../../assets/img/icons/iconHeart.svg";
import heartIconBorder from "../../assets/img/icons/iconHeartBorder.svg";
import { CardContainer, CardLabel, Overlay, HeartIcon } from "./styled";

interface IProps {
  name: string;
  thumb: string;
}

const MagazineCard: React.FC<IProps> = ({ name, thumb }) => {
  const [favorite, setFavorite] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <CardContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setFavorite(!favorite)}
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
