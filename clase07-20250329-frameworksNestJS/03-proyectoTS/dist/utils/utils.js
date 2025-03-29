"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeroe = exports.getCodigo = void 0;
const getCodigo = () => __awaiter(void 0, void 0, void 0, function* () {
    // procesas algo para lo que necesitas await
    return 990007;
});
exports.getCodigo = getCodigo;
class Heroe {
    constructor(name, alias) {
        this.name = name;
        this.alias = alias;
    }
}
const getHeroe = () => {
    let heroe;
    heroe = {
        name: "Batman",
        alias: "Bruce Wayne",
        id: 1
    };
    let heroe2 = {
        name: "Robin",
        alias: "D.Grayson",
        id: 2
    };
    let heroe3;
    heroe3 = {
        name: "Hulk",
        alias: "B.Banner",
    };
    return heroe;
};
exports.getHeroe = getHeroe;
