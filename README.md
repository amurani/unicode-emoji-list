# unicode-emoji-list
This repo contains JSON files containing a list of emojis as based on the Unicode CLDR data and the javascript code that was used to extract and build the JSON files.

# Motivation
I was working on an emoji picker plugin to be implemented via JS but was finding it hard to find a solution that would provide a list of emojis similar to what you'd find on mobile devices and most notably WhatsApp which has (aleast IMO) the best implementation of the unicode emoji standard. This repo has JSON files with the unicodes for the full emoji data listed on [unicode.org](http://unicode.org/emoji/charts/full-emoji-list.html).

# Extraction
I wrote a simple JS script that can pe pasted in the console of a browser's dev tools when on linked page above. It will extract and group the emojis for you then output a JSON string you can copy to wherever you'd want to. The emoji groupings are at the higher level as defined on this page on [emoji ordering](http://unicode.org/emoji/charts/emoji-ordering.html) from unicode.org.

# The files...
The `simple-emoji-list.json` file only has the **emoji code** while the `full-emoji-list.json` file has the **emoji code, the emoji itself** and the **emoji description**.

#### simple-emoji-list.json
```
  ...
  {
    "no":1,
    "code":"U+1F600"
  },
  ...
```

and 
#### full-emoji-list.json
```
  ...
  {
    "no":1,
    "code":"U+1F600",
    "emoji":"😀",
    "description":"GRINNING FACE"
  },
  ...
```

Also, where applicable, the emoji's object will have a __type__ property to account for skin tones as follows
```
  ...
  {
    "no":99,
    "code":"U+1F466",
    "types":[
      "U+1F466 U+1F3FF",
      "U+1F466 U+1F3FE",
      "U+1F466 U+1F3FD",
      "U+1F466 U+1F3FC",
      "U+1F466 U+1F3FB"
    ]
  },
  ...
```

*In both json files ignore the __no__ property. I'll probably remove it later*

#### API
Not sure how long this will be available for but I came across [Myjson](http://myjson.com/) and I added the content of `simple-emoji-list.json`. You can access its JSON content via [https://api.myjson.com/bins/oc1p](https://api.myjson.com/bins/oc1p).

### Hope this helps you somehow 😃!
