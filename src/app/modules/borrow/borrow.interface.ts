import { Model, Types } from "mongoose";

export interface IBorrow {
  book: Types.ObjectId;
  quantity: number;
  dueDate: Date;
}

export interface BorrowStaticMethod extends Model<IBorrow> {
  updateBookAvailableStatus(bookId: Types.ObjectId): void;
}
