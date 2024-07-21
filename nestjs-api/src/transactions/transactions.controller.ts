
import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { TenantGuard } from '../tenant/tenant/tenant.guard';
import { JwtAuthGuard } from '../auth/jwt-strategy/jwt-auth.guard';

@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.create(createTransactionDto);
  }


  @Get()
  findAll(@Req() req) {
    return this.transactionsService.findAll();
  }
}