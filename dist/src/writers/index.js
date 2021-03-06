"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryAllureWriter = exports.FileSystemAllureWriter = void 0;
var FileSystemAllureWriter_1 = require("./FileSystemAllureWriter");
Object.defineProperty(exports, "FileSystemAllureWriter", { enumerable: true, get: function () { return FileSystemAllureWriter_1.FileSystemAllureWriter; } });
var InMemoryAllureWriter_1 = require("./InMemoryAllureWriter");
Object.defineProperty(exports, "InMemoryAllureWriter", { enumerable: true, get: function () { return InMemoryAllureWriter_1.InMemoryAllureWriter; } });
__exportStar(require("./utils"), exports);
//# sourceMappingURL=index.js.map