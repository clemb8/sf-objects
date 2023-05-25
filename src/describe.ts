import axios, { AxiosResponse } from "axios";
import { Parameters } from "./interfaces/Parameters";
import { RequestConfig } from "./interfaces/RequestConfig";
import { createAxiosHeader } from "./utils";
import { SObject, SObjectDescribe } from "./interfaces/SObject";

export default class Describe {

    private connection: Parameters;
    private endpoint: string;

    constructor(connection: Parameters) {
        this.connection = connection;
        this.endpoint = `${this.connection.instanceUrl}/services/data/v${this.connection.apiVersion}/sobjects`;
    }

    private getRequestConfig(contentType: string, accept: string, endpoint: string, date?: string): RequestConfig {
        let headers;
        if(date) { 
            headers = createAxiosHeader(contentType, accept, this.connection.accessToken, date);
        } else {
            headers = createAxiosHeader(contentType, accept, this.connection.accessToken);
        }
        const requestConfig = { headers, endpoint }
        return requestConfig;
    }

    public async getSObjects(): Promise<SObject[]> {
        const requestConfig = this.getRequestConfig('application/json', 'application/json', this.endpoint);
        const response: AxiosResponse = await axios.get(requestConfig.endpoint, requestConfig.headers);
        const sobjects: SObject[] = response.data.sobjects;
        return sobjects;
    }

    public async getSObject(sobject: string): Promise<SObject> {
        const requestConfig = this.getRequestConfig('application/json', 'application/json', `${this.endpoint}/${sobject}`);
        const response: AxiosResponse = await axios.get(requestConfig.endpoint, requestConfig.headers);
        const sobjectInfo: SObject = response.data;
        return sobjectInfo;
    }

    public async getSObjectsIsChanged(date: Date): Promise<SObject[] | null> {
        const requestConfig = this.getRequestConfig('application/json', 'application/json', this.endpoint, date.toUTCString());
        const response: AxiosResponse = await axios.get(requestConfig.endpoint, requestConfig.headers);
        if(response.status === 304) return null;
        const sobjects: SObject[] = response.data.sobjects;
        return sobjects;
    }

    public async getSobjectDescribe(sobject: string): Promise<SObject> {
        const requestConfig = this.getRequestConfig('application/json', 'application/json', `${this.endpoint}/${sobject}/describe`);
        const response: AxiosResponse = await axios.get(requestConfig.endpoint, requestConfig.headers);
        const sobjectDescribe: SObjectDescribe = response.data;
        return sobjectDescribe;
    }

    public async getSobjectDescribeIsChanged(sobject: string, date: Date): Promise<SObject | null> {
        const requestConfig = this.getRequestConfig('application/json', 'application/json', `${this.endpoint}/${sobject}/describe`, date.toUTCString());
        const response: AxiosResponse = await axios.get(requestConfig.endpoint, requestConfig.headers);
        if(response.status === 304) return null;
        const sobjectDescribe: SObjectDescribe = response.data;
        return sobjectDescribe;
    }

}