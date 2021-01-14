import { RECEPTI } from "../../data/test-podaci";
import { PROMJENA_FAVORITA, POSTAVI_FILTERE } from "../actions/recepti";

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
    case POSTAVI_FILTERE:
      const filteri = action.filteri
      const noviRecepti = state.recepti.filter(recept =>{
        if (filteri.bezGlutena && !recept.bezGlutena){
          return false
        }
        if (filteri.bezLaktoze && !recept.bezLaktoze){
          return false
        }
        if (filteri.vegansko && !recept.vegansko){
          return false
        }
        if (filteri.vegetarijansko && !recept.vegetarijansko){
          return false
        }
        return true
      })
      return {...state, filterRecepti: noviRecepti}
    default:
      return state;
  }
};
export default receptReducer;
