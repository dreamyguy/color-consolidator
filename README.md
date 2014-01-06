# Color Consolidator

> An application that helps one to consolidate colors on a styleguide used by several projects and maintained by many

## Purpose

This application was designed out of a need to consolidate colors spread over several projects/products into a single style-guide, that would then be shared and maintained by a team of UX and Frontend Developers.

The app is a combination of [AngularJS][1] & [Firebase][2] goodness. It's connected to a Firebase database that - with the help of AngularJS - is updated instantly whenever data is added, edited or deleted, giving those who are maintaining the *Color Consolidator* the advantage of real-time viewing & editing.

###The requirements for the application were:

* All colors already added to the Consolidator should be viewed at a glance.
* It should be simple to search for existing colors.
    * By color's CSS Name, HEX or RGBA (HEX should be used instead of RGB).
    * By color family (added manually to group similar color groups together).
    * By color variable name.
* It should be simple to add colors.
* It should be simple to edit colors.
* It should be possible to delete colors, through the edit dialog.

## Getting started

For testing purposes, the app should pretty much work out of the box. Just open `index.html` and smile.

If you would like to customize it and make it work for your own ends - like maintaining your own set of colors with your own team - then I would highly recommend using [Grunt][3] as a way to speed the development. To do that, you'll need to install the dependencies it needs to work locally, by navigating to the directory you've cloned this repository to and running:

```shell
npm install
```

> Note that you may have to install [NodeJS][4] before you run this command.

Once all the dependencies have been installed, you're set! Start the application by running:

```shell
grunt serve
```

If you haven't used **Grunt** before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide.

### Making it your own

To make this app _your own_, you'll need to do 3 things:

1. Update the *Firebase* URL `https://color-consolidator.firebaseio.com/` on `app/js/app.js` with your own *Firebase* URL.
    * The service is free, unless you're into something really big (free up to 5 GB Data Transfer, 50 Max Connections, 100 MB Data Storage).
2. Change the structure & data of your *Firebase* so that it accommodates to your needs.
    * The easiest way to do that is by creating a `JSON` file and importing it into the *Firebase*.
    * Use the [provided sample](https://github.com/dreamyguy/color-consolidator/blob/master/sample/colors.json) `JSON` as a guide.
3. Change the markup on both `list.html` and `detail.html` so that it reflects the structure of your *Firebase*.

> Make sure you don't forget the trailing slash on the *Firebase* URL, otherwise the app won't work as expected!

## Taking it further

You're welcome to fork this repo, create issues and pull requests!

## Release History

 * 2014-01-06   v0.0.1   First official release. The app has all the initially planned functionality and runs as expected.
 * 2014-01-01   v0.0.0   Repo created.

---

The initial code was based on the “Wire up a Backend” example on [AngularJS'][1] file. My sincere thanks to all those that helped put that example together.

  [1]: http://angularjs.org/
  [2]: https://www.firebase.com/
  [3]: http://gruntjs.com/
  [4]: http://nodejs.org/
