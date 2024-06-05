import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SickLeaveServiceBase } from "./base/sickLeave.service.base";

@Injectable()
export class SickLeaveService extends SickLeaveServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
