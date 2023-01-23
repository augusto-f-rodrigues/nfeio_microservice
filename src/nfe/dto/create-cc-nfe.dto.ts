import { IsString } from "class-validator";
import { IsNotEmpty } from "class-validator/types/decorator/decorators";

export class CreateCcNfeDto{
  @IsString()
  @IsNotEmpty()
  reason: string;
}