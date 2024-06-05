import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DayOffServiceBase } from "./base/dayOff.service.base";

@Injectable()
export class DayOffService extends DayOffServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
