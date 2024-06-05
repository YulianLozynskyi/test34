/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Meeting } from "./Meeting";
import { MeetingCountArgs } from "./MeetingCountArgs";
import { MeetingFindManyArgs } from "./MeetingFindManyArgs";
import { MeetingFindUniqueArgs } from "./MeetingFindUniqueArgs";
import { CreateMeetingArgs } from "./CreateMeetingArgs";
import { UpdateMeetingArgs } from "./UpdateMeetingArgs";
import { DeleteMeetingArgs } from "./DeleteMeetingArgs";
import { Employee } from "../../employee/base/Employee";
import { MeetingService } from "../meeting.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Meeting)
export class MeetingResolverBase {
  constructor(
    protected readonly service: MeetingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Meeting",
    action: "read",
    possession: "any",
  })
  async _meetingsMeta(
    @graphql.Args() args: MeetingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Meeting])
  @nestAccessControl.UseRoles({
    resource: "Meeting",
    action: "read",
    possession: "any",
  })
  async meetings(
    @graphql.Args() args: MeetingFindManyArgs
  ): Promise<Meeting[]> {
    return this.service.meetings(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Meeting, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Meeting",
    action: "read",
    possession: "own",
  })
  async meeting(
    @graphql.Args() args: MeetingFindUniqueArgs
  ): Promise<Meeting | null> {
    const result = await this.service.meeting(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Meeting)
  @nestAccessControl.UseRoles({
    resource: "Meeting",
    action: "create",
    possession: "any",
  })
  async createMeeting(
    @graphql.Args() args: CreateMeetingArgs
  ): Promise<Meeting> {
    return await this.service.createMeeting({
      ...args,
      data: {
        ...args.data,

        employee: args.data.employee
          ? {
              connect: args.data.employee,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Meeting)
  @nestAccessControl.UseRoles({
    resource: "Meeting",
    action: "update",
    possession: "any",
  })
  async updateMeeting(
    @graphql.Args() args: UpdateMeetingArgs
  ): Promise<Meeting | null> {
    try {
      return await this.service.updateMeeting({
        ...args,
        data: {
          ...args.data,

          employee: args.data.employee
            ? {
                connect: args.data.employee,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Meeting)
  @nestAccessControl.UseRoles({
    resource: "Meeting",
    action: "delete",
    possession: "any",
  })
  async deleteMeeting(
    @graphql.Args() args: DeleteMeetingArgs
  ): Promise<Meeting | null> {
    try {
      return await this.service.deleteMeeting(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Employee, {
    nullable: true,
    name: "employee",
  })
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "any",
  })
  async getEmployee(
    @graphql.Parent() parent: Meeting
  ): Promise<Employee | null> {
    const result = await this.service.getEmployee(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
