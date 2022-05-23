export interface GetProductDescriptionDto {
  text?:        string;
  plainText?:   string;
  lastUpdated?: Date;
  dateCreated?: Date;
  snapshot?:    Snapshot;
}

export interface Snapshot {
  url?:    string;
  width?:  number;
  height?: number;
  status?: string;
}
