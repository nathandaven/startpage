# My custom startpage and Firefox CSS theme

Merging the projects of [Tilde](https://github.com/nathandaven/tilde) and [startpage](https://github.com/nathandaven/startpage) forked into one. Shout out to the original creators of both! Confirmed working on MacOS and Windows.

![startpage](preview.gif)

This repository includes my API key. The API key is attached to a dummy account, however please refrain from using it. Please go make your own and rebuild for long term use!

Firefox extension is compiled and signed using web-ext. Please read the documentation on web-ext if you are interested in creating and signing your own version of this project.

## Local Storage options

You can now set your name, lat, and longitude by local storage. The weather will default to the user's location if given, but will use these as a fall back.

```js
localStorage.setItem("lat", "33.7490");  // atlanta
localStorage.setItem("lon", "-84.3880"); // atlanta
localStorage.setItem("name", "nathan");  // me
```

This will persist across sessions.

## Web-ext credentials

Get credentials [here](https://addons.mozilla.org/developers/addon/api/key/) to build the web web extension.

See [here](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) for documentation from Mozilla.

To build without signing: `npm install` -> `npm run build`

To build with signing: `npm install` -> `npm run sign`

## Credits

Complete credit goes to these developers and their sources:

- Searching mechanism:
  https://github.com/nathandaven/tilde

- General design:
  https://github.com/nathandaven/startpage

- Focus content on newtab script:
  https://github.com/gdh1995/vimium-c-helpers/blob/master/newtab/newtab.js

- My custom Firefox userChrome.css based on this [project](https://github.com/ranmaru22/firefox-vertical-tabs):  
  https://gist.github.com/nathandaven/67f293758f13971882adf334b66db8ed

- My Tab Centern Reborn custom css config:
  https://gist.github.com/nathandaven/93f52bdc881a6e7cc621e097404b0d01

## Screenshots

![startpage](dark-screenshot.png)

![startpage](light-screenshot.png)
