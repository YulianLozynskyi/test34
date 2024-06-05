/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SickLeaveWhereUniqueInput } from "../../sickLeave/base/SickLeaveWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SickLeaveUpdateManyWithoutEmployeesInput {
  @Field(() => [SickLeaveWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SickLeaveWhereUniqueInput],
  })
  connect?: Array<SickLeaveWhereUniqueInput>;

  @Field(() => [SickLeaveWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SickLeaveWhereUniqueInput],
  })
  disconnect?: Array<SickLeaveWhereUniqueInput>;

  @Field(() => [SickLeaveWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SickLeaveWhereUniqueInput],
  })
  set?: Array<SickLeaveWhereUniqueInput>;
}

export { SickLeaveUpdateManyWithoutEmployeesInput as SickLeaveUpdateManyWithoutEmployeesInput };
