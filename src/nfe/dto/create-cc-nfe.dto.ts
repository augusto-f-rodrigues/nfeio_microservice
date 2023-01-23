
import { IsString } from "class-validator";
import { IsNotEmpty } from "class-validator";


export class CreateCcNfeDto {
  @IsString()
  @IsNotEmpty()
  reason: string;
}
