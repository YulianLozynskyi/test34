/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { EmployeeService } from "../employee.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EmployeeCreateInput } from "./EmployeeCreateInput";
import { Employee } from "./Employee";
import { EmployeeFindManyArgs } from "./EmployeeFindManyArgs";
import { EmployeeWhereUniqueInput } from "./EmployeeWhereUniqueInput";
import { EmployeeUpdateInput } from "./EmployeeUpdateInput";
import { DayOffFindManyArgs } from "../../dayOff/base/DayOffFindManyArgs";
import { DayOff } from "../../dayOff/base/DayOff";
import { DayOffWhereUniqueInput } from "../../dayOff/base/DayOffWhereUniqueInput";
import { MeetingFindManyArgs } from "../../meeting/base/MeetingFindManyArgs";
import { Meeting } from "../../meeting/base/Meeting";
import { MeetingWhereUniqueInput } from "../../meeting/base/MeetingWhereUniqueInput";
import { SickLeaveFindManyArgs } from "../../sickLeave/base/SickLeaveFindManyArgs";
import { SickLeave } from "../../sickLeave/base/SickLeave";
import { SickLeaveWhereUniqueInput } from "../../sickLeave/base/SickLeaveWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EmployeeControllerBase {
  constructor(
    protected readonly service: EmployeeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Employee })
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createEmployee(
    @common.Body() data: EmployeeCreateInput
  ): Promise<Employee> {
    return await this.service.createEmployee({
      data: data,
      select: {
        createdAt: true,
        dateJoined: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Employee] })
  @ApiNestedQuery(EmployeeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async employees(@common.Req() request: Request): Promise<Employee[]> {
    const args = plainToClass(EmployeeFindManyArgs, request.query);
    return this.service.employees({
      ...args,
      select: {
        createdAt: true,
        dateJoined: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Employee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async employee(
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<Employee | null> {
    const result = await this.service.employee({
      where: params,
      select: {
        createdAt: true,
        dateJoined: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Employee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateEmployee(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() data: EmployeeUpdateInput
  ): Promise<Employee | null> {
    try {
      return await this.service.updateEmployee({
        where: params,
        data: data,
        select: {
          createdAt: true,
          dateJoined: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Employee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteEmployee(
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<Employee | null> {
    try {
      return await this.service.deleteEmployee({
        where: params,
        select: {
          createdAt: true,
          dateJoined: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/dayOffs")
  @ApiNestedQuery(DayOffFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "DayOff",
    action: "read",
    possession: "any",
  })
  async findDayOffs(
    @common.Req() request: Request,
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<DayOff[]> {
    const query = plainToClass(DayOffFindManyArgs, request.query);
    const results = await this.service.findDayOffs(params.id, {
      ...query,
      select: {
        createdAt: true,

        employee: {
          select: {
            id: true,
          },
        },

        endDate: true,
        id: true,
        reason: true,
        startDate: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/dayOffs")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async connectDayOffs(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: DayOffWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dayOffs: {
        connect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/dayOffs")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async updateDayOffs(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: DayOffWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dayOffs: {
        set: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/dayOffs")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async disconnectDayOffs(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: DayOffWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dayOffs: {
        disconnect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/meetings")
  @ApiNestedQuery(MeetingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Meeting",
    action: "read",
    possession: "any",
  })
  async findMeetings(
    @common.Req() request: Request,
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<Meeting[]> {
    const query = plainToClass(MeetingFindManyArgs, request.query);
    const results = await this.service.findMeetings(params.id, {
      ...query,
      select: {
        createdAt: true,
        duration: true,

        employee: {
          select: {
            id: true,
          },
        },

        id: true,
        location: true,
        meetingDate: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/meetings")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async connectMeetings(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: MeetingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      meetings: {
        connect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/meetings")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async updateMeetings(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: MeetingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      meetings: {
        set: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/meetings")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async disconnectMeetings(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: MeetingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      meetings: {
        disconnect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/sickLeaves")
  @ApiNestedQuery(SickLeaveFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SickLeave",
    action: "read",
    possession: "any",
  })
  async findSickLeaves(
    @common.Req() request: Request,
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<SickLeave[]> {
    const query = plainToClass(SickLeaveFindManyArgs, request.query);
    const results = await this.service.findSickLeaves(params.id, {
      ...query,
      select: {
        createdAt: true,

        employee: {
          select: {
            id: true,
          },
        },

        endDate: true,
        id: true,
        reason: true,
        startDate: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/sickLeaves")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async connectSickLeaves(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: SickLeaveWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sickLeaves: {
        connect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/sickLeaves")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async updateSickLeaves(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: SickLeaveWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sickLeaves: {
        set: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/sickLeaves")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async disconnectSickLeaves(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: SickLeaveWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sickLeaves: {
        disconnect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }
}
