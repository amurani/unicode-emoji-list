// Paste this code in your browser's console when on
// http://unicode.org/emoji/charts/full-emoji-list.html
var emojis = { };

// High level emoji groups
// Reference: http://unicode.org/emoji/charts/emoji-ordering.html
var emojiOrdering = [
  ["Smileys & People", 619],
  ["Animals & Nature", 815],
  ["Travel & Places", 1034],
  ["Activities", 1165],
  ["Objects", 1327],
  ["Symbols", 1529],
  ["Flags", 1791]
];

emojiOrdering.forEach(function(group) {
  emojis[ group[0] ] = [];
});


var _emojis = [];
$('td.code').each(function() {
  _emojis.push({
    no: parseInt($(this).first().prev().text()),
    code: $(this).text(),
    emoji: $(this).next().text(),
    description: $(this).siblings('.name').first().text()
  });
});

for (var index = _emojis.length - 1; index >= 0; index--) {
  var emoji = _emojis[index];
  // Determine if this is a child emoji and get the parent emoji
  var types = emoji.code.match(/U[+]+[0-9A-F]*/gi)
  if (Array.isArray(types) && types.length === 2) {
    var parentEmojiCode = types[0];
    var parentEmoji = _emojis.filter(function(_emoji) {
      return _emoji.code === parentEmojiCode;
    })[0];

    if (emoji.no < 1535) {
      // Initialise the parent emoji types and append child emoji types
      if (!parentEmoji.hasOwnProperty('types'))
        parentEmoji['types'] = [];

      parentEmoji['types'].push(emoji.code);

      // Clean up and remove this child emoji
      _emojis.splice(index, 1);
    }
  }
}


_emojis.forEach(function(emoji) {
  var emojiGroup = emojiOrdering.filter(function(group) {
    return emoji.no <= group[1];
  })[0][0];
  emojis[emojiGroup].push(emoji);
});

JSON.stringify(emojis);
