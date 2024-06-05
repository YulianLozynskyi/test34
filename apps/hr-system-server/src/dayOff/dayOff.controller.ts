import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DayOffService } from "./dayOff.service";
import { DayOffControllerBase } from "./base/dayOff.controller.base";

@swagger.ApiTags("dayOffs")
@common.Controller("dayOffs")
export class DayOffController extends DayOffControllerBase {
  constructor(
    protected readonly service: DayOffService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
