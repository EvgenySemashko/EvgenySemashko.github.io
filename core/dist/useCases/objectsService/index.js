"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const object_1 = __importDefault(require("../../repository/database/object"));
class ObjectsService {
    constructor() {
        this.getList = async () => {
            const { value, error } = await object_1.default.getList();
            if (error)
                return { error: error };
            return { value: value };
        };
        this.getObject = async (id) => {
            const { value, error } = await object_1.default.getObject(id);
            if (error)
                return { error: error };
            return { value: value };
        };
        this.createObject = async (img, name, region, text, rate) => {
            const { value, error } = await object_1.default.createObject(img, name, region, text, rate);
            if (error)
                return { error: error };
            return { value: value };
        };
        this.getObjectByName = async (name) => {
            const { value, error } = await object_1.default.getObjectByName(name);
            if (error)
                return { error: error };
            return { value: value };
        };
        this.getObjectsByQuery = async () => {
            const { value, error } = await object_1.default.getObjectsByQuery();
            if (error)
                return { error: error };
            return { value: value };
        };
    }
}
exports.default = new ObjectsService();
