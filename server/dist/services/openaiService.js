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
exports.getInsights = void 0;
const openai_1 = require("../config/openai");
const getInsights = (text) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const prompt = `Provide a summary of cultural and historical insights for ${text}.`;
    const response = yield openai_1.openai.chat.completions.create({
        model: 'davinci',
        messages: [{ role: 'user', content: prompt }],
    });
    return (_b = (_a = response.choices[0]) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.content;
});
exports.getInsights = getInsights;
