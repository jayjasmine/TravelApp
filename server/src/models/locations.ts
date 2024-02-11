import mongoose, { Schema, Document } from 'mongoose';

export interface ILocation extends Document {
  address: string;
  label: string;
  iconUrl: string;
}

const LocationSchema: Schema = new Schema({
  address: { type: String, required: true },
  label: { type: String },
  iconUrl: { type: String }
});

export default mongoose.model<ILocation>('Location', LocationSchema);