import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TransactionsService {

  constructor(@InjectModel(Transaction) private transactionModel: typeof Transaction) {
  }

  create(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    return this.transactionModel.create({
      payment_date: createTransactionDto.payment_date,
      name: createTransactionDto.name,
      description: createTransactionDto.description,
      category: createTransactionDto.category,
      amount: createTransactionDto.amount,
      type: createTransactionDto.type,
    });
  }

  findAll() {
    return this.transactionModel.findAll();
  }

}
