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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCompanyDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateCompanyDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'name', example: 'Cleinsight' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCompanyDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'logo', example: 'https://www.bing.com/images/search?view=detailV2&ccid=WsF0v3nM&id=BEDBBDAF38CB5C0215F4EFD12C6431983BBE461F&thid=OIP.WsF0v3nMdgYOMiHdCZq9MAHaDd&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.5ac174bf79cc76060e3221dd099abd30%3frik%3dH0a%252bO5gxZCzR7w%26riu%3dhttp%253a%252f%252fwww.sciencepark.upm.edu.my%252fimages%252fsciencepark%252flogo_UPM.png%26ehk%3dc%252fGGDP%252f9nBkbOLqUedswwzFrzZSEHnHzFdmKLoOYdfc%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1535&expw=3289&q=logo+url+upm&simid=608005294741865862&FORM=IRPRST&ck=83192D92F3701C7FF641F0329F359531&selectedIndex=0' }),
    __metadata("design:type", Number)
], CreateCompanyDto.prototype, "logo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'phone_number', example: '0182232341' }),
    __metadata("design:type", Number)
], CreateCompanyDto.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'email', example: 'cle@cleinsight.com' }),
    __metadata("design:type", String)
], CreateCompanyDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'address', example: 'Dhaka' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCompanyDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'create time', example: '2022-02-01' }),
    __metadata("design:type", Date)
], CreateCompanyDto.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'update time', example: '2022-02-01' }),
    __metadata("design:type", Date)
], CreateCompanyDto.prototype, "updated_at", void 0);
exports.CreateCompanyDto = CreateCompanyDto;
//# sourceMappingURL=create-company.dto.js.map