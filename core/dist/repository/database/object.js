"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const object_1 = require("../../models/dbm/object");
const connector_1 = __importDefault(require("./connector"));
class ObjectRepository {
    constructor() {
        this.getList = async () => {
            var _a;
            try {
                const response = await ((_a = connector_1.default.connector) === null || _a === void 0 ? void 0 : _a.getRepository(object_1.ObjectItem).find());
                return { value: response };
            }
            catch (e) {
                return { error: e };
            }
        };
        this.getObject = async (id) => {
            var _a;
            try {
                const response = await ((_a = connector_1.default.connector) === null || _a === void 0 ? void 0 : _a.getRepository(object_1.ObjectItem).findOne({ where: { id } }));
                return { value: response };
            }
            catch (e) {
                return { error: e };
            }
        };
        this.createObject = async (img, name, region, text, rate) => {
            var _a;
            try {
                const response = await ((_a = connector_1.default.connector) === null || _a === void 0 ? void 0 : _a.getRepository(object_1.ObjectItem).save({ img, name, region, text, rate }));
                return { value: response };
            }
            catch (e) {
                return { error: e };
            }
        };
        this.getObjectByName = async (name) => {
            var _a;
            try {
                const response = await ((_a = connector_1.default.connector) === null || _a === void 0 ? void 0 : _a.getRepository(object_1.ObjectItem).findOne({ where: { name } }));
                return { value: response };
            }
            catch (e) {
                return { error: e };
            }
        };
        this.getObjectsByQuery = async () => {
            var _a;
            try {
                const response = await ((_a = connector_1.default.connector) === null || _a === void 0 ? void 0 : _a.getRepository(object_1.ObjectItem).find());
                return { value: response };
            }
            catch (e) {
                return { error: e };
            }
        };
    }
}
exports.default = new ObjectRepository();
