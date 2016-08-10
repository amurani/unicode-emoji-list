// Paste this code in your browser's console when on
// http://unicode.org/emoji/charts/full-emoji-list.html
var emojis = { };

// skin tones are no 353, 354, 355, 356, 357

var flaggedEmojis = [4, 40, 68, 69, 70, 74, 75, 183, 184, 185, 186, 187, 188, 207, 208, 209, 210,
  211, 212, 219, 220, 221, 222, 223, 224, 267, 268, 269, 270, 271, 272, 279, 280, 281, 282, 283,
  284, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 353, 354, 355, 356, 357, 364,
  365, 366, 367, 368, 369, 412, 413, 414, 415, 416, 417, 430, 431, 432, 433, 434, 435, 478, 479,
  480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 532, 533, 534,
  535, 536, 537, 574, 622, 627, 636, 652, 660, 674, 675, 676, 680, 690, 694, 695, 696, 710,
  741, 742, 744, 745, 748, 753, 754, 755, 759, 766, 767, 769, 771, 799, 809, 810, 813, 917,
  918, 919, 928, 1057, 1058, 1059, 1074, 1075, 1123, 1124, 1125, 1126, 1127, 1128, 1129,
  1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143,
  1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1189, 1327, 1448];

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
    description: $(this).siblings('.name').first().text(),
    flagged: (flaggedEmojis.indexOf( parseInt($(this).first().prev().text()) ) !== -1),
    keywords: $(this).siblings('.name').last().text().split(', ')
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
