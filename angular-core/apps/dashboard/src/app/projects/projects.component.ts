import {Component, OnInit} from '@angular/core';
import {Project, ProjectsService} from "@workshop/core-data";
import {Observable} from "rxjs";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  primaryColor='red';
  projects$:Observable<Project[]>;

  constructor(private projectsService:ProjectsService) {
  }


  selectedProject;

  ngOnInit() {

   this.getProjects();
  }

  selectProject(project) {
    this.selectedProject = project;

  }

  getProjects(){
    this.projects$ = this.projectsService.all();

  }

  deleteProject(project){
    this.projectsService.delete(project.id).subscribe(result=> this.getProjects());
  }

  cancel(){
    this.selectProject(null);
  }

}
