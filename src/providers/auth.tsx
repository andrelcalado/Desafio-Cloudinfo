import { createContext, ReactNode, useState } from "react";

interface UserContextType {
  toggleFavorite: (magazineCard: number) => void;
  getFavorite: (magazineCard: number) => number | undefined;
  favoriteMagazines: {}[];
}

interface UserContextProps {
  children: ReactNode;
}

const initialValue = {
  toggleFavorite: () => {},
  favoriteMagazines: [-1],
  getFavorite: () => undefined,
};

export const UserContext = createContext<UserContextType>(initialValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [favoriteMagazines, setFavoriteMagazines] = useState(
    initialValue.favoriteMagazines
  );

  const removeFavorite = (magazineID: number) => {
    setFavoriteMagazines(
      favoriteMagazines.filter((item) => {
        return item !== magazineID;
      })
    );
  };

  const getFavorite = (magazineID: number) => {
    return favoriteMagazines.find((item) => item === magazineID);
  };

  const toggleFavorite = (magazineID: number) => {
    getFavorite(magazineID)
      ? removeFavorite(magazineID)
      : setFavoriteMagazines([...favoriteMagazines, magazineID]);
  };

  return (
    <UserContext.Provider
      value={{ favoriteMagazines, toggleFavorite, getFavorite }}
    >
      {children}
    </UserContext.Provider>
  );
};
