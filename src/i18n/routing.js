"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routing = void 0;
var routing_1 = require("next-intl/routing");
exports.routing = (0, routing_1.defineRouting)({
    // A list of all locales supported by the app.
    locales: ["en", "he"],
    // The default locale to use when no locale is specified.
    defaultLocale: "en",
});
