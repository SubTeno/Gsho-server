"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reading = void 0;
const typeorm_1 = require("typeorm");
const entry_1 = __importDefault(require("./entry"));
let reading = class reading {
};
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], reading.prototype, "entry", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], reading.prototype, "elem", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], reading.prototype, "restr", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], reading.prototype, "info", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], reading.prototype, "prio", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entry_1.default, (entry) => entry.reading),
    (0, typeorm_1.JoinColumn)({
        name: "entry",
    }),
    __metadata("design:type", entry_1.default)
], reading.prototype, "entry_o", void 0);
reading = __decorate([
    (0, typeorm_1.Entity)()
], reading);
exports.reading = reading;