/**{START_EVENTS}*/
export enum ParserEvents {
  /**
   * @event `parse:html` On HTML parse, an object containing the input and the output of the parser is passed as an argument.
   * @example
   * editor.on('parse:html', ({ input, output }) => { ... });
   */
  html = 'parse:html',
  htmlRoot = 'parse:html:root',

  /**
   * @event `parse:css` On CSS parse, an object containing the input and the output of the parser is passed as an argument.
   * @example
   * editor.on('parse:css', ({ input, output }) => { ... });
   */
  css = 'parse:css',

  /**
   * @event `parse` Catch-all event for all the events mentioned above. An object containing all the available data about the triggered event is passed as an argument to the callback.
   * @example
   * editor.on('parse', ({ event, ... }) => { ... });
   */
  all = 'parse',
}
/**{END_EVENTS}*/
