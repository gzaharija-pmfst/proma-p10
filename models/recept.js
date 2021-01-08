class Recept {
  constructor(
    id,
    idKategorija,
    naziv,
    cijena,
    slozenost,
    urlSlike,
    vrijeme,
    sastojci,
    koraci,
    bezGlutena,
    vegansko,
    vegetarijnsko,
    bezLaktoze
  ) {
    this.id = id;
    this.idKategorija = idKategorija;
    this.naziv = naziv;
    this.cijena = cijena;
    this.slozenost = slozenost;
    this.urlSlike = urlSlike;
    this.vrijeme = vrijeme;
    this.sastojci = sastojci;
    this.koraci = koraci;
    this.bezGlutena = bezGlutena;
    this.vegansko = vegansko;
    this.vegetarijnsko = vegetarijnsko;
    this.bezLaktoze = bezLaktoze;
  }
}

export default Recept;
