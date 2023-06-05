import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCompanyDto {
    @ApiProperty({ description: 'name', example: 'Cleinsight' })
    @IsNotEmpty()
    name: string;

    @ApiProperty({ description: 'logo', example: 'https://www.bing.com/images/search?view=detailV2&ccid=WsF0v3nM&id=BEDBBDAF38CB5C0215F4EFD12C6431983BBE461F&thid=OIP.WsF0v3nMdgYOMiHdCZq9MAHaDd&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.5ac174bf79cc76060e3221dd099abd30%3frik%3dH0a%252bO5gxZCzR7w%26riu%3dhttp%253a%252f%252fwww.sciencepark.upm.edu.my%252fimages%252fsciencepark%252flogo_UPM.png%26ehk%3dc%252fGGDP%252f9nBkbOLqUedswwzFrzZSEHnHzFdmKLoOYdfc%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1535&expw=3289&q=logo+url+upm&simid=608005294741865862&FORM=IRPRST&ck=83192D92F3701C7FF641F0329F359531&selectedIndex=0' })
    logo ?: number;

    
    @ApiProperty({ description: 'phone_number', example: '0182232341' })
    phone_number ?: number;

    @ApiProperty({ description: 'email', example: 'cle@cleinsight.com' })
    email: string;

    
    @ApiProperty({ description: 'address', example: 'Dhaka' })
    @IsNotEmpty()
    address: string;

   
    @ApiProperty({ description: 'create time', example: '2022-02-01' })
    created_at ?: Date;

    
    @ApiProperty({ description: 'update time', example: '2022-02-01' })
    updated_at ?: Date;
}