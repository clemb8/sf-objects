import { SObject } from "./SObject";

export interface SObjectsInfoResponse {
    encoding: string;
    maxBatchSize: number;
    sobjects: SObject[];
}