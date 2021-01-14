import { RECEPTI } from "../../data/test-podaci";
import { PROMJENA_FAVORITA } from "../actions/recepti";

const pocetnoStanje = {
  recepti: RECEPTI,
  filterRecepti: RECEPTI,
  favoritRecepti: [],
};

const receptReducer = (state = pocetnoStanje, action) => {
  switch (action.type) {
    case PROMJENA_FAVORITA:
      const oznacen = state.favoritRecepti.findIndex(
        (recept) => recept.id === action.idRecepta
      );
      if (oznacen >= 0) {
        const noviFavoriti = [...state.favoritRecepti];
        noviFavoriti.splice(oznacen, 1);
        return { ...state, favoritRecepti: noviFavoriti };
      } else {
        const recept = state.recepti.find((r) => r.id === action.idRecepta);
        return {
          ...state,
          favoritRecepti: state.favoritRecepti.concat(recept),
        };
      }
    default:
      return state;
  }
};
export default receptReducer;
