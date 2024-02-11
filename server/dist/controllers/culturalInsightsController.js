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
exports.getCulturalInsights = void 0;
const openaiService_1 = require("../services/openaiService");
const getCulturalInsights = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { location } = req.body;
    if (!location) {
        return res.status(400).json({ error: 'Missing location' });
    }
    try {
        const insights = yield (0, openaiService_1.getInsights)(location);
        res.json({ insights });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});
exports.getCulturalInsights = getCulturalInsights;
