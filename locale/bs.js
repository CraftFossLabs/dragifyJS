"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var traitInputAttr = {
  placeholder: 'Ovdje ide tekst'
};
var _default = exports.default = {
  assetManager: {
    addButton: 'Dodaj sliku',
    inputPlh: 'http://putanja/url/do/slike.jpg',
    modalTitle: 'Odaberi sliku',
    uploadTitle: 'Ubaci datoteke ovdje ili klikni za Upload'
  },
  // Here just as a reference, GrapesJS core doesn't contain any block,
  // so this should be omitted from other local files
  blockManager: {
    labels: {
      // 'block-id': 'Block Label',
    },
    categories: {
      // 'category-id': 'Category Label',
    }
  },
  domComponents: {
    names: {
      '': 'Boks',
      wrapper: 'Struktura',
      text: 'Tekst',
      comment: 'Komentar',
      image: 'Slika',
      video: 'Video',
      label: 'Oznaka',
      link: 'Link',
      map: 'Mapa',
      tfoot: 'Podnožje tabele',
      tbody: 'Struktura tabele',
      thead: 'Zaglavlje tabele',
      table: 'Tabela',
      row: 'Red tabele',
      cell: 'Ćelija tabele'
    }
  },
  deviceManager: {
    device: 'Uređaj',
    devices: {
      desktop: 'Računar',
      tablet: 'Tablet',
      mobileLandscape: 'Mobitel vodoravno',
      mobilePortrait: 'Mobitel uspravno'
    }
  },
  panels: {
    buttons: {
      titles: {
        preview: 'Pregled',
        fullscreen: 'Čitav ekran',
        'sw-visibility': 'Vidi komponente',
        'export-template': 'Vidi kod',
        'open-sm': 'Otvori postavke izgleda',
        'open-tm': 'Postavke',
        'open-layers': 'Otvori postavke slojeva',
        'open-blocks': 'Otvori blokove'
      }
    }
  },
  selectorManager: {
    label: 'Klase',
    selected: 'Odabrano',
    emptyState: '- Stanje -',
    states: {
      hover: 'Miš preko',
      active: 'Kliknuto',
      'nth-of-type(2n)': 'Parno/Neparno'
    }
  },
  styleManager: {
    empty: 'Odaberi element prije korištenja Postavki Izgleda',
    layer: 'Sloj',
    fileButton: 'Slike',
    sectors: {
      general: 'Općenito',
      layout: 'Raspored',
      typography: 'Izgled teksta',
      decorations: 'Dekoracije',
      extra: 'Dodatno',
      flex: 'Flex',
      dimension: 'Dimenzije'
    },
    // The core library generates the name by their `property` name
    properties: {
      float: 'Plutanje',
      display: 'Prikaz',
      position: 'Pozicija',
      top: 'Vrh',
      right: 'Desno',
      left: 'Lijevo',
      bottom: 'Dno',
      width: 'Širina',
      height: 'Visina',
      'max-width': 'Maksimalna širina',
      'max-height': 'Maksimalna visina',
      margin: 'Margina',
      'margin-top': 'Margina od vrha',
      'margin-right': 'Margina od desno',
      'margin-left': 'Margina od lijevo',
      'margin-bottom': 'Margina od dna',
      padding: 'Unutrašnji razmak',
      'padding-top': 'Unutrašnji razmak od vrha',
      'padding-left': 'Unutrašnji razmak od lijevo',
      'padding-right': 'Unutrašnji razmak od desno',
      'padding-bottom': 'Unutrašnji razmak od dna',
      'font-family': 'Font',
      'font-size': 'Veličina fonta',
      'font-weight': 'Debljina fonta',
      'letter-spacing': 'Razmak između slova',
      color: 'Boja',
      'line-height': 'Visina lnije',
      'text-align': 'Ravnanje teksta',
      'text-shadow': 'Sjena teksta',
      'text-shadow-h': 'Sjena teksta: horizontalno',
      'text-shadow-v': 'Sjena teksta: vertikalno',
      'text-shadow-blur': 'Sjena teksta: zamagljenost',
      'text-shadow-color': 'Sjena teksta: boja',
      'border-top-left': 'Granica gore lijevo',
      'border-top-right': 'Granica gore desno',
      'border-bottom-left': 'Granica dole lijevo',
      'border-bottom-right': 'Granica dole desno',
      'border-radius-top-left': 'Zaobljenost granice gore lijevo',
      'border-radius-top-right': 'Zaobljenost granice gore desno',
      'border-radius-bottom-left': 'Zaobljenost granice dole lijevo',
      'border-radius-bottom-right': 'Zaobljenost granice dole desno',
      'border-radius': 'Zaobljenost granice',
      border: 'Granica',
      'border-width': 'Debljina granice',
      'border-style': 'Izgled granice',
      'border-color': 'Boja granice',
      'box-shadow': 'Sjena',
      'box-shadow-h': 'Sjena: horizontalno',
      'box-shadow-v': 'Sjena: vertikalno',
      'box-shadow-blur': 'Sjena: zamagljenost',
      'box-shadow-spread': 'Sjena: širenje',
      'box-shadow-color': 'Sjena: boja',
      'box-shadow-type': 'Sjena: tip',
      background: 'Pozadina',
      'background-image': 'Pozadinska slika',
      'background-repeat': 'Ponavljanje pozadine',
      'background-position': 'Pozicija pozadine',
      'background-attachment': 'Vezanost pozadine',
      'background-size': 'Veličina pozadine',
      'background-color': 'Boja pozadine',
      transition: 'Tranzicija',
      'transition-property': 'Tip tranzicije',
      'transition-duration': 'Trajanje tranzicije',
      'transition-timing-function': 'Vremenska funkcija tranzicije',
      perspective: 'Perspektiva',
      transform: 'Transformacija',
      'transform-rotate-x': 'Transformacija: Rotacija x',
      'transform-rotate-y': 'Transformacija: Rotacija y',
      'transform-rotate-z': 'Transformacija: Rotacija z',
      'transform-scale-x': 'Transformacija: Skala x',
      'transform-scale-y': 'Transformacija: Skala y',
      'transform-scale-z': 'Transformacija: Skala z',
      'flex-direction': 'Smjer Flex-a',
      'flex-wrap': 'Flex wrap',
      'justify-content': 'Rasporedi sadržaj',
      'align-items': 'Poravnaj stavke',
      'align-content': 'Poravnaj sadržaj',
      order: 'Red',
      'flex-basis': 'Flex Basis',
      'flex-grow': 'Flex Rast',
      'flex-shrink': 'Flex Smanjenje',
      'align-self': 'Poravnaj sebe'
    }
  },
  traitManager: {
    empty: 'Odaberi element prije korištenja Postavki Osobina',
    label: 'Postavke komponente',
    traits: {
      // The core library generates the name by their `name` property
      labels: {
        // id: 'Id',
        // alt: 'Opis',
        // title: 'Naslov',
        // href: 'Link',
      },
      // In a simple trait, like text input, these are used on input attributes
      attributes: {
        id: traitInputAttr,
        alt: traitInputAttr,
        title: traitInputAttr,
        href: {
          placeholder: 'npr. https://google.com'
        }
      },
      // In a trait like select, these are used to translate option names
      options: {
        target: {
          false: 'Ovaj prozor',
          _blank: 'Novi prozor'
        }
      }
    }
  }
};