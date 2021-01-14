export const PROMJENA_FAVORITA = 'PROMJENA_FAVORITA';
export const POSTAVI_FILTERE = 'POSTAVI_FILTERE'

export const promjenaFavorita = (id) => {
  return {
    type: PROMJENA_FAVORITA,
    idRecepta: id
  }
}

export const postaviFiltere = (vrijednostFiltera) => {
  return {
    type: POSTAVI_FILTERE,
    filteri: vrijednostFiltera
  }
}