import node from "@joystick.js/node";
import api from "./api";

node.app({
  api,
  routes: {
    "/": (req, res) => {
      res.render("ui/pages/index/index.js", {
        layout: "ui/layouts/app/index.js",
      });
    },
    "/page": (req, res) => {
      res.render("ui/pages/index/index.js");
    },
    "/layout": (req, res) => {
      res.render("ui/pages/index/index.js", {
        layout: "ui/layouts/app/index.js",
      });
    },
    "/layout-with-user": (req, res) => {
      res.render("ui/pages/index/index.js", {
        layout: "ui/layouts/app/index.js",
      });
    },
    "/redirect": (req, res) => {
      res.redirect('/');
    },
    "/public": (req, res) => {
      req?.context?.ifLoggedIn('/authenticated', () => {
        res.render("ui/pages/public/index.js", {
          layout: "ui/layouts/app/index.js",
        });
      });
    },
    "/authenticated": (req, res) => {
      req?.context?.ifNotLoggedIn('/', () => {
        res.render("ui/pages/authenticated/index.js", {
          layout: "ui/layouts/app/index.js",
        });
      });
    },
    "*": (req, res) => {
      res.render("ui/pages/error/index.js", {
        layout: "ui/layouts/app/index.js",
        props: {
          statusCode: 404,
        },
      });
    },
  },
});
