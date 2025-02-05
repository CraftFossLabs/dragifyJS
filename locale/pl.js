"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var traitInputAttr = {
  placeholder: 'Wpisz tutaj'
};
var _default = exports.default = {
  assetManager: {
    addButton: 'Dodaj obrazek',
    inputPlh: 'http://path/to/the/image.jpg',
    modalTitle: 'Wybierz obrazek',
    uploadTitle: 'Wybierz lub przeciągnij plik z dysku'
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
      '': 'Blok',
      wrapper: 'Body',
      text: 'Tekst',
      comment: 'Komentarz',
      image: 'Obrazek',
      video: 'Wideo',
      label: 'Etykieta',
      link: 'Odnośnik',
      map: 'Mapa',
      tfoot: 'Stopka tabeli',
      tbody: 'Ciało tabeli',
      thead: 'Nagłówek tabeli',
      table: 'Tabela',
      row: 'Wiersz',
      cell: 'Komórka'
    }
  },
  deviceManager: {
    device: 'Urządzenie',
    devices: {
      desktop: 'Desktop',
      tablet: 'Tablet',
      mobileLandscape: 'Telefon Poziomo',
      mobilePortrait: 'Telefon Pionowo'
    }
  },
  panels: {
    buttons: {
      titles: {
        preview: 'Podgląd',
        fullscreen: 'Pełen ekran',
        'sw-visibility': 'Pokaż linie',
        'export-template': 'Zobacz źródło',
        'open-sm': 'Edytuj style i atrybuty CSS',
        'open-tm': 'Ustawienia elementu',
        'open-layers': 'Warstwy szablonu',
        'open-blocks': 'Komponenty'
      }
    }
  },
  selectorManager: {
    label: 'Klasy CSS',
    selected: 'Wybrane',
    emptyState: '- wybierz -',
    states: {
      hover: 'Hover',
      active: 'Click',
      'nth-of-type(2n)': 'Tylko parzyste'
    }
  },
  styleManager: {
    empty: 'Wybierz element aby edytować jego atrybuty',
    layer: 'Warstwa',
    fileButton: 'Obrazki',
    sectors: {
      general: 'Główne',
      layout: 'Szablon',
      typography: 'Typografia',
      decorations: 'Dekoracje',
      extra: 'Dodatki',
      flex: 'Flex',
      dimension: 'Wymiary'
    },
    // The core library generates the name by their `property` name
    properties: {
      float: 'Wyrównanie',
      display: 'Wyświetlanie',
      position: 'Pozycja',
      top: 'Góra',
      right: 'Prawo',
      bottom: 'Dół',
      left: 'Lewo',
      width: 'Szerokość',
      'min-width': 'Min. szerokość',
      'max-width': 'Maks. szerokość',
      height: 'Wysokość',
      'min-height': 'Min. wysokość',
      'max-height': 'Maks. wysokość',
      margin: 'Margines',
      'margin-top': 'Margines górny',
      'margin-right': 'Margines prawy',
      'margin-bottom': 'Margines dolny',
      'margin-left': 'Margines lewy',
      padding: 'Odstęp wewnętrzny',
      'padding-top': 'Odstęp górny',
      'padding-right': 'Odstęp prawy',
      'padding-bottom': 'Odstęp dolny',
      'padding-left': 'Odstęp lewy',
      'font-family': 'Krój czcionki',
      'font-size': 'Rozmiar',
      'font-weight': 'Grubość czcionki',
      'letter-spacing': 'Odstęp liter',
      'line-height': 'Wysokość wiersza',
      color: 'Kolor',
      'text-shadow': 'Cień tekstu',
      'text-align': 'Wyrównanie',
      'text-shadow-h': 'Przes. poziome',
      'text-shadow-v': 'Przes. pionowe',
      'text-shadow-blur': 'Rozmycie',
      'text-shadow-color': 'Kolor',
      'border-radius': 'Zaokrąglenie',
      'border-top-left-radius': 'Lewy górny róg',
      'border-top-right-radius': 'Prawy górny róg',
      'border-bottom-left-radius': 'Lewy dolny róg',
      'border-bottom-right-radius': 'Prawy dolny róg',
      border: 'Obramowanie',
      'border-width': 'Szerokość',
      'border-style': 'Styl',
      'border-color': 'Kolor',
      'box-shadow': 'Cień',
      'box-shadow-h': 'Przes. poziome',
      'box-shadow-v': 'Przes. pionowe',
      'box-shadow-blur': 'Rozmycie',
      'box-shadow-spread': 'Rozszerzanie',
      'box-shadow-color': 'Kolor',
      'box-shadow-type': 'Rodzaj',
      background: 'Tło',
      'background-image': 'Obrazek',
      'background-repeat': 'Powtarzanie',
      'background-position': 'Pozycja',
      'background-attachment': 'Przypięcie',
      'background-size': 'Rozmiar',
      'background-color': 'Kolor',
      transition: 'Efekty przejścia',
      'transition-property': 'Dotyczy atrybutu',
      'transition-duration': 'Czas trwania',
      'transition-timing-function': 'Funkcja czasu',
      perspective: 'Perspektywa',
      transform: 'Transformacje',
      'transform-rotate-x': 'Obrót osi X',
      'transform-rotate-y': 'Obrót osi Y',
      'transform-rotate-z': 'Obrót osi Z',
      'transform-scale-x': 'Skala osi X',
      'transform-scale-y': 'Skala osi Y',
      'transform-scale-z': 'Skala osi Z'
    }
  },
  traitManager: {
    empty: 'Wybierz element aby edytować jego ustawienia',
    label: 'Ustawienia elementu',
    traits: {
      // The core library generates the name by their `name` property
      labels: {
        id: 'Identyfikator',
        alt: 'Tekst alternatywny',
        title: 'Tytuł',
        href: 'Adres odnośnika',
        target: 'Cel'
      },
      // In a simple trait, like text input, these are used on input attributes
      attributes: {
        id: traitInputAttr,
        alt: traitInputAttr,
        title: traitInputAttr,
        href: {
          placeholder: 'np. https://google.com'
        }
      },
      // In a trait like select, these are used to translate option names
      options: {
        target: {
          false: 'Te okno',
          _blank: 'Nowe okno'
        }
      }
    }
  }
};