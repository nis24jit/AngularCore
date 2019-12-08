import { Injectable } from '@angular/core';
import {Project} from "./project";
import {HttpClient} from "@angular/common/http";

const BASE_URL = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  model = 'projects';


  constructor(private httpClient : HttpClient) {

  }

  all(){
    return this.httpClient.get(this.getUrl())
  }

  getUrl(){
    return `${BASE_URL}${this.model}`;
  }

  getUrlForId(id){
    return `${this.getUrl()}/${id}`;
  }

  update(project){
    return this.httpClient.patch(this.getUrlForId(project.id), project);
  }

  delete(projectId){
    return this.httpClient.delete(this.getUrlForId(projectId));
  }

  create(project){
    return this.httpClient.post(this.getUrl(), project);
  }
}
