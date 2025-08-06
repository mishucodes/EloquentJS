let text = "'I'm the cook,' he said, 'it's my job.'";

//Version 01:
console.log(text.replace(/(^'|\s'|'\s|'$)/g, "\""));

//Author's Version:
console.log(text.replace(/(^|\P{L})'|'(\P{L}|$)/gu, '$1"$2'));