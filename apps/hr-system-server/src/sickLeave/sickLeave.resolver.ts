import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SickLeaveResolverBase } from "./base/sickLeave.resolver.base";
import { SickLeave } from "./base/SickLeave";
import { SickLeaveService } from "./sickLeave.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SickLeave)
export class SickLeaveResolver extends SickLeaveResolverBase {
  constructor(
    protected readonly service: SickLeaveService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
