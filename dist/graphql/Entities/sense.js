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
exports.sense = void 0;
const typeorm_1 = require("typeorm");
const entry_1 = __importDefault(require("./entry"));
const gloss_1 = require("./gloss");
let sense = class sense {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], sense.prototype, "sID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], sense.prototype, "entry", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], sense.prototype, "pos", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], sense.prototype, "lang", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], sense.prototype, "info", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], sense.prototype, "xref", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entry_1.default, (entry) => entry.sense),
    (0, typeorm_1.JoinColumn)({
        name: "entry",
    }),
    __metadata("design:type", entry_1.default)
], sense.prototype, "entry_o", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => gloss_1.gloss, (gloss) => gloss.sense),
    __metadata("design:type", Array)
], sense.prototype, "gloss_o", void 0);
sense = __decorate([
    (0, typeorm_1.Entity)()
], sense);
exports.sense = sense;
