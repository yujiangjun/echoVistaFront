import {Injectable} from "@angular/core";
import {ApiService} from "../../config/api.service";

export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}
@Injectable()
export class ConfigService{
  constructor(private apiService:ApiService) {}
  configUrl ='assets/config.json';
  getConfig(){
    return this.apiService.get<Config>(this.configUrl,null)
  }
}
