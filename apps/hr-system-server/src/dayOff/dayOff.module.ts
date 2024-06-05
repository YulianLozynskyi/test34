import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DayOffModuleBase } from "./base/dayOff.module.base";
import { DayOffService } from "./dayOff.service";
import { DayOffController } from "./dayOff.controller";
import { DayOffResolver } from "./dayOff.resolver";

@Module({
  imports: [DayOffModuleBase, forwardRef(() => AuthModule)],
  controllers: [DayOffController],
  providers: [DayOffService, DayOffResolver],
  exports: [DayOffService],
})
export class DayOffModule {}
