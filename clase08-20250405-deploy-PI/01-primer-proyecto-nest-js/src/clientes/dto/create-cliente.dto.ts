import { IsEmail, IsNumber, IsOptional, IsString, IsStrongPassword } from "class-validator"

export class CreateClienteDto {

    @IsString()
    name:string

    @IsEmail()
    email:string

    @IsString()
    cuit:string

    @IsStrongPassword()
    password:string

    @IsNumber()
    @IsOptional()
    edad?:number
}
