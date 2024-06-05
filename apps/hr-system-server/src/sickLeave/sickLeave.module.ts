import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SickLeaveModuleBase } from "./base/sickLeave.module.base";
import { SickLeaveService } from "./sickLeave.service";
import { SickLeaveController } from "./sickLeave.controller";
import { SickLeaveResolver } from "./sickLeave.resolver";

@Module({
  imports: [SickLeaveModuleBase, forwardRef(() => AuthModule)],
  controllers: [SickLeaveController],
  providers: [SickLeaveService, SickLeaveResolver],
  exports: [SickLeaveService],
})
export class SickLeaveModule {}
