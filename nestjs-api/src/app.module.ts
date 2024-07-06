import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';
// import { ConfigModule } from '@nestjs/config';
// import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [AppController],
  imports: [
    // ConfigModule.forRoot(),
    // SequelizeModule.forRoot({
    //   dialect: process.env.DB_CONNECTION as any,
    //   host: process.env.DB_HOST,
    //   port: parseInt(process.env.DB_PORT),
    //   username: process.env.DB_USERNAME,
    //   password: process.env.DB_PASSWORD,
    //   database: process.env.DB_DATABASE,
    //   models: [Transaction, Account, Report],
    //   autoLoadModels: true,
    //   synchronize: true,
    //   sync: {
    //     alter: true,
    //   },
    // }),
    TransactionsModule,
  ],
  providers: [AppService],
})
export class AppModule {}
