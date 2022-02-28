import mongoose, { Document, Schema } from 'mongoose';

export interface IUniversity {
  name: string;
  location: string;
  address: string;
}

const UniversitySchema: Schema = new Schema({
  name: String,
  location: String,
  address: String,
});

const University = mongoose.model<IUniversity>(
  'Universities',
  UniversitySchema
);

export default University;
