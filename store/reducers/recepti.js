import { RECEPTI } from "../../data/test-podaci";

const pocetnoStanje = {
  recepti: RECEPTI,
  filterRecepti: RECEPTI,
  favoritRecepti: [],
};

const receptReducer = (state = pocetnoStanje, action) => {
  return state;
};
export default receptReducer;
