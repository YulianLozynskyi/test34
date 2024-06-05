import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SickLeaveService } from "./sickLeave.service";
import { SickLeaveControllerBase } from "./base/sickLeave.controller.base";

@swagger.ApiTags("sickLeaves")
@common.Controller("sickLeaves")
export class SickLeaveController extends SickLeaveControllerBase {
  constructor(
    protected readonly service: SickLeaveService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
