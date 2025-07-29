"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var middleware_1 = require("next-intl/middleware");
var routing_1 = require("./i18n/routing");
exports.default = (0, middleware_1.default)(routing_1.routing);
exports.config = {
    // Match all pathnames except for
    // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
